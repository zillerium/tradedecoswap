'use client';

import { formatTo2DP, formatUSD, formatPercent } from '../Util/formatUtils';
import SlippageGauge from './SlippageGauge';

type SlippageData = {
  wethAmount: number;
  startPrice: number;
  endPrice: number;
  slippagePercent: number;
  expectedUSDC: number;
  actualUSDC: number;
  slippageUSD: number;
  error?: string; // Optional error field
};

type SlippageResultsProps = {
  data: SlippageData | null;
};

export default function SlippageResults({ data }: SlippageResultsProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-full">
      <h2 className="text-2xl font-bold text-white mb-4">Slippage Calculation</h2>
      
      {!data ? (
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 text-center">
            Make a request
          </p>
          <div className="h-32 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-gray-500">Complete the request data</span>
          </div>
        </div>
      ) : data.error ? (
        // Display error message
        <div className="flex flex-col gap-4">
          <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4">
            <p className="text-yellow-400 text-center">
              {data.error}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Line 1: Swap Request */}
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm">
              Swap Request: <span className="text-white font-semibold">WETH to USDC: {formatTo2DP(data.wethAmount)} WETH</span>
            </p>
          </div>

          {/* Line 2: Expected USDC + Actual USDC */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-gray-400 text-sm">
                Expected USDC: <span className="text-white font-semibold">{formatUSD(data.expectedUSDC)}</span>
              </p>
              <p className="text-gray-400 text-sm">
                Actual USDC: <span className="text-white font-semibold">{formatUSD(data.actualUSDC)}</span>
              </p>
            </div>
          </div>

          {/* Line 3: Start Price + End Price */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-gray-400 text-sm">
                Start Price: <span className="text-white font-semibold">{formatUSD(data.startPrice)}</span>
              </p>
              <p className="text-gray-400 text-sm">
                End Price: <span className="text-white font-semibold">{formatUSD(data.endPrice)}</span>
              </p>
            </div>
          </div>

          {/* Line 4: Slippage USDC + Slippage Percent */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-gray-400 text-sm">
                Slippage USDC: <span className="text-red-400 font-semibold">{formatUSD(data.slippageUSD)}</span>
              </p>
              <p className="text-gray-400 text-sm">
                Slippage Percent: <span className="text-red-400 font-semibold">{formatPercent(data.slippagePercent)}</span>
              </p>
            </div>
          </div>

          {/* Slippage Gauge Visualization */}
          <div className="bg-gray-800 rounded-lg p-6">
            <SlippageGauge slippagePercent={data.slippagePercent} maxPercent={1} />
          </div>
        </div>
      )}
    </div>
  );
}
