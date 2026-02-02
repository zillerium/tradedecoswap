'use client';

import { useState, useEffect } from 'react';
import PoolLiquidityHistogram from '@/components/Pool/PoolLiquidityHistogram';

type LiquidityBucket = {
  priceLower: number;
  priceUpper: number;
  liquidityUSD: string;
};

type PoolLiquidityView = {
  poolAddress: string;
  fetchedAt: string;
  currentPrice: number;
  priceStart: number;
  priceEnd: number;
  priceStep: number;
  liquidity: LiquidityBucket[];
};

type SlippageHistogramProps = {
  shouldFetch: boolean;
  onFetchComplete?: () => void;
};

export default function SlippageHistogram({ shouldFetch, onFetchComplete }: SlippageHistogramProps) {
  const [loading, setLoading] = useState(false);
  const [poolLiquidityViews, setPoolLiquidityViews] = useState<PoolLiquidityView[] | null>(null);

  useEffect(() => {
    if (shouldFetch) {
      handleGetTickData();
    }
  }, [shouldFetch]);

  const handleGetTickData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/slippage_liquidity_view");
      
      if (!res.ok) {
        console.error("API returned error status:", res.status);
        setPoolLiquidityViews(null);
        return;
      }
      
      const json = await res.json();

      // Handle both single object and array responses
      let dataArray: PoolLiquidityView[];
      
      if (Array.isArray(json)) {
        dataArray = json;
      } else if (json && typeof json === 'object' && json.currentPrice !== undefined) {
        // Single object returned - wrap it in an array
        dataArray = [json];
      } else {
        console.error("Unexpected liquidity response shape:", json);
        setPoolLiquidityViews(null);
        return;
      }

      if (dataArray.length >= 1) {
        setPoolLiquidityViews(dataArray);
      } else {
        console.error("Data array is empty");
        setPoolLiquidityViews(null);
      }
    } catch (err) {
      console.error("Tick fetch failed with error:", err);
      setPoolLiquidityViews(null);
    } finally {
      setLoading(false);
      if (onFetchComplete) {
        onFetchComplete();
      }
    }
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center py-4">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <p className="text-gray-400 text-center">Loading liquidity data...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if no data yet (normal state before user clicks button)
  if (!poolLiquidityViews || poolLiquidityViews.length < 1) {
    return null;
  }

  // Safely access view data
  const view = poolLiquidityViews[0];
  if (!view || !view.liquidity) {
    console.error("Invalid view data structure");
    return null;
  }

  // Calculate dynamic width based on number of bars
  const numBars = view.liquidity.length;
  const maxBarWidth = 80; // Maximum width per bar in pixels
  const minWidth = 300; // Minimum chart width
  const maxWidth = 500; // Maximum chart width
  
  // Calculate optimal width: number of bars * max bar width, but constrained
  const calculatedWidth = Math.min(maxWidth, Math.max(minWidth, numBars * maxBarWidth));
  
  return (
    <div className="w-full flex justify-center py-8 mt-8">
      <div style={{ width: `${calculatedWidth}px` }}>
        <h3 className="text-white text-xl font-semibold mb-4 text-center">
          Liquidity Distribution
        </h3>
        {poolLiquidityViews.slice(0, 1).map((view, idx) => (
          <div
            key={idx}
            className="w-full h-[400px] bg-gray-900 rounded-lg overflow-hidden border border-gray-800 p-4"
          >
            <PoolLiquidityHistogram
              currentPrice={view.currentPrice}
              buckets={view.liquidity}
              fetchedAt={view.fetchedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
