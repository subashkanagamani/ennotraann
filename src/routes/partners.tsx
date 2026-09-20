import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import partnersHero from "@/assets/partners-hero.jpg";

const benefits = [
  {
    title: "Guaranteed, high-intent business",
    body: "Users redeem hard-earned discipline points for your exclusive co-pay discounts, bringing pre-qualified customers ready to purchase.",
  },
  {
    title: "Positive achievement placement",
    body: "Your brand appears during moments of daily achievement, building attention and goodwill rather than interruption.",
  },
  {
    title: "Brand safety and trust",
    body: "Align with family wellness, educational growth, and digital detox through a platform built on privacy and zero cash or gaming mechanics.",
  },
  {
    title: "Measurable ROI, zero upfront risk",
    body: "Pay for performance when users engage with your brand or redeem points for your product offers.",
  },
];

const categories = [
  {
    title: "Educational and skill development",
    body: "Books, DIY learning kits, STEM toys, and online skill courses.",
  },
  {
    title: "Family and child lifestyle",
    body: "Sustainable apparel, sports gear, organic nutrition, and family wellness products.",
  },
  {
    title: "Productivity and adult wellness",
    body: "Fitness gear, mindfulness tools, desk ergonomics, and personal growth resources.",
  },
];

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner with Ennotraan — Purposeful Rewards" },
      {
        name: "description",
        content: "Join Ennotraan's Reward Reimbursement Network and connect with families through purposeful, high-intent co-pay rewards.",
      },
      { property: "og:title", content: "Partner with Ennotraan — Purposeful Rewards" },
      {
        property: "og:description",
        content: "A high-trust platform connecting purpose-driven brands with families celebrating discipline and progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partnering with Ennotraan"
        title="Connect with highly engaged families through purposeful, high-intent rewards."
        intro="Join our Reward Reimbursement Network to meet motivated parents and adults when they redeem earned discipline points for useful co-pay discounts—supporting a healthier, screen-free society while driving conversion-ready business."
        image={{
          src: partnersHero,
          alt: "Business partners reviewing family-friendly educational and wellness products",
          width: 1400,
          height: 1050,
        }}
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal><h2 className="text-2xl sm:text-3xl">Why brands partner with Ennotraan</h2></Reveal>
        <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2">
          {benefits.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.div whileHover={{ y: -6 }} className={`h-full rounded-2xl p-8 shadow-soft ${index % 2 === 0 ? "bg-sky" : "bg-lilac"}`}>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal><h2 className="text-2xl sm:text-3xl">Who we partner with</h2></Reveal>
        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
          {categories.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CtaBand title="Join our Partner Network." body="Talk to us about offering purposeful rewards to the Ennotraan community." />
    </>
  );
}