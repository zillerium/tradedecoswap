import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://decoswap.xyz/api/get_pool_raw", {
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}

