export type InstitutionContent = {
  slug: "/schools" | "/colleges" | "/corporates";
  eyebrow: string;
  title: string;
  intro: string;
  image: "schools" | "colleges" | "corporates";
  firstSectionTitle: string;
  secondSectionTitle: string;
  challenges: { title: string; body: string }[];
  program: { title: string; body: string }[];
  outcomes: string[];
  ctaTitle: string;
  ctaBody: string;
  meta: { title: string; description: string };
};

export const schools: InstitutionContent = {
  slug: "/schools",
  eyebrow: "For schools",
  title: "Empower your students beyond the classroom—at zero cost to your school or parents.",
  intro:
    "A student's academic performance and wellbeing are built on daily habits formed at home. Ennotraan gives educators a turnkey, scientifically backed framework that helps parents nurture disciplined, emotionally grounded children without adding any operational or financial burden to the school.",
  image: "schools",
  firstSectionTitle: "What parents receive",
  secondSectionTitle: "Why educators recommend Ennotraan",
  challenges: [
    {
      title: "A 100% free screen-free ecosystem",
      body: "A physical, tactile board for the child and a free private app for parent logging—with zero subscriptions, hidden fees, or child data collection.",
    },
    {
      title: "Relief from daily conflict",
      body: "A gentle, non-confrontational framework that reduces nagging and arguments over homework, bedtime, chores, and screen limits.",
    },
    {
      title: "Recognition and family value",
      body: "Parents earn recognition for consistency and phone-free family time, while partner co-pay discounts support books, skill kits, and family lifestyle tools.",
    },
  ],
  program: [
    {
      title: "100% free for everyone",
      body: "The programme is completely free for your institution and your parent community.",
    },
    {
      title: "Complements school discipline",
      body: "It reinforces home routines such as daily reading, punctual sleep, homework, and phone-free study blocks.",
    },
    {
      title: "No operational burden",
      body: "Children use only the physical board, while schools need no tracking, software integration, or management from teachers and staff.",
    },
  ],
  outcomes: [
    "Better attention spans and stronger classroom engagement",
    "Less friction around screens, homework, and bedtime at home",
    "A practical bridge between classroom values and family routines",
    "No student data, rankings, fees, or administrative workload",
  ],
  ctaTitle: "Bring Ennotraan to your school, free.",
  ctaBody:
    "Tell us about your school and our team will walk your leadership through the setup, the boards, and the teacher app.",
  meta: {
    title: "Ennotraan for Schools — screen-free habit building in class",
    description:
      "A free physical habit board and private teacher app that helps schools build punctuality, reading and focus, with parents reinforcing the same habits at home.",
  },
};

export const colleges: InstitutionContent = {
  slug: "/colleges",
  eyebrow: "For colleges",
  title: "Self-discipline for students who finally control their own time.",
  intro:
    "College is the first place nobody checks your routine. Ennotraan gives students a visible, screen-free anchor for study blocks, sleep, fitness, and focus.",
  image: "colleges",
  firstSectionTitle: "What gets in the way today",
  secondSectionTitle: "How the programme runs",
  challenges: [
    {
      title: "Total freedom, no structure",
      body: "Attendance is the only checkpoint. Sleep, study, and health quietly collapse across the first two semesters.",
    },
    {
      title: "Phones own the study hours",
      body: "Deep work is replaced by fragmented scrolling, and productivity apps live inside the same device causing the problem.",
    },
    {
      title: "Placement pressure arrives late",
      body: "Skills that need daily practice, reading, coding, communication, get crammed into the final months instead of built over years.",
    },
  ],
  program: [
    {
      title: "Hostel and department boards",
      body: "Students set 15 to 20 personal benchmarks such as deep work blocks, gym, reading, revision, and phone-free windows, then print their insert.",
    },
    {
      title: "Tick it off, away from the phone",
      body: "The board sits on the desk or hostel wall as a visible daily anchor. Nothing to unlock, nothing to notify.",
    },
    {
      title: "Screen-free sessions earn points",
      body: "Students open the app only to start a screen-free hold and claim points for honoured focus time and board consistency, under structured caps.",
    },
  ],
  outcomes: [
    "Consistent study and sleep rhythms without policing",
    "Focus time measured honestly, not by app screenshots",
    "Department, hostel, or club level rollouts",
    "No rankings between students, only progress against their own past week",
  ],
  ctaTitle: "Roll it out on your campus, free.",
  ctaBody:
    "Share your college details and we will help you pilot Ennotraan with a department, hostel block, or student club.",
  meta: {
    title: "Ennotraan for Colleges — student focus and self-discipline",
    description:
      "A free habit board and screen-free focus system helping college students hold study blocks, sleep, fitness and phone-free hours without leaderboards.",
  },
};

export const corporates: InstitutionContent = {
  slug: "/corporates",
  eyebrow: "For corporates",
  title: "Support your workforce where it matters most—building healthy, screen-free homes.",
  intro:
    "An employee's productivity, mental focus, and job satisfaction are deeply tied to peace at home. Ennotraan is a zero-cost, high-impact family wellbeing initiative that reduces domestic friction, promotes digital detox, and honours the daily effort of working parents.",
  image: "corporates",
  firstSectionTitle: "What working parents receive",
  secondSectionTitle: "Why HR leaders and ESG teams choose Ennotraan",
  challenges: [
    {
      title: "A 100% free screen-free framework",
      body: "A physical habit board for children paired with a free private parent app—with zero subscriptions or child data harvesting.",
    },
    {
      title: "Reduced parental stress",
      body: "A calm, non-confrontational system that reduces daily arguments over homework, bedtime, routines, and screen limits.",
    },
    {
      title: "Recognition and employee value",
      body: "Parents receive recognition for consistency and family phone-free time, plus partner co-pay discounts on education and wellness products.",
    },
  ],
  program: [
    {
      title: "A zero-cost corporate benefit",
      body: "There is no cost to the company budget and no financial burden on employees.",
    },
    {
      title: "True work-life harmony",
      body: "The programme addresses home-front burnout by easing evening routine battles and screen friction.",
    },
    {
      title: "CSR and ESG alignment without overhead",
      body: "Support community mental health and digital wellbeing with no corporate software integration, tracking, or HR administration.",
    },
  ],
  outcomes: [
    "Healthier, calmer family routines for working parents",
    "Less home-front stress spilling into the working day",
    "A visible Society-First commitment to digital wellbeing",
    "No employee surveillance, software integration, or management burden",
  ],
  ctaTitle: "Start a pilot with your team, free.",
  ctaBody:
    "Tell us about your organisation and we will help you run Ennotraan with a team, floor, or department.",
  meta: {
    title: "Ennotraan for Corporates — deep work and workplace wellbeing",
    description:
      "A free physical habit board and screen-free session app that helps teams protect deep work, movement and wellbeing habits without surveillance.",
  },
};
