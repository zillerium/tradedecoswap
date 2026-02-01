"use client";

export default function Solution2() {
  return (
    <div>
      {/* Middle box */}
      <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/priceinterval.png"
            alt="Price Interval illustration"
            className="max-w-full h-auto"
            style={{ width: "60%" }}
          />
        </div>

        {/* Text under image */}
        <div className="mt-4 text-black text-lg text-center">
          Deployment into Price Intervals
        </div>
      </div>
    </div>
  );
}
