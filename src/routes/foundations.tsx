import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import foundationsHero from "@/assets/foundations-hero.jpg";
import { beliefs } from "@/content/site";

export const Route = createFileRoute("/foundations")({
  head: () => ({
    meta: [
      { title: "Foundations — Trust, Science and Family" },
      {
        name: "description",
        content: "The principles behind Ennotraan: parental trust, zero peer comparison, age-appropriate science, and family-first flexibility.",
      },
      { property: "og:title", content: "Foundations — Trust, Science and Family" },
      {
        property: "og:description",
        content: "Grounded in trust, guided by science, and built for families—without surveillance, rankings, or rigid rules.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Foundations,
});

function Foundations() {
  return (
    <>
      <PageHero
        eyebrow="Foundations"
        title="Grounded in Trust. Guided by Science. Built for Families."
        intro="Empowering parents with trust, flexibility, and age-appropriate science."
        image={{
          src: foundationsHero,
          alt: "A multigenerational family sharing a calm daily habit activity at home",
          width: 1400,
          height: 1050,
        }}
      />

      <section className="relative overflow-hidden bg-ink px-6 py-24 text-primary-foreground">
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span aria-hidden className="block font-display text-7xl leading-none text-gold opacity-80">&ldquo;</span>
          <blockquote className="mt-4 text-2xl leading-relaxed sm:text-3xl">
            What it means to raise a child well is not something that just happens. It is a daily practice of caring, one honest day at a time.
          </blockquote>
          <p className="mt-8 text-sm italic opacity-70">
            Inspired by Thirukkural 70, a timeless Tamil insight: raising a virtuous child is not a one-time achievement, but a daily practice of intentional care.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <div className={`h-full rounded-2xl p-7 shadow-soft ${index % 3 === 0 ? "bg-mint" : index % 3 === 1 ? "bg-lilac" : "bg-sky"}`}>
                <h2 className="text-xl">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}