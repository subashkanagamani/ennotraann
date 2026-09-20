import type { ReactNode } from "react";

export const problemsParents = [
  {
    title: "Dedicated effort, endless friction",
    body: "Parents make tireless sacrifices, but without a structured system, daily routines turn into repetitive, exhausting arguments.",
  },
  {
    title: "Counterproductive rewards",
    body: "Existing digital apps hand out more screen time and addictive notifications to solve a screen-addiction issue.",
  },
  {
    title: "Zero real touchpoints",
    body: "Children are overwhelmed by digital noise, leaving them with no physical, tactile anchor to make their daily efforts feel real and rewarding.",
  },
];

export const problemsAdults = [
  {
    title: "Digital fragmentation",
    body: "Adult productivity apps live inside the very smartphones that cause endless distraction in the first place.",
  },
  {
    title: "Superficial gamification",
    body: "Digital streak counters and badges fail to build deep, lasting intrinsic motivation.",
  },
  {
    title: "Missing physical accountability",
    body: "Without a visible, dedicated physical presence in your space, daily adult goals are easily forgotten behind open tabs and phone notifications.",
  },
];

export const beliefs = [
  {
    title: "Discipline over obedience",
    body: "We foster intrinsic self-mastery and internal motivation, not forced compliance or transactional chores.",
  },
  {
    title: "Zero peer comparison",
    body: "No global leaderboards, social pressure, or public rankings. Every child competes only with their own past self.",
  },
  {
    title: "Age-appropriate science",
    body: "Grounded in behavioural research, with tailored habit modules designed for primary, middle, and high schoolers.",
  },
  {
    title: "Complete parental trust",
    body: "We put full authority back in the hands of parents, trusting you completely to guide and reward your child's journey.",
  },
  {
    title: "Tailored screen-free windows",
    body: "Parents freely set their own daily phone-free time slots and durations to align with the family's work and school schedules.",
  },
  {
    title: "Family-first flexibility",
    body: "No rigid, hard-and-fast rules. The system adapts to fit your household's unique daily rhythm and values.",
  },
];

export const steps = [
  {
    title: "Choose the habits, screen-free setup",
    body: "Select 10 to 12 daily habits that matter to your child and household, such as reading, waking on time, sleeping on time, tidying up, or phone-free meals. Print your customised habit sheet and slide it into the tactile board. Each sheet includes space for your child to write their daily success story and reflect on what made them proud.",
  },
  {
    title: "The child's process: evaluate, mark, narrate",
    body: "Your child physically ticks off completed habits on the board and writes their daily achievements in the dedicated space. Like a traditional diary, this quiet practice helps them recollect their day, express their thoughts, and build self-evaluation, responsibility, and narrative skills.",
  },
  {
    title: "Daily parent-granted points and mutual rewards",
    body: "Once a day, during your pre-selected time window and chosen days, open the free private app to review the physical board and personally award Ennotraan Points based on your child's effort. Parents also earn bonus points for consistency, active guidance, and honouring their selected phone-free time.",
  },
];

export const adultSteps = [
  {
    title: "Set your personal mastery benchmarks",
    body: "Select 15 to 20 high-value daily habits aligned with your fitness, learning, and professional goals, such as deep work blocks, workouts, daily reading, or phone-free focus windows. Print your habit insert and slide it into your physical board.",
  },
  {
    title: "Mark it done, tactile physical accountability",
    body: "Physically tick off completed habits on the wooden board throughout the day. No phone apps or digital distractions interrupt your flow, keeping a visible anchor in your workspace.",
  },
  {
    title: "Screen-free hold, consistency and capped points",
    body: "To claim daily points, open the private app, activate your screen-free session, and set your phone aside untouched. If the phone-free time is honoured, the app awards points for the duration, along with bonus points for board consistency. All self-earned points operate under structured capping rules.",
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M12 3l7 3v5.5c0 4.5-3 7.7-7 9.5-4-1.8-7-5-7-9.5V6l7-3z" />
    </svg>
  );
}
function RanksIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M4 20V12h4v8M10 20V7h4v13M16 20v-6h4v6M3 20h18M4 4l16 16" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.5 10h4a1.8 1.8 0 010 3.6h-4" />
    </svg>
  );
}

export const promises: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <ShieldIcon />,
    title: "No data about your child, ever",
    body: "We do not collect, store, or share anything that identifies your child. Only the parent holds the record.",
  },
  {
    icon: <RanksIcon />,
    title: "No leaderboards, ever",
    body: "There is no ranking, no comparing children against each other. That was left out on purpose.",
  },
  {
    icon: <ClockIcon />,
    title: "A monthly rhythm, not instant rewards",
    body: "Points build up every day but are only given out once a month, the same lesson every good habit teaches, earned slowly, valued more.",
  },
  {
    icon: <CoinIcon />,
    title: "Never treated as money",
    body: "Points cannot be sold, transferred, or cashed out. They can only be turned into a real, useful reward, or donated to social needs, which Ennotraan ethically parks for the needy.",
  },
];
