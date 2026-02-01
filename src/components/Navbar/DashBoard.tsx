"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export const DashBoard = () => {
  return (
    <li>
      <Link
        href="/DashBoard"
        className="flex items-center gap-2 hover:text-blue-600"
      >
        <FaHome />
        Dashboard
      </Link>
    </li>
  );
};
