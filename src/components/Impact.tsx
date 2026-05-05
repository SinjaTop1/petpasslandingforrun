import Image from "next/image";
import { HeartHandshake, Sparkles, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: HeartHandshake,
    title: "Helps shelter dogs",
    body: "Your registration funds food, toys, blankets, and supplies — delivered to a real shelter, on camera.",
  },
  {
    icon: Users,
    title: "Joins a community",
    body: "An easy run with people who care about dogs. Local or remote — every registration counts the same.",
  },
  {
    icon: Sparkles,
    title: "Unlocks the founder app",
    body: "3 months free access to our personalized pet care app. €5/month after, only if you choose to continue.",
  },
];

export function Impact() {
  return (
    <section className="section bg-cream-100/60">
      <div className="container-prose">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Where your €20 goes</p>
            <h2 className="heading-section mt-3">
              One small step. A real difference.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-ink-600">
              We didn’t want to launch our pet care app with just ads. The
              Shelter Run lets people who care about pets do something real —
              for dogs that need help today.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-ink-900/10 bg-white p-7 shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                  <c.icon className="h-5 w-5" strokeWidth={2.4} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-ink-600">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-3 rounded-3xl border border-ink-900/10 bg-white p-2 shadow-card sm:grid-cols-3 sm:p-3">
            <div className="flex items-center gap-4 rounded-2xl bg-cream-100/70 p-5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/shelter-dog.jpg"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink-900">
                  100% transparent
                </p>
                <p className="text-sm text-ink-600">
                  Public supply list & delivery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-cream-100/70 p-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-500 text-white font-display text-lg font-semibold">
                €20
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink-900">
                  One simple price
                </p>
                <p className="text-sm text-ink-600">
                  Registration + supplies + app
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-cream-100/70 p-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-ink-900 text-cream-50 font-display text-lg font-semibold">
                3mo
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink-900">
                  Free founder access
                </p>
                <p className="text-sm text-ink-600">
                  Then €5/mo or cancel anytime
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
