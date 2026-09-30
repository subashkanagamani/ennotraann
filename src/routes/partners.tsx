import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Store, ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import partnersHero from "@/assets/partners-hero.jpg";

const benefits = [
  { title: "In-store and online discovery", body: "Make your showroom or online store a destination for families celebrating everyday progress with useful offers." },
  { title: "A reason to return", body: "A partner offer can bring families back to browse books, apparel, sports equipment, and other things they already value." },
  { title: "Traceable redemptions", body: "Single-use vouchers are designed to connect an offer to an in-store or online purchase, giving partners a clearer view of campaign activity." },
  { title: "A shared purpose", body: "Stand alongside screen-free childhood, family connection, and practical rewards for consistent effort." },
];

const categories = [
  "Apparel and department stores",
  "Bookshops, stationery and educational outlets",
  "Sports, fitness and outdoor retailers",
  "Family experiences, science hubs and hobby academies",
  "Organic foods, healthy dining and family wellness",
];

export const Route = createFileRoute("/partners")({
  head: () => ({ meta: [
    { title: "Retail Partner Network — Ennotraan (என்நோற்றான்)" },
    { name: "description", content: "Explore the Ennotraan (என்நோற்றான்) retail partner network: family rewards, in-store and online offers, voucher redemption and partner enquiries." },
    { property: "og:title", content: "Retail Partner Network — Ennotraan (என்நோற்றான்)" },
    { property: "og:description", content: "Bring purposeful family rewards to your retail store or online shop." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Partners,
});

function Partners() {
  return <>
    <PageHero eyebrow="Retail partner network" title="Be where families celebrate their progress." intro="Become a preferred reward partner and offer purposeful co-pay discounts to families building screen-free routines. Meet them in your showroom or online store." image={{ src: partnersHero, alt: "Partners reviewing family-friendly educational and wellness products", width: 1400, height: 1050 }} />

    <section className="mx-auto max-w-6xl px-6 py-14">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase text-primary">A family-first invitation</p>
        <h2 className="mt-3 text-3xl">From everyday effort to useful rewards</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Children mark their daily routines on a physical board. Parents review their progress privately and award Ennotraan (என்நோற்றான்) Points. Families can use points toward partner discount vouchers on products and experiences they choose to purchase. Points are not cash and do not guarantee free products.</p>
      </Reveal>
      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
        {benefits.map((item, i) => <StaggerItem key={item.title} className="h-full"><div className={`h-full rounded-lg p-7 ${i % 2 ? "bg-mint" : "bg-sky"}`}><h3 className="text-xl">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p></div></StaggerItem>)}
      </StaggerGroup>
    </section>

    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><p className="text-sm font-semibold uppercase text-primary">How redemption is designed to work</p><h2 className="mt-3 text-3xl">One offer, two ways to shop.</h2></Reveal>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          <div><span className="text-4xl text-primary">01</span><h3 className="mt-3 text-xl">Earn</h3><p className="mt-2 text-muted-foreground">The child completes routines offline; the parent checks the board and logs points privately.</p></div>
          <div><span className="text-4xl text-primary">02</span><h3 className="mt-3 text-xl">Choose an offer</h3><p className="mt-2 text-muted-foreground">The parent selects a partner discount and generates a single-use voucher or QR code.</p></div>
          <div><span className="text-4xl text-primary">03</span><h3 className="mt-3 text-xl">Redeem</h3><p className="mt-2 text-muted-foreground">Show the code at the counter for validation, or enter a promo code during online checkout.</p></div>
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
      <div><Store className="h-8 w-8 text-primary"/><h2 className="mt-5 text-3xl">Who can join</h2><ul className="mt-6 space-y-4">{categories.map(item => <li key={item} className="flex gap-3 text-muted-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-primary"/>{item}</li>)}</ul></div>
      <div><ShoppingBag className="h-8 w-8 text-primary"/><h2 className="mt-5 text-3xl">What partner onboarding covers</h2><p className="mt-6 leading-relaxed text-muted-foreground">The proposed partner package includes an offer listing with store links and locations, a web-based cashier verification option, online coupon integration options, branded materials, and redemption reporting. Integration, fees, placement and launch timing are discussed during onboarding; these tools are not presented as live on this website.</p><Link to="/faq" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">Read partner FAQs <ArrowRight className="h-4 w-4" /></Link></div>
    </section>

    <section className="bg-ink px-6 py-16 text-primary-foreground"><div className="mx-auto max-w-6xl"><p className="text-sm uppercase opacity-70">Partner enquiries</p><h2 className="mt-3 max-w-2xl text-3xl">Let's plan a reward families will value.</h2><p className="mt-4 max-w-2xl opacity-80">Tell us about your brand, stores and online presence. We will discuss offers, enrolment terms and the right next step.</p><a className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 font-semibold text-primary" href="mailto:info@ennotraan.com?subject=Retail%20partner%20enquiry">Enquire about partnership <ArrowRight className="h-4 w-4" /></a></div></section>
  </>;
}