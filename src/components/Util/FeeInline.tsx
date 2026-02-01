"use client";

import { FeeBadge } from "@/components/Util/FeeBadge";

interface FeeInlineProps {
  value: string;
}

export default function FeeInline({ value }: FeeInlineProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Label OUTSIDE the pill */}
      <span className="text-xs font-medium text-gray-600">Fees</span>

      {/* Scale only on small screens */}
      <div className="scale-90 sm:scale-100 origin-left">
        <FeeBadge value={value} />
      </div>
    </div>
  );
}
