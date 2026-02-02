"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./CustomButton";
import { DashBoard } from "./DashBoard";
import { Docs } from "./Docs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 lg:px-16 bg-black  text-white shadow-md flex flex-wrap items-center py-3">
      {/* Logo */}
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/decoswaplogofeb.png"
            alt="Decoswap"
            className="h-[50px] w-auto"
            priority
          />
        </Link>
      </div>
      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-white"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {/* Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:items-center`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 items-center text-lg pt-0 lg:pt-0">
          <Docs />
          <DashBoard />
          <CustomButton />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
