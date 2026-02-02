import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const amount = searchParams.get("amount");
  const token1 = searchParams.get("token1");
  const token2 = searchParams.get("token2");

  const upstreamUrl =
    `https://decoswap.xyz/api/get_slippage` +
    `?amount=${amount}&token1=${token1}&token2=${token2}`;

  const res = await fetch(upstreamUrl, {
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
