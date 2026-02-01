"use client";

export default function ExecutionPath() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
      {/* Image */}
      <div className="w-full flex justify-center mb-4">
        <img
          src="/placeholder2.png"
          alt="Execution Path"
          className="max-w-full h-auto"
          style={{ width: "60%" }}
        />
      </div>
      
      {/* Header - Blue */}
      <h3 className="text-xl md:text-2xl font-bold text-blue-500 text-center mb-2">
        Execution Path
      </h3>
      
      {/* Text - White */}
      <p className="text-white text-base md:text-lg text-center">
        Optimize your trading route for maximum efficiency
      </p>
    </div>
  );
}
