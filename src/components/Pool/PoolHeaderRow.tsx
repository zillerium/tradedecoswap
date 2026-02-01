"use client";

import { TokenIcon } from "@/components/Util/TokenIcon";
import { TokenSymbol } from "@/components/Util/TokenSymbol";
import { TokenSeparator } from "@/components/Util/TokenSeparator";
import { FeeBadge } from "@/components/Util/FeeBadge";
import { AddressDisplay } from "@/components/Util/AddressDisplay";
import { ExternalLinkIcon } from "@/components/Util/ExternalLinkIcon";
import { ProtocolBadge } from "@/components/Util/ProtocolBadge";
import { formatFee } from "@/app/lib/uniswap/fee";

interface PoolHeaderRowProps {
  token0: {
    symbol: string;
    icon: string;
  };
  token1: {
    symbol: string;
    icon: string;
  };
  poolAddress: string;
  fee: number;
}

export default function PoolHeaderRow({
  token0,
  token1,
  poolAddress,
  fee,
}: PoolHeaderRowProps) {
  return (
    <div
      className="
        border rounded bg-gray-50 text-sm
        px-3 py-2
        flex flex-col gap-2
        md:flex-row md:items-center 
      "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2 min-w-0">
        {/* Tokens + fee */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
            Pool:
          </span>

          <div className="flex items-center gap-1">
            <TokenIcon src={token0.icon} alt={token0.symbol} />
            <TokenSymbol symbol={token0.symbol} />
            <TokenSeparator />
            <TokenIcon src={token1.icon} alt={token1.symbol} />
            <TokenSymbol symbol={token1.symbol} />
          </div>

          {/* ✅ REAL FEE */}
          <FeeBadge value={formatFee(fee)} />
        </div>

        {/* Address */}
        <div className="min-w-0">
          <AddressDisplay address={poolAddress} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        <ExternalLinkIcon
          href={`https://basescan.org/address/${poolAddress}`}
          src="/basescan-dark.png"
          alt="Basescan"
        />
        <ExternalLinkIcon
          href={`https://dexscreener.com/base/${poolAddress}`}
          src="/dexscreener-logo.png"
          alt="Dexscreener"
        />
        <ProtocolBadge
          iconSrc="/uniswap-logo.png"
          name="Uniswap v3"
          href={`https://app.uniswap.org/explore/pools/base/${poolAddress}`}
        />
      </div>
    </div>
  );
}
