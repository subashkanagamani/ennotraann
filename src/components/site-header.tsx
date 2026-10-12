import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";

const aboutGroup = [
  { to: "/about", label: "Why we built it" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/foundations", label: "Foundations" },
  { to: "/our-promise", label: "Our promise" },
] as const;

const everyoneGroup = [
  { to: "/for-everyone", label: "Not just for children" },
  { to: "/schools", label: "Schools" },
  { to: "/colleges", label: "Colleges" },
  { to: "/corporates", label: "Corporates" },
] as const;

const partnersGroup = [
  { to: "/partners", label: "Retail partners" },
  { to: "/digital-hundi", label: "Digital Hundi" },
] as const;

const navGroups = [
  { label: "Our story", items: aboutGroup },
  { label: "Who it's for", items: everyoneGroup },
  { label: "Partners", items: partnersGroup },
] as const;

const standaloneNav = [{ to: "/faq", label: "FAQs" }] as const;

function ChevronDown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className="h-3 w-3 shrink-0 fill-none stroke-current stroke-[1.5]"
    >
      <path d="M2 4.5 6 8.5 10 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavLinkItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "bg-secondary text-foreground" }}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-primary/70"
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <motion.img
            src="/images/ennotraan-logo-static.png"
            alt="Ennotraan"
            className="h-11 w-auto sm:h-12"
            whileHover={{ scale: 1.05, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.82rem] font-medium text-muted-foreground transition-colors hover:text-foreground group-hover:text-foreground group-focus-within:text-foreground"
              >
                {group.label}
                <ChevronDown />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 rounded-2xl border border-border/60 bg-background p-2 opacity-0 shadow-soft backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <p className="px-3 pb-1.5 pt-2 text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {group.label}
                </p>
                {group.items.map((item) => (
                  <NavLinkItem key={item.to} to={item.to} label={item.label} />
                ))}
              </div>
            </div>
          ))}
          {standaloneNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-[0.82rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs text-foreground lg:inline-flex">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
            Launching Soon
          </span>
          <Link
            to="/join"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground shadow-soft transition-transform hover:scale-[1.04] sm:inline-block"
          >
            Join free
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="absolute inset-x-0 top-0 h-[1.5px] bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="absolute inset-x-0 bottom-0 h-[1.5px] bg-foreground"
              />
            </span>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden border-t border-border/60 lg:hidden"
      >
        <nav className="mx-auto grid max-w-6xl gap-3 px-6 py-4" aria-label="Mobile">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="px-3 pb-1 text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground/70">
                {group.label}
              </p>
              <div className="grid gap-1">
                {group.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    activeProps={{ className: "bg-secondary text-foreground" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="grid gap-1">
            {standaloneNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-primary px-3 py-3 text-base text-primary-foreground"
            >
              Join free
            </Link>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
