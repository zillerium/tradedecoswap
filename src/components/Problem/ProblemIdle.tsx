"use client";

export default function ProblemLosses() {
  return (
    <div className="flex-1 bg-gray-200 p-6 rounded-lg shadow-md">
      <h2
        className="text-3xl md:text-4xl font-normal leading-tight text-center"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "#230b59" }}
      >
        <span className="text-4xl md:text-5xl">95% Idle Capital</span>
        <br />
      </h2>

      {/* Image */}
      <div className="flex justify-center" style={{ marginTop: "20px" }}>
        <img
          src="/pilegold.png"
          alt="Liquidity losses illustration"
          style={{ width: "70%" }}
          className="h-auto rounded-md"
        />
      </div>

      {/* Caption wrapper */}
      <div className="flex justify-center" style={{ marginTop: "20px" }}>
        <div className="w-[70%] text-center text-lg text-gray-700">
          95% of capital is unused.{" "}
          <a
            href="https://www.coindesk.com/web3/2025/11/22/liquidity-crisis-usd12b-in-defi-liquidity-sits-idle-as-95-of-capital-goes-unused"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Coindesk: Idle Capital
          </a>
        </div>
      </div>
    </div>
  );
}
