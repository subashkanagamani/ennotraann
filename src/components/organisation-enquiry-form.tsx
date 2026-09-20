import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type EnquiryAudience = "school" | "college" | "company";

type AudienceConfig = {
  organisationLabel: string;
  organisationPlaceholder: string;
  contactRoleLabel: string;
  contactRolePlaceholder: string;
  emailLabel: string;
  countLabel: string;
  countPlaceholder: string;
  pilotLabel: string;
  pilotOptions: string[];
  successTitle: string;
};

const audienceConfig: Record<EnquiryAudience, AudienceConfig> = {
  school: {
    organisationLabel: "School name",
    organisationPlaceholder: "Name of your school",
    contactRoleLabel: "Your role",
    contactRolePlaceholder: "Principal, teacher, coordinator…",
    emailLabel: "Official email",
    countLabel: "Approximate student count",
    countPlaceholder: "Number of students",
    pilotLabel: "Preferred first group",
    pilotOptions: ["One class", "One grade", "Primary school", "Middle school", "Whole school", "Not sure yet"],
    successTitle: "Thank you for introducing your school",
  },
  college: {
    organisationLabel: "College name",
    organisationPlaceholder: "Name of your college",
    contactRoleLabel: "Your role or department",
    contactRolePlaceholder: "Faculty, student affairs, department…",
    emailLabel: "Official email",
    countLabel: "Approximate student count",
    countPlaceholder: "Number of students",
    pilotLabel: "Preferred pilot group",
    pilotOptions: ["One department", "Hostel block", "Student club", "First-year students", "Whole campus", "Not sure yet"],
    successTitle: "Thank you for introducing your college",
  },
  company: {
    organisationLabel: "Company name",
    organisationPlaceholder: "Name of your company",
    contactRoleLabel: "Your HR or ESG role",
    contactRolePlaceholder: "HR, people team, CSR, ESG…",
    emailLabel: "Work email",
    countLabel: "Approximate employee count",
    countPlaceholder: "Number of employees",
    pilotLabel: "Preferred rollout",
    pilotOptions: ["One team", "One office", "Working parents", "Wellbeing programme", "Company-wide", "Not sure yet"],
    successTitle: "Thank you for introducing your company",
  },
};

const enquirySchema = z.object({
  organisation: z.string().trim().min(2, "Please enter the organisation name.").max(120, "Please keep this under 120 characters."),
  contactName: z.string().trim().min(2, "Please enter your name.").max(100, "Please keep this under 100 characters."),
  role: z.string().trim().min(2, "Please enter your role.").max(100, "Please keep this under 100 characters."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(20, "Please enter a valid phone number.").regex(/^[+()\d\s-]+$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Please keep this under 255 characters."),
  city: z.string().trim().min(2, "Please enter your city.").max(100, "Please keep this under 100 characters."),
  count: z.coerce.number({ invalid_type_error: "Please enter an approximate count." }).int("Please enter a whole number.").min(1, "Please enter an approximate count.").max(10_000_000, "Please enter a smaller count."),
  pilot: z.string().trim().min(1, "Please choose a preferred first group."),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;

const fieldClass = "h-12 rounded-xl bg-background/80 px-4 text-base focus-visible:ring-4 focus-visible:ring-primary/10";

export function OrganisationEnquiryForm({ audience }: { audience: EnquiryAudience }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const config = audienceConfig[audience];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const result = enquirySchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSent(true);
  };

  const fieldError = (name: keyof FieldErrors) => {
    const message = errors[name];
    return message ? <p id={`${name}-error`} className="text-sm text-destructive">{message}</p> : null;
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="done"
          role="status"
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="rounded-2xl bg-mint p-8 shadow-soft sm:p-10"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf text-leaf-foreground" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <h2 className="mt-6 text-2xl">{config.successTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Our team will contact you to understand your needs and discuss a suitable free pilot.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key={audience}
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-primary/15 bg-card p-6 shadow-soft sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label={config.organisationLabel} name="organisation" error={fieldError("organisation")}>
              <Input id="organisation" name="organisation" required maxLength={120} placeholder={config.organisationPlaceholder} className={fieldClass} aria-invalid={Boolean(errors.organisation)} aria-describedby={errors.organisation ? "organisation-error" : undefined} />
            </FormField>
            <FormField label="Contact person" name="contactName" error={fieldError("contactName")}>
              <Input id="contactName" name="contactName" required maxLength={100} placeholder="Your full name" className={fieldClass} aria-invalid={Boolean(errors.contactName)} aria-describedby={errors.contactName ? "contactName-error" : undefined} />
            </FormField>
            <FormField label={config.contactRoleLabel} name="role" error={fieldError("role")}>
              <Input id="role" name="role" required maxLength={100} placeholder={config.contactRolePlaceholder} className={fieldClass} aria-invalid={Boolean(errors.role)} aria-describedby={errors.role ? "role-error" : undefined} />
            </FormField>
            <FormField label="Phone number" name="phone" error={fieldError("phone")}>
              <Input id="phone" name="phone" type="tel" required maxLength={20} inputMode="tel" placeholder="Phone number" className={fieldClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
            </FormField>
            <FormField label={config.emailLabel} name="email" error={fieldError("email")}>
              <Input id="email" name="email" type="email" required maxLength={255} placeholder="name@organisation.com" className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
            </FormField>
            <FormField label="City" name="city" error={fieldError("city")}>
              <Input id="city" name="city" required maxLength={100} placeholder="City" className={fieldClass} aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? "city-error" : undefined} />
            </FormField>
            <FormField label={config.countLabel} name="count" error={fieldError("count")}>
              <Input id="count" name="count" type="number" required min={1} max={10000000} placeholder={config.countPlaceholder} className={fieldClass} aria-invalid={Boolean(errors.count)} aria-describedby={errors.count ? "count-error" : undefined} />
            </FormField>
            <FormField label={config.pilotLabel} name="pilot" error={fieldError("pilot")}>
              <select id="pilot" name="pilot" required defaultValue="" className={`${fieldClass} w-full border border-input text-foreground outline-none`} aria-invalid={Boolean(errors.pilot)} aria-describedby={errors.pilot ? "pilot-error" : undefined}>
                <option value="" disabled>Please choose</option>
                {config.pilotOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </FormField>
          </div>
          <Button type="submit" size="lg" className="mt-7 h-12 w-full rounded-full text-base">
            Send enquiry
          </Button>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Ennotraan is free. We will use these details only to contact you about the programme.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function FormField({ label, name, error, children }: { label: string; name: string; error: ReactNode; children: ReactNode }) {
  return (
    <div className="grid content-start gap-2">
      <Label htmlFor={name} className="text-muted-foreground">{label}</Label>
      {children}
      {error}
    </div>
  );
}