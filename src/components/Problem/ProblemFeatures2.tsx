"use client";

export default function ProblemFeatures2() {
  return (
    <div className="flex-1 p-6 rounded-lg">
      <div className="flex flex-col w-full">
        {/* Heading */}
        {/* Boxes wrapper */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xl bg-gray-900/80  p-6 rounded-xl">
            <div className="flex items-start gap-4 ">
              <div className="flex-shrink-0  flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-gray-200 leading-relaxed">
                $43 Million Dollars in Weekly Fees
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl bg-gray-900/80 p-6 rounded-xl">
            <div className="flex items-start gap-4  ">
              <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-gray-200 leading-relaxed">
                Uniswap v3, $5 Million Dollars in Weekly Fees
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl bg-gray-900/80 p-6 rounded-xl">
            <div className="flex items-start gap-4  ">
              <div className="flex-shrink-0  flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-gray-200 leading-relaxed">
                $1 Trillion Dollars in Perpetual Swaps (Monthly)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
