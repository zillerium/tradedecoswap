"use client";

export default function ProblemQuestion() {
  return (
    <div>
      {/* Middle box */}
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="/questionmarksm.png"
            alt="Inefficiency illustration"
            className="max-w-full h-auto"
            style={{ width: "60%" }}
          />
        </div>

        {/* Text under image */}
        <div className="mt-4 text-white text-lg text-center">
          Inefficiencies
        </div>
      </div>
    </div>
  );
}
