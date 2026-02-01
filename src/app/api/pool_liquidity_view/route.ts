import { NextResponse } from "next/server";

export async function GET() {
  console.log("logging router ===== ");
  const res = await fetch("https://decoswap.xyz/api/pool_liquidity_view", {
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
