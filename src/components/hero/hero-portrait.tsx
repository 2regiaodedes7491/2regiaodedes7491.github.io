import Image from "next/image";

interface HeroPortraitProps {
  className?: string;
}

export function HeroPortrait({ className }: HeroPortraitProps) {
  return (
    <div className={className}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/10">
        <Image
          src="/hero-photo.jpg"
          alt="Portrait of Stavya Srinath"
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 420px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/20" aria-hidden="true" />
      </div>
    </div>
  );
}