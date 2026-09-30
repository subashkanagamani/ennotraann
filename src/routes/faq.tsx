import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqHero from "@/assets/family-habits.jpg";

const groups = [
  { id: "philosophy", title: "Purpose & everyday practice", questions: [
    ["What is the idea behind Ennotraan (என்நோற்றான்)?", "Inspired by Thirukkural 70, we believe character grows through everyday care and self-mastery. Children practise offline at home; parents guide them without rankings or surveillance. It is also for students and adults building their own habits."],
    ["Why is this for more than children?", "Personal progress matters more when our wider community grows too. Ennotraan (என்நோற்றான்) welcomes children, parents, college students and working adults—each working on their own routines."],
    ["What does the child use, and what does the parent use?", "A child uses a physical board, paper habit sheet and space to write about the day. The parent alone uses the app for reviewing effort, recording points, tracking consistency and managing partner offers. The child does not need a phone or an account."],
    ["How do families choose routines?", "Parents can choose up to 12 suggested routines or create their own. The board stays visible and the family can adapt its daily practice to school and work schedules."],
  ]},
  { id: "privacy", title: "Privacy & family time", questions: [
    ["What information about my child is collected?", "The proposed habit experience does not ask for a child's name, date of birth, gender, photo or school name. A parent-managed account records habit consistency and points. This is the intended privacy design, not a certification of legal compliance. Any future financial partner service would need separate terms and privacy review."],
    ["Why does the parent provide a phone number?", "The product plan uses a parent's phone number for sign-in and account verification, and does not require a parent's email address. This website's interest form is separate and currently includes an optional email field."],
    ["How are screen-free time and points tracked?", "The parent starts a family screen-free window in the app, puts the phone aside, and later records what they saw on the physical board. The plan calculates time and consistency against the parent account—not a digital profile of the child."],
    ["Can we change our family time or take a break?", "The proposed settings allow families to change their screen-free window, take up to two weekly days off and plan up to three monthly leave days (at least 30 minutes before the selected window). Incoming calls remain available for safety."],
    ["Can children give feedback to parents?", "Yes. The proposed parent reflection lets a child share whether the adult was present, attentive and phone-free. Parents can earn bonus recognition for listening without judgment."],
  ]},
  { id: "points", title: "Age stages & points", questions: [
    ["What are the three child development tracks?", "The proposed Incentive Track (ages 5–8) rewards routines and achievements; the Autonomy Track (ages 9–12) focuses on achievements and reflection rather than points for routine self-care; the Accountability Track (ages 13–17) adds optional, parent-directed consequences while protecting against a negative daily total. Age ranges guide the design rather than replacing parental judgment."],
    ["How many points can children earn each day?", "In the proposed Incentive Track, up to 20 points come from routines and 10 from achievements (30 total). In the Autonomy Track, routine points are zero and achievement points are capped at 30. In the Accountability Track, achievement points are capped at 30; optional negative marks cannot take the daily score below zero."],
    ["Why do routine points change with age?", "Early on, small rewards can make routines engaging. As children grow, the proposed system shifts attention to reflection and self-directed achievement so everyday care is not treated as a paid chore. These are design principles, not a claim that one scoring method works for every child."],
    ["Why cap points and negative marks?", "The proposed caps keep recognition proportionate and prevent the daily score from falling below zero. Parents remain responsible for using feedback gently; the board is for discipline and reflection, not punishment or comparison."],
    ["Can points be exchanged for cash or free products?", "No. Points are not cash, cannot be sold or transferred, and do not automatically entitle a family to a free product. The retail partner plan lets parents use points toward exclusive discount vouchers on purchases."],
    ["How do partner discounts work?", "The proposed flow is: earn points through parent-reviewed offline routines, choose a partner offer in the parent app, then present a single-use voucher or QR code in-store or a promo code online. Offers and verification depend on partner onboarding and are not live features of this website."],
  ]},
  { id: "organisations", title: "Schools, colleges & employers", questions: [
    ["What does a school need to do?", "Students use an offline board at home. The parent handles the app, while the school can introduce families to the programme without student devices, Wi-Fi, teacher tracking or school IT integration."],
    ["How could colleges use it?", "Students can use a physical board to keep study, sleep and focus routines visible. Departments, hostel groups or clubs can explore a pilot; it is a habit support tool, not a clinical treatment for anxiety or burnout."],
    ["How could employers take part?", "Employers can explore a family wellbeing pilot for working parents. The supplied partnership proposal also describes optional co-branded boards and anonymised, group-level engagement reports, which would require an agreed programme and appropriate privacy safeguards."],
    ["Can companies support schools too?", "The proposed sponsorship model allows a company to fund boards for school families, with agreed branding and delivery confirmation. It is separate from the free family and school participation described on this site."],
  ]},
  { id: "partners", title: "Retail & financial partners", questions: [
    ["What does a retail partner get?", "The proposed package includes a brand and offer listing, store links and locations, cashier voucher verification, online coupon options, branded materials and redemption reports. Fees, placement, integrations and availability are discussed individually; no portal is live on this site."],
    ["Which businesses can join?", "Apparel and department stores, bookstores, educational outlets, sports and fitness retailers, family experiences, and healthy food or wellness businesses—whether they sell in-store, online or both."],
    ["How would in-store redemption work?", "Under the proposed model, a parent shows a single-use voucher or QR code at checkout. Staff validate it through a merchant web portal and apply the agreed discount. Online checkout would use a unique promo code."],
    ["What is Digital Hundi?", "Digital Hundi is a proposed Phase II initiative for family-led financial literacy and micro-savings with banks, NBFCs and fintechs. Potential links to minor accounts or recurring deposits require licensed partners, agreed terms and privacy review. Ennotraan (என்நோற்றான்) Points are not currently deposits or cash."],
  ]},
] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "Frequently Asked Questions — Ennotraan (என்நோற்றான்)" },
    { name: "description", content: "Answers about Ennotraan (என்நோற்றான்) family habits, privacy, child development tracks, points, schools, retail rewards and Digital Hundi." },
    { property: "og:title", content: "Frequently Asked Questions — Ennotraan (என்நோற்றான்)" },
    { property: "og:description", content: "Understand the physical board, parent app, points, privacy and planned partner programmes." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: FAQ,
});

function FAQ() {
  return <>
    <PageHero eyebrow="Questions & answers" title="A clearer picture of how it works." intro="The answers below distinguish today's website from product features and partnerships being planned. For a personal answer, write to info@ennotraan.com." image={{ src: faqHero, alt: "A family spending time together around a physical habit board", width: 1400, height: 1000 }} />
    <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 lg:grid-cols-[220px_1fr]">
      <nav aria-label="FAQ topics" className="flex flex-wrap items-start gap-2 lg:sticky lg:top-28 lg:flex-col lg:self-start">{groups.map(group => <a href={`#${group.id}`} key={group.id} className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{group.title}</a>)}</nav>
      <div className="space-y-14">{groups.map(group => <section id={group.id} key={group.id} className="scroll-mt-32"><h2 className="mb-5 text-2xl sm:text-3xl">{group.title}</h2><Accordion type="multiple" className="border-t border-border">{group.questions.map(([question, answer]) => <AccordionItem value={question} key={question}><AccordionTrigger className="gap-5 py-5 text-left text-base font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-3xl pb-6 text-base leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></section>)}<p className="border-t border-border pt-8 text-muted-foreground">Have another question? <a className="font-semibold text-primary underline-offset-4 hover:underline" href="mailto:info@ennotraan.com?subject=Ennotraan%20question">Email us</a> or explore the <Link to="/how-it-works" className="font-semibold text-primary underline-offset-4 hover:underline">daily practice</Link>.</p></div>
    </div>
  </>;
}