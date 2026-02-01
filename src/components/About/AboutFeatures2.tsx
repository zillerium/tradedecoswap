"use client";

export default function AboutFeatures2() {
  return (
    <div className="flex-1 p-6 rounded-lg">
      <div className="flex flex-col w-full">
        {/* Heading */}
        {/* Boxes wrapper */}
	<div className="flex flex-col items-center gap-6 border border-white bg-white rounded-xl p-6">

          <div className="w-full max-w-xl bg-white  border border-black p-6 rounded-xl">
            <div className="flex items-start gap-4 ">
              <div className="flex-shrink-0  flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-black leading-relaxed">
                Decision making tools
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl bg-white border border-black  p-6 rounded-xl">
            <div className="flex items-start gap-4   ">
              <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-black leading-relaxed">
                Deploy into profitable price intervals
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl bg-white border border-black p-6 rounded-xl">
            <div className="flex items-start gap-4 ">
              <div className="flex-shrink-0  flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-black text-sm font-bold ">
                ✓
              </div>
              <p className="text-black leading-relaxed">
                Volatility rating for pools
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
