"use client";

import { CurrencyPairList } from "./CurrencyPairList";

type Props = {
  /** Index into CurrencyPairList */
  value: number;
  /** Called when user selects a different pair */
  onChange: (index: number) => void;
};

export default function CurrencyPairSelect({ value, onChange }: Props) {
  return (
    <div className="w-full flex justify-end">
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          bg-gray-900
          text-white
          border
          border-gray-700
          rounded-md
          px-3
          py-2
          text-sm
          max-w-xs
          w-full
          sm:w-auto
          focus:outline-none
          focus:ring-2
          focus:ring-blue-600
        "
      >
        {CurrencyPairList.map((pair, index) => (
          <option key={pair.tvSymbol} value={index}>
            {pair.label}
          </option>
        ))}
      </select>
    </div>
  );
}
