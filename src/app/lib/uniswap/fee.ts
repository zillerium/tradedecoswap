export function formatFee(fee: string | number): string {
  const feeNumber = Number(fee);
  const percent = feeNumber / 10_000;
  return `${feeNumber} (${percent}%)`;
}

