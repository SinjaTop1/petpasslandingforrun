import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const includes = [
  "Shelter Run / supporter access",
  "Shelter food, toys & supplies contribution",
  "3 months free founder app access",
  "Founder badge",
  "Event & delivery updates",
  "€5/month founder pricing after — or cancel",
];

export function Pricing() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-cream-50 py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-200/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl"
      />

      <div className="container-prose relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ready?</p>
          <h2 className="heading-section mt-3">
            Join the Shelter Run.
          </h2>
          <p className="lead mt-5">
            One simple price. Real impact for shelter dogs. Three months free
            on the app.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-xl">
            <div className="relative rounded-[2rem] border border-ink-900/10 bg-white p-1.5 shadow-warm">
              <div className="rounded-[calc(2rem-6px)] bg-gradient-to-br from-cream-50 via-white to-brand-50 p-8 sm:p-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="pill-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    Founder registration
                  </span>
                  <span className="text-xs font-semibold text-ink-500">
                    Limited spots
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-6xl font-semibold tracking-tight text-ink-900">
                    €20
                  </span>
                  <span className="text-ink-500">one-time</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-ink-700"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="btn-brand mt-9 w-full text-base sm:text-lg"
                >
                  Register for €20
                  <ArrowRight className="h-5 w-5" />
                </a>

                <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-500">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  Cancel anytime after the free period. The app is not
                  veterinary care and does not replace professional advice.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
