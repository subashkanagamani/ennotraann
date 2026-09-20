import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";

const nav = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/foundations", label: "Foundations" },
  { to: "/schools", label: "Schools" },
  { to: "/colleges", label: "Colleges" },
  { to: "/corporates", label: "Corporates" },
  { to: "/partners", label: "Partners" },
  { to: "/for-everyone", label: "Not just for children" },
  { to: "/our-promise", label: "Our promise" },
  { to: "/about", label: "Why we built it" },
] as const;


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

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative rounded-full px-2.5 py-2 text-[0.78rem] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
            className="grid h-10 w-10 place-items-center rounded-full border border-border xl:hidden"
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
        className="overflow-hidden border-t border-border/60 xl:hidden"
      >
        <nav className="mx-auto grid max-w-6xl gap-1 px-6 py-4">
          {[...nav, { to: "/join", label: "Join free" } as const].map((item) => (
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
        </nav>
      </motion.div>
    </motion.header>
  );
}
