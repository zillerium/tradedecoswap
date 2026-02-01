"use client";

export default function ProblemQuote() {
  return (
    <div className="w-full flex flex-col items-center bg-black leading-tight">
      {/* Header Message */}

      <div className="bg-blue-100 rounded-lg shadow-md px-6 py-6 w-full max-w-6xl text-center ">
        {/* Blue Box with Message */}
        {/* Quote Icon */}
        <h2
          className="text-4xl md:text-4xl font-black leading-none tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#230b59" }}
        >
          &ldquo;
        </h2>
        {/* Promo Message */}
        <h2
          className="text-4xl md:text-4xl font-black leading-none tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#230b59" }}
        >
          Billions of Dollars earn nothing
        </h2>
        {/* Citation */}
        <div
          className="text-center text-xl text-gray-700 mt-4"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#230b59" }}
        >
          Coindesk
        </div>
        <div
          className="text-center text-xl text-gray-700 mt-4"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#230b59" }}
        >
          2025
        </div>
      </div>
    </div>
  );
}
