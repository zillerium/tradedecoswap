"use client";

export default function SolutionQuote() {
  return (
    <div className="w-full flex flex-col items-center bg-black leading-tight">
      {/* Header Message */}

      <div className="bg-gray-400  rounded-lg shadow-md px-6 py-6 w-full max-w-6xl text-center ">
        {/* Blue Box with Message */}
        <h2
          className="text-4xl md:text-4xl font-black leading-none tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#230b59" }}
        >
          Liquidity Intelligence & Decision Making
        </h2>
        {/* Citation */}
        <div
          className="text-center text-xl text-gray-700 mt-4"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#230b59" }}
        >
          Via AI Systems
        </div>
      </div>
    </div>
  );
}
