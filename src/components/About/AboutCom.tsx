"use client";

import Navbar from "@/components/Navbar/Navbar";
import AboutImage from "@/components/About/AboutImage";
import AboutFeatures1 from "@/components/About/AboutFeatures1";
import AboutFeatures2 from "@/components/About/AboutFeatures2";
import AboutCLAMMFeatures from "@/components/About/AboutCLAMMFeatures";
import AboutCLAMMImage from "@/components/About/AboutCLAMMImage";

export default function AboutCom() {
  return (
    <div className="flex flex-col min-h-screen w-full px-0 py-0 bg-black">
      <Navbar />


      <div className="flex flex-col md:flex-row gap-0 w-full mt-0">
        <AboutImage />
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <AboutFeatures1 />
        <AboutFeatures2 />
      </div>

            <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <AboutCLAMMFeatures  />
        <AboutCLAMMImage />
      </div>


    </div>
  );
}

