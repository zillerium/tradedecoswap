import Image from "next/image";

interface TokenIconProps {
  src: string;
  alt: string;
  size?: number;
}

export function TokenIcon({ src, alt, size = 20 }: TokenIconProps) {
  return (
    <Image src={src} alt={alt} width={size} height={size} className="block" />
  );
}
