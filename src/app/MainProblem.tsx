"use client";

export default function MainProblem() {
  return (
    <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
      {/* Icon */}
      <div className="mb-4">
        <svg 
          className="w-12 h-12 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M4 7h16M4 12h16M4 17h16" 
          />
        </svg>
      </div>
      
      {/* Small header in blue */}
      <p className="text-sm text-blue-400 uppercase tracking-wider mb-2">
        Why Trading is Hard
      </p>
      
      {/* Main header */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        There are 1500 DEXs. <br />
        All have their own prices.
      </h3>
      
      {/* Description text */}
      <p className="text-gray-400 text-base leading-relaxed">
        Prices change every second 24/7. AMMs have inherent slippage. This is almost <span className="text-white font-semibold">impossible</span> to track without tools.
      </p>
    </div>
  );
}
