'use client';

import Navbar from '@/components/Navbar/Navbar';

export default function DashBoardCom() {

  return (
    <div className="flex flex-col bg-black min-h-screen w-full">
      <Navbar />
     <div className="w-full max-w-4xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/AlDSPDcNgUc"
          title="Decoswap video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>    
    </div>
  );
}
