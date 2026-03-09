"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Card = {
  id: number;
  src: string;
  alt: string;
  top: string;
  left?: string;
  right?: string;
  width: number;
  height: number;
  speed: number;
  startOffset: number;
  travel: number;
  zIndex: number;
  tag: string;
};

type ParallaxGalleryProps = {
  audience?: "brand" | "creator";
};

const cards: Card[] = [
  {
    id: 1,
    src: "/ugc1.jpg",
    alt: "Street style clip in Tunis",
    top: "10%",
    left: "2%",
    width: 300,
    height: 380,
    speed: 0.7,
    startOffset: 100,
    travel: 1400,
    zIndex: 2,
    tag: "#Tunis_Street",
  },
  {
    id: 2,
    src: "/ugc2.jpg",
    alt: "Cafe unboxing vibe in Sousse",
    top: "60%",
    left: "14%",
    width: 368,
    height: 480,
    speed: 0.8,
    startOffset: 60,
    travel: 600,
    zIndex: 3,
    tag: "#Sousse_Cafe",
  },
  {
    id: 3,
    src: "/ugc3.jpg",
    alt: "Product shot in desert light",
    top: "120%",
    right: "30%",
    width: 240,
    height: 320,
    speed: 1.9,
    startOffset: 180,
    travel: 1220,
    zIndex: 2,
    tag: "#Tozeur_Shoot",
  },
  {
    id: 4,
    src: "/ugc4.jpg",
    alt: "Raw city life video texture",
    top: "20%",
    right: "2%",
    width: 360,
    height: 480,
    speed: 0.7,
    startOffset: 120,
    travel: 860,
    zIndex: 3,
    tag: "#Medina_Life",
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function ParallaxGallery({ audience = "creator" }: ParallaxGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const totalTravel = rect.height + viewportHeight;
      const traveled = viewportHeight - rect.top;
      const next = clamp(traveled / totalTravel, 0, 1);

      section.style.setProperty("--scroll-progress", `${next}`);
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const headline =
    audience === "brand"
      ? { line1: "Pour creer des contenus", line2: "authentiques" }
      : { line1: "Pour collaborer avec", line2: "des marques" };

  return (
    <section>
      <div
        ref={sectionRef}
        className="relative mx-auto min-h-[540px] max-h-[40vh] overflow-visible sm:min-h-[760px]"
        style={{ ["--scroll-progress" as string]: 0 } as CSSProperties}
      >
        {cards.map((card) => {
          const mobileScale = 0.62;
          const width = isMobile ? Math.round(card.width * mobileScale) : card.width;
          const height = isMobile ? Math.round(card.height * mobileScale) : card.height;
          return (
            <article
              key={card.id}
              className="absolute overflow-hidden rounded-[1.35rem] "
              style={{
                top: card.top,
                left: card.left,
                right: card.right,
                width: `${width}px`,
                height: `${height}px`,
                zIndex: card.zIndex,
                ["--start-offset" as string]: card.startOffset,
                ["--travel" as string]: card.travel,
                ["--speed" as string]: card.speed,
                transform:
                  "translate3d(0, calc((var(--start-offset) * 1px) - (var(--scroll-progress) * var(--travel) * var(--speed) * 1px)), 0)",
                willChange: "transform",
              }}
            >
              <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
           
            </article>
          );
        })}

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
          <div>
            <h2 className="text-[clamp(30px,7.2vw,96px)] font-semibold leading-[0.95] tracking-tight text-[#101014]">
              {headline.line1}
            </h2>
            <p className="text-[clamp(28px,6.8vw,88px)] italic leading-[0.95] tracking-tight text-[#101014]">
              {headline.line2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
