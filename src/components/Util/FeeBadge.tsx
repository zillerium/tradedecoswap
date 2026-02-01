interface FeeBadgeProps {
  value: string; // e.g. "0.05%" or "500 (0.05%)"
}

export function FeeBadge({ value }: FeeBadgeProps) {
  return (
    <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">
      {value}
    </span>
  );
}
