"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import TradingViewWidget from "@/components/TradingView/TradingViewWidget";
import PoolMetaData from "@/components/Pool/PoolMetaData";
import PoolMetaLiquidity from "@/components/Pool/PoolMetaLiquidity";
import CurrencyPairSelect from "@/components/TradingView/CurrencyPairSelect";
import PoolLiquidityHistogram from "@/components/Pool/PoolLiquidityHistogram";
import { CurrencyPairList } from "@/components/TradingView/CurrencyPairList";
import LiquidityRangeStatsChart from "../Pool/LiquidityRangeStatsChart";

import { ExternalLink } from "lucide-react";


import { getTokenInfo } from "@/app/lib/tokens/tokenLookup";

type Slot0 = {
  sqrtPriceX96: bigint | string;
  tick: number;
};

type LiquidityRange = {
  range: string;
  rangePercent: number;
  liquidityUSD: number;
  percentage: number;
  priceRange: {
    lower: number;
    upper: number;
  };
  tickRange: {
    lower: number;
    upper: number;
  };
};

type LiquidityRangeStats = {
  timestamp: string;
  currentTick: number;
  currentPrice: number;
  poolAddress: string;
  chain: string;
  dex: string;
  totalLiquidity: number;
  concentrations: LiquidityRange[];
};


type ProviderResponse = {
  token0: string;
  token1: string;
  fee: number;
  liquidity: bigint | string;
  slot0: Slot0;
};

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

export default function DashBoardCom() {
  // liquidity-only state
  const [liquidityData, setLiquidityData] = useState<ProviderResponse | null>(
    null,
  );

  const [loadingLiquidity, setLoadingLiquidity] = useState(false);
  const [rangeStats, setRangeStats] = useState<LiquidityRangeStats | null>(null);

  const [selectedPairIndex, setSelectedPairIndex] = useState(1);
  const [loadingRawPool, setLoadingRawPool] = useState(false);
  const [loadingTickPool, setLoadingTickPool] = useState(false);
  const [poolLiquidityViews, setPoolLiquidityViews] =
  useState<PoolLiquidityView[] | null>(null);


  const selectedPair = CurrencyPairList[selectedPairIndex];

  // ---- STATIC POOL CONTEXT (no API calls) ----

  const handleLoadLiquidity = async () => {
    try {
      setLoadingLiquidity(true);
      const res = await fetch("/api/provider");
      const json = await res.json();
      setLiquidityData(json);
    } catch (err) {
      console.error("Liquidity fetch failed:", err);
    } finally {
      setLoadingLiquidity(false);
    }
  };

const handleGetRangeStats = async () => {
  try {
    const res = await fetch("/api/get_liquidity_range_stats");
    const json = await res.json();

    console.log("Range stats data:", json);
    setRangeStats(json);

  } catch (err) {
    console.error("Range stats fetch failed:", err);
  }
};


  const handleGetRawPoolData = async () => {
    try {
      setLoadingRawPool(true);
      const res = await fetch("/api/get_pool_raw");
      const json = await res.json();
      console.log("Raw pool data:", json);
    } catch (err) {
      console.error("Raw pool fetch failed:", err);
    } finally {
      setLoadingRawPool(false);
    }
  };

const handleGetTickData = async () => {
  try {
    setLoadingTickPool(true);

    const res = await fetch("/api/pool_liquidity_view");
    const json = await res.json();

    console.log("Tick data (array):", json);

    if (Array.isArray(json) && json.length >= 3) {
      setPoolLiquidityViews(json); // store ALL data
    } else {
      console.error("Unexpected liquidity response shape");
      setPoolLiquidityViews(null);
    }
  } catch (err) {
    console.error("Tick fetch failed:", err);
  } finally {
    setLoadingTickPool(false);
  }
};

  const token0Info = getTokenInfo(selectedPair.token0Address);
  const token1Info = getTokenInfo(selectedPair.token1Address);
  if (!token0Info || !token1Info) {
    return (
      <div className="flex flex-col min-h-screen bg-black w-full p-6 gap-6">
        <Navbar />
        <p className="text-red-400">
          Unknown token metadata for selected pool.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black w-full p-0 gap-0">
      <Navbar />

      <h1 className="text-4xl text-white font-bold">
        Uniswap v3 (Base), WETH and USDC/T
      </h1>

      {/* ===============================
Currency pair selector
=============================== */}
      <CurrencyPairSelect
        value={selectedPairIndex}
        onChange={setSelectedPairIndex}
      />

      <PoolMetaData
        token0={{
          symbol: token0Info.symbol,
          icon: token0Info.icon,
          address: selectedPair.token0Address,
        }}
        token1={{
          symbol: token1Info.symbol,
          icon: token1Info.icon,
          address: selectedPair.token1Address,
        }}
        fee={selectedPair.fee}
        poolAddress={selectedPair.poolAddress}
      />

      {/* ===============================
Market chart (always visible)
=============================== */}
      <div className="w-full flex justify-center py-4">
        <div
          className="
      w-full
      max-w-[1024px]
      h-[520px]
      md:h-[480px]
      sm:h-[360px]
      bg-black
      rounded-lg
      overflow-hidden
    "
        >
          <TradingViewWidget symbol={selectedPair.tvSymbol} />
        </div>
      </div>

      {/* ===============================
          Liquidity action
         =============================== */}
      <button
        onClick={handleLoadLiquidity}
        disabled={true}
        className="w-fit px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loadingLiquidity ? "Loading liquidity…" : "Load Liquidity"}
      </button>

      <button
        onClick={handleGetRawPoolData}
        disabled={true}
        className="w-fit px-4 py-2 rounded bg-black text-white hover:bg-black disabled:opacity-50"
      >
        {loadingRawPool ? "Fetching raw pool data…" : "Get Raw Pool Data"}
      </button>


<div className="w-full flex justify-center py-3">
  <button
    onClick={handleGetTickData}
    disabled={loadingTickPool}
    className="
      px-4
      py-2
      rounded
      bg-blue-600
      text-white
      hover:bg-blue-600
      disabled:opacity-50
    "
  >
    {loadingTickPool ? "Fetching tick data…" : "Get Tick Data"}
  </button>

<button
    onClick={handleGetRangeStats}
    className="
      px-4
      py-2
      rounded
      bg-slate-600
      text-white
      hover:bg-slate-700
    "
  >
    Get Range Stats
  </button>
</div>


<div className="w-full flex justify-center py-3">
  <div className="w-full max-w-[1200px] flex items-center gap-3">
    <h2 className="text-white text-xl font-semibold">
      Liquidity
    </h2>

    <a
      href="https://app.uniswap.org/explore/pools/base/0xd0b53d9277642d899df5c87a3966a349a798f224"
      target="_blank"
      rel="noopener noreferrer"
className="text-white hover:text-blue-400 transition-colors"

      title="View pool on Uniswap"
    >
<ExternalLink size={18} className="text-white" />

    </a>
  </div>
</div>

{rangeStats && (
  <div className="w-full flex justify-center py-4">
    <div className="w-full max-w-[900px] bg-black rounded-lg p-4">
      <LiquidityRangeStatsChart data={rangeStats} />
    </div>
  </div>
)}

{poolLiquidityViews && poolLiquidityViews.length >= 3 && (
  <div className="w-full flex justify-center py-4">
    <div
      className="
        w-full
        max-w-[1200px]
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4
      "
    >
      {poolLiquidityViews.slice(0, 3).map((view, idx) => (
        <div
          key={idx}
          className="
            w-full
            h-[360px]
            md:h-[480px]
            bg-black
            rounded-lg
            overflow-hidden
          "
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
)}


      {/* ===============================
          Liquidity analytics (optional)
         =============================== */}
      {liquidityData && (
        <PoolMetaLiquidity
          token0Address={liquidityData.token0}
          token1Address={liquidityData.token1}
          liquidity={liquidityData.liquidity}
          slot0={liquidityData.slot0}
        />
      )}
    </div>
  );
}
