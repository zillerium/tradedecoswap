// import { cookieStorage, createStorage, http } from '@wagmi/core'
import Navbar from "@/components/Navbar/Navbar";
import Home1 from "./Home1";
import Home2 from "./Home2";
import LogoScroll from "./LogoScroll";
import OptimalPrices from "./OptimalPrices";
import ExecutionPath from "./ExecutionPath";
import RiskScore from "./RiskScore";

export default function Home() {
  return (
    <div className="flex flex-col bg-black min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-0 md:gap-2 w-full mt-8 flex-1">
        <Home1 />
        <Home2 />
      </div>

   <LogoScroll />

    {/* Three feature boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 px-8 md:px-16 lg:px-24">
        <OptimalPrices />
        <ExecutionPath />
        <RiskScore />
      </div>

      <div className="w-full flex justify-center mt-12 mb-6">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScLE_WCzj2ngsp7d1Kckjv5YFJfn7SR4j6uxtnvbPt36JQZ2Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-lg font-semibold rounded-xl
            bg-white text-black
            hover:bg-gray-200 transition"
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}
