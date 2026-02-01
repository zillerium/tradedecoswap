"use client";

import Navbar from "@/components/Navbar/Navbar";
import ProblemLosses from "@/components/Problem/ProblemLosses";
import ProblemIdle from "@/components/Problem/ProblemIdle";
import ProblemQuote from "@/components/Problem/ProblemQuote";
import ProblemDexs from "@/components/Problem/ProblemDexs";
import ProblemChart from "@/components/Problem/ProblemChart";
import ProblemQuestion from "@/components/Problem/ProblemQuestion";
import ProblemFeatures1 from "@/components/Problem/ProblemFeatures1";
import ProblemFeatures2 from "@/components/Problem/ProblemFeatures2";

export default function ProblemCom() {
  return (
    <div className="flex flex-col min-h-screen w-full px-0 py-0 bg-black ">
      <Navbar />

      <div className="w-full flex justify-center">
        <h1 className="text-4xl text-white font-bold mb-0">
          Liquidity Provision in DEXs
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <ProblemQuote />
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <ProblemLosses />
        <ProblemIdle />
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <ProblemFeatures1 />
        <ProblemFeatures2 />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
        {/* Left box */}

        <ProblemQuestion />
        <ProblemDexs />
        <ProblemChart />

        {/* Right box */}
      </div>
    </div>
  );
}
