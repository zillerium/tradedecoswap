'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import SlippageRequest from './SlippageRequest';
import SlippageResults from './SlippageResults';

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

  return (
    <div className="flex flex-col bg-black min-h-screen w-full">
      <Navbar />
      <div className="w-full px-8 md:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <SlippageRequest onSlippageData={setSlippageData} />
          <SlippageResults data={slippageData} />
        </div>
      </div>
    </div>
  );
}
