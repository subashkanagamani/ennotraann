import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import hundiHero from "@/assets/digital-hundi-hero.jpg";

const advantages = [
  { title: "Youth financial literacy", body: "Help children understand goals, saving and the value of small, consistent actions through family-led conversations." },
  { title: "Goal-based saving", body: "Explore how a family goal might connect to a minor savings account, recurring deposit or a partner-managed savings product." },
  { title: "Longer family relationships", body: "Give parents and young people a shared, practical way to discuss financial stewardship over time." },
];

export const Route = createFileRoute("/digital-hundi")({
  head: () => ({ meta: [
    { title: "Digital Hundi — Phase II | Ennotraan (என்நோற்றான்)" },
    { name: "description", content: "Digital Hundi is a proposed Phase II micro-savings and financial literacy initiative for families and banking partners." },
    { property: "og:title", content: "Digital Hundi — Phase II | Ennotraan (என்நோற்றான்)" },
    { property: "og:description", content: "Explore a proposed family-led savings and financial literacy initiative for banking and fintech partners." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: DigitalHundi,
});

function DigitalHundi() {
  return <>
    <PageHero eyebrow="Phase II · Financial partnerships" title="Digital Hundi: small habits, bigger horizons." intro="A proposed family-led micro-savings and financial literacy initiative connecting daily discipline to meaningful savings goals. We are exploring this next phase with banks, NBFCs and fintech partners." image={{ src: hundiHero, alt: "A South Indian parent and child discussing a savings goal at home", width: 1408, height: 1056 }} />
    <section className="mx-auto max-w-6xl px-6 py-16"><Reveal className="max-w-3xl"><p className="text-sm font-semibold uppercase text-primary">The idea</p><h2 className="mt-3 text-3xl">From offline consistency to financial understanding</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The child continues to use only the physical board. A parent reviews progress in the private app and may choose a savings goal with a participating financial institution. Digital Hundi would connect family milestones with partner-managed savings journeys while keeping the child's daily experience screen-free.</p></Reveal><div className="mt-12 grid gap-6 md:grid-cols-3">{advantages.map((item, i) => <div key={item.title} className={`rounded-lg p-7 ${i === 1 ? "bg-mint" : "bg-sky"}`}><h3 className="text-xl">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p></div>)}</div></section>
    <section className="bg-secondary py-16"><div className="mx-auto max-w-6xl px-6"><Reveal><h2 className="text-3xl">The proposed journey</h2></Reveal><ol className="mt-9 grid gap-8 md:grid-cols-4">{[
      ["01", "Practise", "The child marks daily routines on an offline board."],
      ["02", "Reflect", "The parent reviews effort and records points privately."],
      ["03", "Set a goal", "The family chooses a financial milestone with a participating partner."],
      ["04", "Grow", "Subject to partner terms, eligible milestones could support a linked savings journey."],
    ].map(([number, title, body]) => <li key={number}><span className="text-4xl text-primary">{number}</span><h3 className="mt-3 text-xl">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{body}</p></li>)}</ol></div></section>
    <section className="mx-auto max-w-6xl px-6 py-16"><h2 className="text-2xl">For financial institutions</h2><p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">We are exploring integrations for minor accounts, recurring deposits and goal-based savings. The proposal is built around parent direction and no child-identifying profile in the Ennotraan (என்நோற்றான்) habit experience. Any account opening, point-to-savings conversion, eligibility, privacy controls and regulatory obligations would need to be agreed with the licensed partner before launch. Points are not currently cash or deposits.</p><p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">The documents describe the core physical-and-digital approach as patent-pending. Patent status and compliance claims should be confirmed as part of partner diligence.</p></section>
    <section className="bg-ink px-6 py-16 text-primary-foreground"><div className="mx-auto max-w-6xl"><h2 className="text-3xl">Explore a Phase II partnership.</h2><p className="mt-4 max-w-2xl opacity-80">If you represent a bank, NBFC or fintech institution, let's discuss how family-led savings could work responsibly.</p><a href="mailto:info@ennotraan.com?subject=Digital%20Hundi%20partnership" className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 font-semibold text-primary">Contact us <ArrowRight className="h-4 w-4" /></a><Link to="/faq" className="ml-5 inline-block text-sm underline underline-offset-4">Read FAQs</Link></div></section>
  </>;
}