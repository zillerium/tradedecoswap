"use client";

export default function ProblemDexs() {
  return (
    <div>
      {/* Middle box */}
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/dots.png"
            alt="Exchanges illustration"
            className="max-w-full h-auto"
            style={{ width: "60%" }}
          />
        </div>

        {/* Caption wrapper */}
        <div className="mt-4 text-white text-lg text-center">
          1500 Exchanges:{" "}
          <a
            href="https://defillama.com/protocols/dexs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            DefiLlama
          </a>
        </div>
      </div>
    </div>
  );
}
