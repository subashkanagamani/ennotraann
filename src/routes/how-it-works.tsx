import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import howItWorksHero from "@/assets/how-it-works-hero.jpg";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { steps } from "@/content/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Ennotraan Works — Screen-Free Habits" },
      {
        name: "description",
        content:
          "Choose 10 to 12 habits, let your child mark and reflect on their day, then award Ennotraan Points in a private parent app.",
      },
      { property: "og:title", content: "How Ennotraan works — three simple steps" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "A physical habit board for your child, a free private app for the parent, and real rewards earned slowly through partner co-pay discounts.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A simple daily practice shared by parent and child."
        intro="No apps, logins, or notifications for your child. Just a physical board with a customised habit sheet, space for daily achievements, and guaranteed screen-free family time."
      image={{ src: howItWorksHero, alt: "A parent and child looking at a printed habit checklist at the kitchen table", width: 1200, height: 900 }}
      />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[1.65rem] top-4 hidden h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-primary via-gold to-leaf md:block"
          />
          <StaggerGroup className="grid gap-10">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className={`flex gap-6 rounded-2xl border border-border p-7 shadow-soft sm:p-9 ${index === 0 ? "bg-sky" : index === 1 ? "bg-lilac" : "bg-mint"}`}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-2xl">{step.title}</h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <Reveal className="rounded-2xl border border-primary/15 bg-secondary p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ennotraan Points</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Badges of Honour, Not Currency</h2>
          <p className="mt-3 text-lg text-foreground/80">First a mark of pride, second a gateway to family rewards.</p>
          <h3 className="mt-8 text-xl">The value of Ennotraan Points</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Above all, Ennotraan Points represent genuine pride—a tangible mark of honour for autonomous, trust-based discipline built quietly at home without social pressure, surveillance, or peer comparison.
          </p>
          <h3 className="mt-7 text-xl">Meaningful family rewards and social impact</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Accumulated family points can later be redeemed through our separate Reimbursement Module, where curated Reward Reimbursement Partners offer exclusive co-pay discounts on educational tools, books, skill kits, apparel, and family lifestyle experiences. Families can also donate earned points toward social causes managed and fulfilled by Ennotraan. Points are never used for cash, screen time, or peer competition.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-2xl bg-coral/15 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl">What is for Children</h2>
          <ul className="mt-6 grid gap-3 text-lg text-foreground/80 sm:grid-cols-2">
            {["Child never touches the phone", "Child privacy is maintained", "No name or age is collected", "Self-discipline, not forced obedience"].map(
              (item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </section>

      <CtaBand
        title="Set up your board this week."
        body="Join free and we will help you set it up with your family."
      />
    </>
  );
}
