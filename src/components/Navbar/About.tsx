"use client";

import Link from "next/link";

export const About = () => {
  return (
    <li>
      <Link
        href="/About"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        About Us
      </Link>
    </li>
  );
};
