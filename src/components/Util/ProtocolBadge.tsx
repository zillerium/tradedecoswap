import Image from "next/image";

interface ProtocolBadgeProps {
  iconSrc: string;
  name: string;
  size?: number;
  href?: string; // ✅ optional link
}

export function ProtocolBadge({
  iconSrc,
  name,
  size = 18,
  href,
}: ProtocolBadgeProps) {
  const content = (
    <>
      <Image
        src={iconSrc}
        alt={name}
        width={size}
        height={size}
        className="block"
      />
      <span className="text-sm text-gray-700">{name}</span>
    </>
  );

  // If href is provided → clickable
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  // Otherwise → static badge (old behaviour)
  return <span className="flex items-center gap-1">{content}</span>;
}
