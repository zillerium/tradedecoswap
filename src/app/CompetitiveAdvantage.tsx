"use client";

export default function CompetitiveAdvantage() {
  return (
    <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
      {/* Icon - using a gradient box similar to the example */}
      <div className="mb-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
        <svg 
          className="w-7 h-7 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 10V3L4 14h7v7l9-11h-7z" 
          />
        </svg>
      </div>
      
      {/* Small header in blue */}
      <p className="text-sm text-blue-400 uppercase tracking-wider mb-2">
        The Decoswap Advantage
      </p>
      
      {/* Main header */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Find profitable pools. Backtest results. Track performance.
      </h3>
      
      {/* Description text */}
      <p className="text-gray-400 text-base leading-relaxed">
        Discover optimal prices and routes via advanced AI analytics tools. These assess slippage and prices across exchanges. 
      </p>
    </div>
  );
}
