"use client";

export default function SolutionFeatures() {
  return (
    <div className="flex-1 p-6 rounded-lg">
      <div className="flex flex-col w-full">
        {/* Heading */}
        <h2 className="text-3xl text-white font-semibold text-center mb-10">
          Liquidity Yields
        </h2>
        {/* Boxes wrapper */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xl bg-gray-900/80  p-6 rounded-xl">
            <div className="flex items-start gap-4 ">
              <div className="flex-shrink-0  flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-gray-200 leading-relaxed">Minimizing Losses</p>
            </div>
          </div>

          <div className="w-full max-w-xl bg-gray-900/80 p-6 rounded-xl">
            <div className="flex items-start gap-4  ">
              <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-gray-200 leading-relaxed">
                Automated Management
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl bg-gray-900/80 p-6 rounded-xl">
            <div className="flex items-start gap-4  ">
              <div className="flex-shrink-0  flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-gray-200 leading-relaxed">AI Decisions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
