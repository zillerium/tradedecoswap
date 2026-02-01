type DepthResult = {
  sqrtPrice: number;
  price: number;
  amount0Raw: number;
  amount1Raw: number;
  amount0: number;
  amount1: number;
};

export function liquidityToDepth(
  liquidity: string | number,
  sqrtPriceX96: string | number,
  decimals0: number,
  decimals1: number,
): DepthResult {
  const L = Number(liquidity);
  const sqrtPX96 = Number(sqrtPriceX96);

  const Q96 = Math.pow(2, 96);
  const sqrtP = sqrtPX96 / Q96;

  // raw token units
  const amount0Raw = L / sqrtP;
  const amount1Raw = L * sqrtP;

  // decimal-adjusted
  const amount0 = amount0Raw / Math.pow(10, decimals0);
  const amount1 = amount1Raw / Math.pow(10, decimals1);

  // human price (token1 / token0)
  const price = Math.pow(sqrtP, 2) * Math.pow(10, decimals0 - decimals1);

  return {
    sqrtPrice: sqrtP,
    price,
    amount0Raw,
    amount1Raw,
    amount0,
    amount1,
  };
}
