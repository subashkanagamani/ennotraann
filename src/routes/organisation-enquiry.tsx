import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { OrganisationEnquiryForm, type EnquiryAudience } from "@/components/organisation-enquiry-form";

const searchSchema = z.object({
  for: z.enum(["school", "college", "company"]).catch("school"),
});

const pageCopy: Record<EnquiryAudience, { eyebrow: string; title: string; intro: string }> = {
  school: {
    eyebrow: "School enquiry",
    title: "Bring Ennotraan to your school.",
    intro: "Tell us about your school and the students you would like to begin with. Our team will help you shape a simple, zero-cost pilot.",
  },
  college: {
    eyebrow: "College enquiry",
    title: "Start a focused campus pilot.",
    intro: "Tell us about your college and the student group you have in mind. We will help you choose a practical first rollout.",
  },
  company: {
    eyebrow: "Company enquiry",
    title: "Support healthier habits at work and home.",
    intro: "Tell us about your organisation and workforce. Our team will help shape a zero-cost wellbeing pilot that suits your people.",
  },
};

const audienceLabels: Record<EnquiryAudience, string> = {
  school: "School",
  college: "College",
  company: "Company",
};

export const Route = createFileRoute("/organisation-enquiry")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Organisation Enquiry — Ennotraan" },
      { name: "description", content: "Enquire about a free Ennotraan pilot for your school, college, or company." },
      { property: "og:title", content: "Organisation Enquiry — Ennotraan" },
      { property: "og:description", content: "Start a free Ennotraan pilot for your students or employees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrganisationEnquiryPage,
});

function OrganisationEnquiryPage() {
  const { for: audience } = Route.useSearch();
  const copy = pageCopy[audience];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-32">
          <p className="text-sm uppercase tracking-[0.18em] text-leaf">{copy.eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.12] sm:text-5xl">{copy.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Choose enquiry type">
            {(["school", "college", "company"] as const).map((type) => (
              <Link
                key={type}
                to="/organisation-enquiry"
                search={{ for: type }}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${audience === type ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
              >
                {audienceLabels[type]}
              </Link>
            ))}
          </div>
        </div>
        <OrganisationEnquiryForm audience={audience} />
      </div>
    </section>
  );
}