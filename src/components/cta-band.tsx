import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "./motion";

export function CtaBand({
  title = "Join today. It costs nothing, now or later.",
  body = "Leave your details and our team will personally reach out to welcome you in.",
  organisationAudience,
}: {
  title?: string;
  body?: string;
  organisationAudience?: "school" | "college" | "company";
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <motion.div whileHover={{ y: -4 }} className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-primary-foreground shadow-soft sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rotate-12 rounded-[30%] bg-coral/45 blur-3xl drift-slow"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 -rotate-12 rounded-[28%] bg-gold/35 blur-3xl drift-slower"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed opacity-90">{body}</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-block">
              {organisationAudience ? (
                <Link
                  to="/organisation-enquiry"
                  search={{ for: organisationAudience }}
                  className="inline-block rounded-full bg-background px-8 py-4 font-semibold text-primary shadow-soft"
                >
                  Enquire about a free pilot
                </Link>
              ) : (
                <Link
                  to="/join"
                  className="inline-block rounded-full bg-background px-8 py-4 font-semibold text-primary shadow-soft"
                >
                  Join free, no cost ever
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
