"use client";

import PoolHeaderRow from "@/components/Pool/PoolHeaderRow";
import PoolDetailRow from "@/components/Pool/PoolDetailRow";

type Props = {
  token0: {
    symbol: string;
    icon: string;
    address: string;
  };
  token1: {
    symbol: string;
    icon: string;
    address: string;
  };
  fee: number;
  poolAddress: string;
};

export default function PoolMetaData({
  token0,
  token1,
  fee,
  poolAddress,
}: Props) {
  return (
    <div className="border rounded p-4 bg-white space-y-6">
      <div className="w-full px-4">
        <div className="w-fit">
          <PoolHeaderRow
            token0={{ symbol: token0.symbol, icon: token0.icon }}
            token1={{ symbol: token1.symbol, icon: token1.icon }}
            poolAddress={poolAddress}
            fee={fee}
          />
        </div>
      </div>

      <PoolDetailRow token0={token0} token1={token1} fee={fee} />
    </div>
  );
}
