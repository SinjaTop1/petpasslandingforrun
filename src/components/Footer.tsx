import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-cream-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div className="container-prose relative py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative h-9 w-9 overflow-hidden rounded-xl">
                <Image
                  src="/logo.png"
                  alt="The Shelter Run"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-cream-50">
                The Shelter Run
              </span>
            </div>
            <p className="mt-4 max-w-md text-cream-100/70">
              An easy community run for shelter dogs. Run, walk, or support
              from home.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              Register for €20
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#faq"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/15 px-6 py-3 text-sm font-semibold text-cream-50 transition hover:bg-cream-50/5"
            >
              Read FAQ
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Shelter Run. Built with care.</p>
          <p className="max-w-md text-cream-100/50">
            The app is not veterinary care and does not replace professional
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
