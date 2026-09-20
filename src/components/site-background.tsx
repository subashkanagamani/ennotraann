export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -left-56 top-[8%] h-[30rem] w-[30rem] rotate-12 rounded-[30%] bg-sky/45 blur-[100px] drift-slow" />
      <div className="absolute -right-56 top-[38%] h-[34rem] w-[34rem] -rotate-12 rounded-[32%] bg-lilac/35 blur-[110px] drift-slower" />
      <div className="absolute bottom-[-12rem] left-[24%] h-[30rem] w-[30rem] rotate-45 rounded-[28%] bg-mint/35 blur-[110px] drift-slow" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(var(--primary)_0.55px,transparent_0.55px)] [background-size:24px_24px]" />
    </div>
  );
}
