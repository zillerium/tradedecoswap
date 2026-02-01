"use client";

export default function ProblemChart() {
  return (
    <div>
      {/* Middle box */}
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/chartsm.png"
            alt="Charts Exchanges illustration"
            className="max-w-full h-auto"
            style={{ width: "60%" }}
          />
        </div>

        <div className="mt-4 text-white text-lg text-center">
          Coin Volatility:{" "}
          <a
            href="https://dexscreener.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            DexScreener
          </a>
        </div>
      </div>
    </div>
  );
}
