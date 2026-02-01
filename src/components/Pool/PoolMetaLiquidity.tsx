"use client";

import KeyValueBlock from "./KeyValueBlock";
import { sqrtPriceX96ToPrice } from "@/app/lib/uniswap/price";
import { liquidityToDepth } from "@/app/lib/uniswap/depth";
import { getTokenInfo } from "@/app/lib/tokens/tokenLookup";

type Slot0 = {
  sqrtPriceX96: bigint | string;
  tick: number;
};

type Props = {
  token0Address: string;
  token1Address: string;
  liquidity: bigint | string;
  slot0: Slot0;
};

export default function PoolMetaLiquidity({
  token0Address,
  token1Address,
  liquidity,
  slot0,
}: Props) {
  const token0Info = getTokenInfo(token0Address);
  const token1Info = getTokenInfo(token1Address);

  if (!token0Info || !token1Info) return null;

  const spotPrice = sqrtPriceX96ToPrice(
    slot0.sqrtPriceX96.toString(),
    token0Info.decimals,
    token1Info.decimals,
  );

  const depth = liquidityToDepth(
    liquidity.toString(),
    slot0.sqrtPriceX96.toString(),
    token0Info.decimals,
    token1Info.decimals,
  );

  return (
    <div className="border rounded p-4 bg-white space-y-6">
      <KeyValueBlock data={{ slot0, liquidity }} />

      <div className="flex gap-2">
        <span className="w-64 font-medium text-gray-700">spot price</span>
        <span>
          {spotPrice.toFixed(2)} {token1Info.symbol} / {token0Info.symbol}
        </span>
      </div>

      <div className="pl-6 space-y-1 text-sm text-gray-800">
        <div>
          ≈ {depth.amount0.toFixed(2)} {token0Info.symbol}
        </div>
        <div>
          ≈{" "}
          {depth.amount1.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}{" "}
          {token1Info.symbol}
        </div>
      </div>
    </div>
  );
}
