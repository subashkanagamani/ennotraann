import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import ourPromiseHero from "@/assets/our-promise-hero.jpg";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { promises } from "@/content/site";

export const Route = createFileRoute("/our-promise")({
  head: () => ({
    meta: [
      { title: "Our promise — no child data, no leaderboards" },
      {
        name: "description",
        content:
          "Ennotraan collects no data about your child, has no leaderboards, releases points monthly, and never treats points as money.",
      },
      { property: "og:title", content: "Our promise — no child data, no leaderboards" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content: "We built Ennotraan to protect your home, not to study it. Four promises we keep.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurPromise,
});

function OurPromise() {
  return (
    <>
      <PageHero
        eyebrow="Our promise"
        title="We built this to protect your home, not to study it."
        intro="Four decisions we made early, and will not walk back."
      image={{ src: ourPromiseHero, alt: "A calm family living room in the evening with phones set aside in a basket", width: 1200, height: 900 }}
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2">
          {promises.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`group h-full rounded-2xl border border-border p-8 shadow-soft ${index % 4 === 0 ? "bg-sky" : index % 4 === 1 ? "bg-lilac" : index % 4 === 2 ? "bg-mint" : "bg-coral/15"}`}
              >
                <motion.span
                  className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-leaf/12 text-leaf"
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                >
                  {item.icon}
                </motion.span>
                <h2 className="mt-5 text-xl">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CtaBand
        title="A tool you can trust in your home."
        body="Join free. No cost, no data on your child, no catch."
      />
    </>
  );
}
