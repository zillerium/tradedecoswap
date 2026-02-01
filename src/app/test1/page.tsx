// import { cookieStorage, createStorage, http } from '@wagmi/core'
import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full p-6 gap-6">
      <h1 className="bg-red-600 text-white p-6 text-3xl">TAILWIND TEST</h1>
      <Navbar />
      <Image src="/reown.svg" alt="Reown" width={150} height={150} priority />
      <h1>AppKit Wagmi Next.js App Router Example</h1>

      <ConnectButton />
      <ActionButtonList />
      <div className="advice">
        <p>
          This projectId only works on localhost. <br />
          Go to{" "}
          <a
            href="https://dashboard.reown.com"
            target="_blank"
            className="link-button"
            rel="Reown Dashboard"
          >
            Reown Dashboard
          </a>{" "}
          to get your own.
        </p>
      </div>
      <InfoList />
    </div>
  );
}
