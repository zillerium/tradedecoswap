type KeyValueBlockProps = {
  data: Record<string, unknown>;
};

export default function KeyValueBlock({ data }: KeyValueBlockProps) {
  return (
    <div className="space-y-2">
      {Object.entries(data).map(([key, value]) => {
        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          return (
            <div key={key} className="border rounded p-3 bg-gray-50">
              <div className="font-semibold mb-2">{key}</div>
              <KeyValueBlock data={value as Record<string, unknown>} />
            </div>
          );
        }

        return (
          <div key={key} className="flex gap-2">
            <span className="w-64 font-medium text-gray-700">{key}</span>
            <span className="font-mono break-all">{String(value)}</span>
          </div>
        );
      })}
    </div>
  );
}
