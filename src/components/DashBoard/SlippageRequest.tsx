'use client';

import { useState } from 'react';

type SlippageData = {
  wethAmount: number;
  startPrice: number;
  endPrice: number;
  slippagePercent: number;
  expectedUSDC: number;
  actualUSDC: number;
  slippageUSD: number;
  error?: string;
};

type SlippageRequestProps = {
  onSlippageData: (data: SlippageData | null) => void;
};

export default function SlippageRequest({ onSlippageData }: SlippageRequestProps) {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('1');
  const [token1, setToken1] = useState('weth');
  const [token2, setToken2] = useState('usdc');

  const handleGetSlippage = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/get_slippage?amount=${amount}&token1=${token1}&token2=${token2}`);
      const json = await res.json();
      console.log("Slippage data:", json);
      
      // Check if response contains an error
      if (json.error) {
        // Pass a special error object to indicate small amount
        onSlippageData({ 
          error: "No slippage because the amount is too small",
          wethAmount: 0,
          startPrice: 0,
          endPrice: 0,
          slippagePercent: 0,
          expectedUSDC: 0,
          actualUSDC: 0,
          slippageUSD: 0
        });
      } else {
        // Pass data to parent component
        onSlippageData(json);
      }
    } catch (err) {
      console.error("Slippage fetch failed:", err);
      onSlippageData({ 
        error: "Failed to fetch slippage data",
        wethAmount: 0,
        startPrice: 0,
        endPrice: 0,
        slippagePercent: 0,
        expectedUSDC: 0,
        actualUSDC: 0,
        slippageUSD: 0
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-full">
      <h2 className="text-2xl font-bold text-white mb-4">Slippage Assessment</h2>
      <div className="flex flex-col gap-4">
        {/* Exchange Dropdown - inline label */}
        <div className="flex items-center gap-3">
          <label className="text-gray-400 text-sm whitespace-nowrap">Exchange:</label>
          <select className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none">
            <option value="uniswap-v3">🦄 Uniswap V3</option>
          </select>
        </div>

        {/* Network Dropdown - inline label */}
        <div className="flex items-center gap-3">
          <label className="text-gray-400 text-sm whitespace-nowrap">Network:</label>
          <select className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none">
            <option value="base">🔵 Base</option>
          </select>
        </div>

        {/* Token Dropdowns Row - no labels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Token 1 Dropdown */}
          <select 
            value={token1}
            onChange={(e) => setToken1(e.target.value)}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none"
          >
            <option value="weth">WETH</option>
          </select>

          {/* Token 2 Dropdown */}
          <select 
            value={token2}
            onChange={(e) => setToken2(e.target.value)}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none"
          >
            <option value="usdc">USDC</option>
          </select>
        </div>

        {/* Fees Dropdown - no label */}
        <select className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none">
          <option value="0.05">0.05%</option>
        </select>

        {/* Amount Input */}
        <div className="flex items-center gap-3">
          <label className="text-gray-400 text-sm whitespace-nowrap">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
            placeholder="Enter amount"
            step="0.01"
            min="0"
          />
        </div>

        {/* Get Slippage Button */}
        <button
          onClick={handleGetSlippage}
          disabled={loading}
          className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Loading..." : "Get Slippage"}
        </button>
      </div>
    </div>
  );
}
