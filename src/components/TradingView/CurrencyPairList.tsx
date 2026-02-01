export type CurrencyPair = {
  label: string;
  tvSymbol: string;
  token0Symbol: string;
  token1Symbol: string;
  token0Address: string;
  token1Address: string;
  fee: number;
  poolAddress: string;
};

export const CurrencyPairList: CurrencyPair[] = [
  {
    label: "WETH / USDC (0.01%)",
    tvSymbol: "UNISWAP3BASE:WETHUSDC_B4CB80",
    token0Symbol: "WETH",
    token1Symbol: "USDC",
    token0Address: "0x4200000000000000000000000000000000000006",
    token1Address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    fee: 100,
    poolAddress: "0xb4cb800910b228ed3d0834cf79d697127bbb00e5"
  },
  {
    label: "WETH / USDC (0.05%)",
    tvSymbol: "UNISWAP3BASE:WETHUSDC_D0B53D",
    token0Symbol: "WETH",
    token1Symbol: "USDC",
    token0Address: "0x4200000000000000000000000000000000000006",
    token1Address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    fee: 500,
    poolAddress: "0xd0b53d9277642d899df5c87a3966a349a798f224",
  },
  {
    label: "WETH / USDC (0.30%)",
    tvSymbol: "UNISWAP3BASE:WETHUSDC_6C561B",
    token0Symbol: "WETH",
    token1Symbol: "USDC",
    token0Address: "0x4200000000000000000000000000000000000006",
    token1Address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    fee: 3000,
    poolAddress: "0x6c561b446416e1a00e8e93e221854d6ea4171372",
  },
  {
    label: "WETH / USDT (0.05%)",
    tvSymbol: "UNISWAP3BASE:WETHUSDT_D92E07",
    token0Symbol: "WETH",
    token1Symbol: "USDT",
    token0Address: "0x4200000000000000000000000000000000000006",
    token1Address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
    fee: 500,
    poolAddress: "0xd92e0767473d1e3ff11ac036f2b1db90ad0ae55f",
  },
];
