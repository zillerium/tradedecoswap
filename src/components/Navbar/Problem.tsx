"use client";

import Link from "next/link";

export const Problem = () => {
  return (
    <li>
      <Link
        href="/Problem"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        Problem
      </Link>
    </li>
  );
};
