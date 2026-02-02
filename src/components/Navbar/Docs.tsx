"use client";

import Link from "next/link";

export const Docs = () => {
  return (
    <li>
      <Link
        href="/Docs"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        Docs
      </Link>
    </li>
  );
};
