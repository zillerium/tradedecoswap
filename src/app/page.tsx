// import { cookieStorage, createStorage, http } from '@wagmi/core'
import Navbar from "@/components/Navbar/Navbar";
import Home1 from "./Home1";
import Home2 from "./Home2";

export default function Home() {
  return (
    <div className="flex flex-col bg-black  min-h-screen w-full ">
      <Navbar />

      <div className="w-full flex justify-center">
        <h1 className="text-4xl text-white font-bold mb-0">Decoswap</h1>
      </div>

      {/* Video embed */}
      <div className="w-full max-w-4xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/JKF4CpOJQG4"
          title="Decoswap video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
        <Home1 />
        <Home2 />
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
