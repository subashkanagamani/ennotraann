import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";

const field =
  "w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-base text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10";

export function JoinForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-mint p-8 shadow-soft sm:p-10"
        >
          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
            className="grid h-14 w-14 place-items-center rounded-full bg-leaf text-leaf-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </motion.span>
          <h3 className="mt-6 text-2xl text-foreground">Thank you for joining</h3>
          <p className="mt-3 text-muted-foreground">
            Your details are with us. Someone from our team will reach out personally to welcome you
            in. There is nothing to pay, today or ever.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-primary/15 bg-card p-8 shadow-soft sm:p-10"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Your name</span>
              <input required name="name" className={field} placeholder="Name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Phone number</span>
              <input required name="phone" type="tel" className={field} placeholder="Phone number" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">City</span>
              <input required name="city" className={field} placeholder="City" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Who is this for?</span>
              <select required name="who" defaultValue="" className={field}>
                <option value="" disabled>
                  Please choose
                </option>
                <option>My child</option>
                <option>Myself</option>
                <option>My whole family</option>
                <option>A parent or grandparent</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Email (optional)</span>
              <input name="email" type="email" className={field} placeholder="Email" />
            </label>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 w-full rounded-full bg-primary px-6 py-4 text-base text-primary-foreground shadow-soft"
          >
            Join free, no cost ever
          </motion.button>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            By joining, you are only agreeing to be contacted about this free programme. We will
            never sell your information.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
