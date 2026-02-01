"use client";

export default function ExecutionPath() {
  return (
    <div className="bg-gray-950/50 rounded-lg p-6 flex flex-col items-center justify-center border border-gray-800">
      {/* Image */}
      <div className="w-full flex justify-center mb-4">
        <img
          src="/executionpath.png"
          alt="Execution Path"
          className="max-w-full h-auto"
          style={{ width: "80%" }}
        />
      </div>
      
      {/* Header - Blue */}
      <h3 className="text-xl md:text-2xl font-bold text-blue-500 text-center mb-2">
        Execution Path
      </h3>
      
      {/* Text - White */}
      <p className="text-white text-base md:text-lg text-center">
        Optimize your trading route 
      </p>
    </div>
  );
}
