import { Link } from "@tanstack/react-router";
import { Reveal } from "./motion";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink px-6 py-16 text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rotate-12 rounded-[30%] bg-coral/30 blur-3xl drift-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 -rotate-12 rounded-[28%] bg-leaf/25 blur-3xl drift-slower"
      />
      <Reveal className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl">Ennotraan</h2>
          <p className="mt-3 max-w-md leading-relaxed opacity-75">
            A 100% free, screen-free framework helping families build lifelong habits, one honest
            day at a time.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-80">
            <Link to="/about" className="underline-offset-4 hover:underline">
              Why we built it
            </Link>
            <Link to="/how-it-works" className="underline-offset-4 hover:underline">
              How it works
            </Link>
            <Link to="/foundations" className="underline-offset-4 hover:underline">
              Foundations
            </Link>
            <Link to="/schools" className="underline-offset-4 hover:underline">
              Schools
            </Link>
            <Link to="/colleges" className="underline-offset-4 hover:underline">
              Colleges
            </Link>
            <Link to="/corporates" className="underline-offset-4 hover:underline">
              Corporates
            </Link>
            <Link to="/partners" className="underline-offset-4 hover:underline">
              Partners
            </Link>
            <Link to="/for-everyone" className="underline-offset-4 hover:underline">
              Not just for children
            </Link>


            <Link to="/our-promise" className="underline-offset-4 hover:underline">
              Our promise
            </Link>
            <Link to="/join" className="underline-offset-4 hover:underline">
              Join free
            </Link>
          </div>
        </div>
        <div className="text-sm leading-relaxed opacity-75 md:text-right">
          <p>
            Contact:{" "}
            <a href="mailto:info@ennotraan.com" className="underline-offset-4 hover:underline">
              info@ennotraan.com
            </a>
          </p>
          <p className="mt-3">
            A social initiative by PPLMeliorate Services Private Limited, a recognised startup in
            Tamil Nadu.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
