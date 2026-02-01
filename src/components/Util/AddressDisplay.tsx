import CopyText from "./CopyText";

interface AddressDisplayProps {
  address: string;
}

export function AddressDisplay({ address }: AddressDisplayProps) {
  return (
    <span className="font-mono text-sm">
      <CopyText copiedText={address} />
    </span>
  );
}
