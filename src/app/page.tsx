// import { cookieStorage, createStorage, http } from '@wagmi/core'
import Navbar from "@/components/Navbar/Navbar";
import Home1 from "./Home1";
import Home2 from "./Home2";
import LogoScroll from "./LogoScroll";
import OptimalPrices from "./OptimalPrices";
import ExecutionPath from "./ExecutionPath";
import RiskScore from "./RiskScore";
import MainProblem from "./MainProblem";
import CompetitiveAdvantage from "./CompetitiveAdvantage";
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
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12 px-12 md:px-20 lg:px-32">
        <MainProblem />
        <CompetitiveAdvantage />
      </div>
    </div>
  );
}
