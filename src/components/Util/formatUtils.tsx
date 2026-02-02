/**
 * Format a number to 2 decimal places
 */
export function formatTo2DP(value: number): string {
  return value.toFixed(2);
}

/**
 * Format a number as USD currency with commas
 * Example: 22438.54 -> $22,438.54
 */
export function formatUSD(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format a number with commas (no currency symbol)
 * Example: 22438.54 -> 22,438.54
 */
export function formatNumber(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format percentage to 2 decimal places with % symbol
 * Example: 0.14322568813664882 -> 0.14%
 */
export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}
