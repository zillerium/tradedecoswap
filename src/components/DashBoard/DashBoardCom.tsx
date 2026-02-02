'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SlippageRequest from './SlippageRequest';
import SlippageResults from './SlippageResults';
import SlippageHistogram from './SlippageHistogram';

type SlippageData = {
  wethAmount: number;
  startPrice: number;
  endPrice: number;
  slippagePercent: number;
  expectedUSDC: number;
  actualUSDC: number;
  slippageUSD: number;
  error?: string;
};

export default function DashBoardCom() {
  const [slippageData, setSlippageData] = useState<SlippageData | null>(null);
  const [shouldFetchHistogram, setShouldFetchHistogram] = useState(false);

  const handleSlippageData = (data: SlippageData | null) => {
    console.log("handleSlippageData called with:", data);
    setSlippageData(data);
    // Only fetch histogram if slippage calculation was successful (no error)
    if (data && !data.error) {
      console.log("Slippage successful, setting shouldFetchHistogram to true");
      setShouldFetchHistogram(true);
    } else {
      console.log("Slippage had error or no data, setting shouldFetchHistogram to false");
      setShouldFetchHistogram(false);
    }
  };

  return (
    <div className="flex flex-col bg-black min-h-screen w-full">
      <Navbar />
      <div className="w-full px-8 md:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <SlippageRequest onSlippageData={handleSlippageData} />
          <SlippageResults data={slippageData} />
        </div>
        
        {/* Histogram appears below after successful slippage calculation */}
        <SlippageHistogram 
          shouldFetch={shouldFetchHistogram}
          onFetchComplete={() => setShouldFetchHistogram(false)}
        />
      </div>
    </div>
  );
}
