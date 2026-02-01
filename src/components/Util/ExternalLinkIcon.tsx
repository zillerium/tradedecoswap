import Image from "next/image";

interface ExternalLinkIconProps {
  href: string;
  src: string;
  alt: string;
  size?: number;
}

export function ExternalLinkIcon({
  href,
  src,
  alt,
  size = 18,
}: ExternalLinkIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={size} height={size} className="block" />
    </a>
  );
}
