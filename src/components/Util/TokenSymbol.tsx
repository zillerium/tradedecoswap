interface TokenSymbolProps {
  symbol: string;
}

export function TokenSymbol({ symbol }: TokenSymbolProps) {
  return <span className="font-medium">{symbol}</span>;
}
