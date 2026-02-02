"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  ReferenceLine,
} from "recharts";

type LiquidityBucket = {
  priceLower: number;
  priceUpper: number;
  liquidityUSD: string;
};

type PoolLiquidityHistogramProps = {
  currentPrice?: number;
  buckets: LiquidityBucket[];
  fetchedAt?: string; // ISO string
};

export default function PoolLiquidityHistogram({
  currentPrice,
  buckets,
  fetchedAt,
}: PoolLiquidityHistogramProps) {
  const chartData = buckets.map((b) => ({
    priceKey: `${b.priceLower.toFixed(2)}–${b.priceUpper.toFixed(2)}`,
    priceMid: (b.priceLower + b.priceUpper) / 2,
    priceLower: b.priceLower,
    priceUpper: b.priceUpper,
    liquidityUSD: Number(b.liquidityUSD),
    isActive:
      currentPrice !== undefined &&
      currentPrice >= b.priceLower &&
      currentPrice < b.priceUpper,
  }));

  function formatFetchedAt(iso?: string) {
    if (!iso) return null;
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  // Calculate tick positions at bar edges
  const firstPrice = buckets[0].priceLower;
  const lastPrice = buckets[buckets.length - 1].priceUpper;
  const middlePrice = (firstPrice + lastPrice) / 2;

  return (
    <div className="w-full max-w-[1024px] h-[360px]">
      <h2 className="text-white text-lg font-semibold mb-2">
        {currentPrice !== undefined && (
          <span className="text-gray-400 ml-3 text-base font-normal">
            Price (USD): ${currentPrice.toFixed(4)}
            {fetchedAt && <>{" "}at {formatFetchedAt(fetchedAt)}</>}
          </span>
        )}
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 60, bottom: 50 }}
        >
          <XAxis
            dataKey="priceMid"
            type="number"
            domain={[firstPrice, lastPrice]}
            ticks={[firstPrice, middlePrice, lastPrice]}
            stroke="#e5e7eb"
            tick={{ fill: "#e5e7eb", fontSize: 12 }}
            tickFormatter={(v) => `$${Math.round(v)}`}
          />

          <YAxis
            stroke="#e5e7eb"
            tick={{ fill: "#e5e7eb", fontSize: 12 }}
            tickFormatter={(v) =>
              typeof v === "number" ? v.toLocaleString() : ""
            }
          />

          <Tooltip
            cursor={false}
            formatter={(v) => (typeof v === "number" ? v.toLocaleString() : "")}
            labelFormatter={(_, payload) => {
              if (!payload || payload.length === 0) return "";
              return `Price ≈ $${payload[0].payload.priceKey}`;
            }}
          />

          {currentPrice && (
            <ReferenceLine
              x={currentPrice}
              stroke="#ef4444"
              strokeDasharray="3 3"
            />
          )}
          <Bar dataKey="liquidityUSD" activeBar={false}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.isActive ? "#F51E87" : "#2172E5"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
