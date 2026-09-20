import { motion } from "motion/react";
import type { ReactNode } from "react";

export type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: HeroImage;
  children?: ReactNode;
}) {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-12 pt-16 md:pt-24">
      <div aria-hidden className="absolute right-[8%] top-12 h-24 w-24 rounded-[2rem] bg-coral/15 color-shift" />
      <div aria-hidden className="absolute right-[2%] top-36 h-10 w-10 rotate-12 rounded-md bg-gold/55 float-gentle" />
      <div aria-hidden className="absolute right-[20%] top-8 h-5 w-5 rotate-45 rounded-sm bg-primary/45 drift-slower" />

      <div className={image ? "relative grid items-center gap-10 md:grid-cols-2 md:gap-14" : "relative"}>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-sm font-semibold tracking-[0.18em] text-primary uppercase"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-5 max-w-4xl text-4xl leading-[1.12] sm:text-5xl md:text-[3.4rem]"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
            >
              {intro}
            </motion.p>
          )}
          {children}
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem] shadow-soft"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full object-cover"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary via-coral to-gold" />
            <motion.div
              aria-hidden
              animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute right-6 top-6 h-14 w-14 rounded-full border-[10px] border-background/80"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
