"use client";

type RangeStat = {
  range: string;
  percentage: number;
  liquidityUSD: number;
};

type Props = {
  data: {
    currentPrice: number;
    concentrations: RangeStat[];
  };
};

export default function LiquidityRangeStatsChart({ data }: Props) {
  return (
    <div className="text-white space-y-4">
      <div className="text-lg font-semibold">
        Current Price:{" "}
        <span className="text-gray-300">
          ${data.currentPrice.toFixed(2)} USDC per WETH
        </span>
      </div>

      <div className="space-y-3">
        {data.concentrations.map((c, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-[160px] text-sm text-gray-300">
              Within {c.range}
            </div>

            <div className="flex-1 bg-gray-800 h-5 rounded overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{ width: `${c.percentage}%` }}
              />
            </div>

            <div className="w-[140px] text-sm text-right text-gray-300">
              ${Math.round(c.liquidityUSD).toLocaleString()} (
              {c.percentage}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

