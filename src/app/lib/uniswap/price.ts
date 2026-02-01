export function sqrtPriceX96ToPrice(
  sqrtPriceX96: string,
  decimalsToken0: number,
  decimalsToken1: number
): number {
  const sqrt = Number(sqrtPriceX96);
  const Q96 = Math.pow(2, 96);

  const priceRaw = Math.pow(sqrt / Q96, 2);
  const decimalAdjustment = Math.pow(10, decimalsToken0 - decimalsToken1);

  return priceRaw * decimalAdjustment;
}

