"use client";

import Navbar from "@/components/Navbar/Navbar";
import SolutionFeatures from "@/components/Solution/SolutionFeatures";
import SolutionImage from "@/components/Solution/SolutionImage";
import SolutionQuote from "@/components/Solution/SolutionQuote";
import Solution1 from "@/components/Solution/Solution1";
import Solution2 from "@/components/Solution/Solution2";
import Solution3 from "@/components/Solution/Solution3";

export default function SolutionCom() {
  return (
    <div className="flex flex-col min-h-screen w-full p-0 gap-0 bg-black ">
      <Navbar />

      <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <SolutionFeatures />
        <SolutionImage />
      </div>

      <SolutionQuote />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
        {/* Left box */}

        <Solution1 />
        <Solution2 />
        <Solution3 />

        {/* Right box */}
      </div>
    </div>
  );
}
