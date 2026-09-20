import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import forEveryoneHero from "@/assets/for-everyone-hero.jpg";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { adultSteps } from "@/content/site";

export const Route = createFileRoute("/for-everyone")({
  head: () => ({
    meta: [
      { title: "Not just for children — Ennotraan for adult self-discipline" },
      {
        name: "description",
        content:
          "One board, one app, any age, any goal. Three steps to master self-discipline, reclaim focus, and reward your own consistency away from screens.",
      },
      {
        property: "og:title",
        content: "Not just for children — Ennotraan for adult self-discipline",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "A physical habit board and screen-free sessions that help adults build fitness, learning, and deep work habits that last.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForEveryone,
});

function ForEveryone() {
  return (
    <>
      <PageHero
        eyebrow="Not just for children"
        title="One board. One app. Any age, any goal."
        intro="Three simple steps to master self-discipline, reclaim focus, and reward your own consistency."
      image={{ src: forEveryoneHero, alt: "Adults of different ages building their own daily habits at home", width: 1200, height: 900 }}
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {adultSteps.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <motion.div
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -0.6 : 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`h-full rounded-2xl p-8 shadow-soft ${i === 0 ? "bg-sky" : i === 1 ? "bg-lilac" : "bg-mint"}`}
              >
                <span className="font-display text-4xl text-primary">{i + 1}</span>
                <h2 className="mt-4 text-xl">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-foreground/75">{step.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12 rounded-2xl border border-primary/15 bg-secondary p-8 sm:p-10">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Self-earned adult discipline points can be redeemed through our separate reimbursement
            module for co-pay discounts with partner brands on books, wellness gear, productivity
            tools, and lifestyle rewards.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Whatever the age, the habit starts today."
        body="Join free and set up your first board with someone you care about."
      />
    </>
  );
}
