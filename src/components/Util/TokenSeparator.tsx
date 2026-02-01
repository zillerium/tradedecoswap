interface TokenSeparatorProps {
  value?: string;
}

export function TokenSeparator({ value = "/" }: TokenSeparatorProps) {
  return <span>{value}</span>;
}
