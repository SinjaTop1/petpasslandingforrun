import Image from "next/image";
import { BellRing, Brain, ClipboardList, HeartPulse } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: ClipboardList,
    title: "Personalized care plan",
    body: "Built around your pet’s breed, age, and routine.",
  },
  {
    icon: BellRing,
    title: "Daily routines & reminders",
    body: "Walks, feeding, meds — quietly on time.",
  },
  {
    icon: Brain,
    title: "Smart AI suggestions",
    body: "Nudges based on your pet’s actual habits.",
  },
  {
    icon: HeartPulse,
    title: "Wellbeing tracking",
    body: "See streaks form. Catch small things early.",
  },
];

export function AppSection() {
  return (
    <section
      id="app"
      className="section relative overflow-hidden bg-ink-900 text-cream-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl"
      />

      <div className="container-prose relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-brand-300">Why we built this</p>
              <h2 className="heading-section mt-3 text-cream-50">
                Healthy owners.
                <br />
                Happier pets.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-cream-100/80">
                We believe great pet care starts with you. When you move, rest,
                and stay consistent, your pet feels it too. The Shelter Run
                gets us moving — for shelter dogs, and for ourselves. Our app
                keeps that consistency going at home, every day after.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-200">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                Founder bonus: first 3 months free
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={0.1 + i * 0.04}>
                  <div className="flex items-start gap-3 rounded-2xl border border-cream-50/10 bg-cream-50/[0.04] p-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                      <f.icon className="h-4 w-4" strokeWidth={2.4} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cream-50">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm text-cream-100/70">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-7 text-xs text-cream-100/60">
                Not a replacement for your vet — a smarter way to stay
                organized and consistent with everyday care.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-500/30 via-transparent to-brand-500/10 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-cream-50/10">
                <Image
                  src="/app-preview.png"
                  alt="The pet care app dashboard"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover animate-float"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
