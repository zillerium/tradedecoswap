"use client";

import Image from "next/image";
import CopyText from "./CopyText";

interface TokenDisplayProps {
  label: string; // "token0" | "token1"
  symbol: string; // "WETH" | "USDC"
  address: string;
  iconSrc: string; // "/icons/weth-logo.png"
}

export default function TokenDisplay({
  label,
  symbol,
  address,
  iconSrc,
}: TokenDisplayProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="w-64 font-medium text-gray-700">{label}</span>

      <div className="flex items-center gap-1">
        <Image src={iconSrc} alt={symbol} width={20} height={20} />
        <span className="font-semibold">{symbol}</span>
        <CopyText copiedText={address} />
      </div>
    </div>
  );
}
