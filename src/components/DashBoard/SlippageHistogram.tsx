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
    console.log("SlippageHistogram useEffect triggered, shouldFetch:", shouldFetch);
    if (shouldFetch) {
      console.log("Calling handleGetTickData...");
      handleGetTickData();
    }
  }, [shouldFetch]);

  const handleGetTickData = async () => {
    try {
      console.log("Starting fetch to /api/slippage_liquidity_view");
      setLoading(true);
      const res = await fetch("/api/slippage_liquidity_view");
      console.log("Fetch response status:", res.status, res.statusText);
      
      if (!res.ok) {
        console.error("API returned error status:", res.status);
        setPoolLiquidityViews(null);
        return;
      }
      
      const json = await res.json();
      console.log("Slippage tick data received:", JSON.stringify(json, null, 2));
      console.log("Is array?", Array.isArray(json));
      console.log("Type of json:", typeof json);
      console.log("Has currentPrice?", json?.currentPrice);

      // Handle both single object and array responses
      let dataArray: PoolLiquidityView[];
      
      if (Array.isArray(json)) {
        console.log("Response is array, length:", json.length);
        dataArray = json;
      } else if (json && typeof json === 'object' && json.currentPrice !== undefined) {
        // Single object returned - wrap it in an array
        console.log("Response is single object, wrapping in array");
        dataArray = [json];
      } else {
        console.error("Unexpected liquidity response shape:", json);
        setPoolLiquidityViews(null);
        return;
      }

      console.log("DataArray before setting:", dataArray);
      if (dataArray.length >= 1) {
        console.log("Setting poolLiquidityViews with", dataArray.length, "items");
        setPoolLiquidityViews(dataArray);
        console.log("poolLiquidityViews set successfully");
      } else {
        console.error("Data array is empty");
        setPoolLiquidityViews(null);
      }
    } catch (err) {
      console.error("Tick fetch failed with error:", err);
      if (err instanceof Error) {
        console.error("Error message:", err.message);
        console.error("Error stack:", err.stack);
      }
      setPoolLiquidityViews(null);
    } finally {
      console.log("Fetch complete, setting loading to false");
      setLoading(false);
      if (onFetchComplete) {
        console.log("Calling onFetchComplete callback");
        onFetchComplete();
      }
    }
  };

  console.log("SlippageHistogram render - loading:", loading, "poolLiquidityViews:", poolLiquidityViews?.length);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-4">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <p className="text-gray-400 text-center">Loading liquidity data...</p>
        </div>
      </div>
    );
  }

  if (!poolLiquidityViews || poolLiquidityViews.length < 1) {
    console.log("Not rendering histograms - no data or insufficient data");
    return null;
  }

  console.log("Rendering histograms with", poolLiquidityViews.length, "views");
  
  // Calculate dynamic width based on number of bars
  const view = poolLiquidityViews[0];
  const numBars = view.liquidity.length;
  const maxBarWidth = 80; // Maximum width per bar in pixels
  const minWidth = 300; // Minimum chart width
  const maxWidth = 500; // Maximum chart width
  
  // Calculate optimal width: number of bars * max bar width, but constrained
  const calculatedWidth = Math.min(maxWidth, Math.max(minWidth, numBars * maxBarWidth));
  
  console.log("Number of bars:", numBars, "Calculated width:", calculatedWidth);
  
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
