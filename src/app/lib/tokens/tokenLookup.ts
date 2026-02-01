// src/app/lib/tokens/tokenLookup.ts

export type TokenInfo = {
  symbol: string;
  decimals: number;
  icon: string;
};

/**
 * Canonical token metadata lookup by address.
 * Addresses must be checksummed or consistently cased.
 */
const TOKEN_LOOKUP: Record<string, TokenInfo> = {
  // WETH (Base)
  "0x4200000000000000000000000000000000000006": {
    symbol: "WETH",
    decimals: 18,
    icon: "/weth-logo.png",
  },

  // USDC (Base)
  "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": {
    symbol: "USDC",
    decimals: 6,
    icon: "/usdc-logo.png",
  },

  // USDT (Base)
  "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2": {
    symbol: "USDT",
    decimals: 6,
    icon: "/usdt-logo.png",
  },

  // USDbC (Base)
  "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca": {
    symbol: "USDbC",
    decimals: 6,
    icon: "/usdbc-logo.png",
  },
};

/**
 * Lookup token metadata by address.
 * Returns null if the address is unknown.
 */
export function getTokenInfo(address: string): TokenInfo | null {
  if (!address) return null;

  // normalize address casing defensively
  const normalized = address.toLowerCase();

  // try direct lookup first
  if (TOKEN_LOOKUP[address]) {
    return TOKEN_LOOKUP[address];
  }

  // fallback to lowercase match
  for (const key of Object.keys(TOKEN_LOOKUP)) {
    if (key.toLowerCase() === normalized) {
      return TOKEN_LOOKUP[key];
    }
  }

  return null;
}

