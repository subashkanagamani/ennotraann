import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { JoinForm } from "@/components/join-form";
import { Reveal } from "@/components/motion";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Ennotraan free — no cost, now or later" },
      {
        name: "description",
        content:
          "Leave your details and our team will personally welcome your family into Ennotraan. It is a free invitation, not a purchase.",
      },
      { property: "og:title", content: "Join Ennotraan free — no cost, now or later" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "We are opening Ennotraan to families first. Join free and we will reach out personally.",
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
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.18em] text-leaf"
        >
          Join free
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-4xl leading-[1.12] sm:text-5xl"
        >
          Join today. It costs nothing, now or later.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          We are opening Ennotraan to families first, so we can build it properly before we grow.
          Leave your details and our team will personally reach out to welcome you in.
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
