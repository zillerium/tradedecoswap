"use client";

export default function Solution1() {
  return (
    <div>
      {/* Middle box */}
      <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/cryptoliquidity.png"
            alt="Liqudity illustration"
            className="max-w-full h-auto"
            style={{ width: "60%" }}
          />
        </div>

        {/* Caption wrapper */}
        <div className="mt-4 text-black text-lg text-center">
          Management of Liquidity
        </div>
      </div>
    </div>
  );
}
