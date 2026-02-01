import { NextResponse } from "next/server";

export async function GET() {

  console.log("🔥🔥🔥 ROUTE HIT: get_liquidity_range_stats 🔥🔥🔥");


  const res = await fetch("https://decoswap.xyz/api/get_liquidity_range_stats", {
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}

