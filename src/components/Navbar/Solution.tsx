"use client";

import Link from "next/link";

export const Solution = () => {
  return (
    <li>
      <Link
        href="/Solution"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        Solution
      </Link>
    </li>
  );
};
