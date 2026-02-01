"use client";

import { TokenIcon } from "@/components/Util/TokenIcon";
import { TokenSymbol } from "@/components/Util/TokenSymbol";
import { AddressDisplay } from "@/components/Util/AddressDisplay";
import { formatFee } from "@/app/lib/uniswap/fee";
import FeeInline from "@/components/Util/FeeInline";

interface TokenInfo {
  symbol: string;
  icon: string;
  address: string;
}

interface PoolDetailRowProps {
  token0: TokenInfo;
  token1: TokenInfo;
  fee: number;
}

export default function PoolDetailRow({
  token0,
  token1,
  fee,
}: PoolDetailRowProps) {
  return (
    <div className="w-full px-4">
      <div className="w-fit">
        <div
          className="
            border rounded bg-gray-50 text-sm
            px-3 py-2
            flex flex-col gap-2
            md:flex-row md:items-center
          "
        >
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
            Tokens:
          </span>
          <div className="flex items-center gap-2 min-w-0">
            <TokenIcon src={token0.icon} alt={token0.symbol} />
            <TokenSymbol symbol={token0.symbol} />
            <AddressDisplay address={token0.address} />
          </div>

          <div className="flex items-center gap-2 min-w-0">
            <TokenIcon src={token1.icon} alt={token1.symbol} />
            <TokenSymbol symbol={token1.symbol} />
            <AddressDisplay address={token1.address} />
          </div>

          <FeeInline value={formatFee(fee)} />
        </div>
      </div>
    </div>
  );
}
