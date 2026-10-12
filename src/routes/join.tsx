import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { JoinForm } from "@/components/join-form";
import { Reveal } from "@/components/motion";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Ennotraan (என்நோற்றான்) free — launching soon, no cost now or later" },
      {
        name: "description",
        content:
          "Ennotraan (என்நோற்றான்) is launching soon. Leave your details and our team will personally welcome your family in. It is a free invitation, not a purchase.",
      },
      { property: "og:title", content: "Join Ennotraan (என்நோற்றான்) free — launching soon, no cost now or later" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "We are opening Ennotraan (என்நோற்றான்) to families first. Join free and we will reach out personally.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Join,
});

function Join() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm text-foreground"
        >
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-gold"
          />
          Launching Soon
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-5 text-sm uppercase tracking-[0.18em] text-leaf"
        >
          Join free
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-4xl leading-[1.12] sm:text-5xl"
        >
          Join the launch list. It costs nothing, now or later.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          We are launching soon, and opening to families first, so we can build Ennotraan
          (என்நோற்றான்) properly before we grow. Leave your details and our team will personally reach
          out to welcome you in as soon as we begin.
        </motion.p>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl italic text-leaf">
            This is a free invitation, not a purchase. There is nothing to pay, today or ever.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <JoinForm />
      </Reveal>
    </section>
  );
}
