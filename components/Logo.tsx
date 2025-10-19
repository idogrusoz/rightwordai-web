import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="#top" className="flex items-center gap-3">
      <div className="relative h-10 w-44">
        <Image
          src="/rightword_ai_claude_plain.svg"
          alt="Rightword.AI"
          fill
          priority
          sizes="(max-width: 768px) 10rem, 11rem"
        />
      </div>
      <span className="sr-only">Rightword.AI</span>
    </Link>
  );
}
