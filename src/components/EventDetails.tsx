import {
  Calendar,
  Clock,
  Footprints,
  MapPin,
  PackageOpen,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";

const facts = [
  {
    icon: Calendar,
    label: "Date",
    value: "[Date — to be confirmed]",
    note: "Announced 2 weeks before the event",
  },
  {
    icon: Clock,
    label: "Start time",
    value: "[Time — to be confirmed]",
    note: "Doors / check-in 30 min before",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "[Location — to be confirmed]",
    note: "Easy to reach by transit / car",
  },
  {
    icon: Footprints,
    label: "Distance & pace",
    value: "[Distance — TBC] · easy pace",
    note: "Walk it, jog it, or do both — no pressure",
  },
  {
    icon: PackageOpen,
    label: "What to bring",
    value: "Comfy shoes, water, your dog (optional)",
    note: "If you bring a dog: leash + well-behaved",
  },
  {
    icon: Users,
    label: "Who it’s for",
    value: "Anyone — beginners welcome",
    note: "Families, friends, first-time runners, dogs",
  },
];

export function EventDetails() {
  return (
    <section id="details" className="section bg-cream-50">
      <div className="container-prose">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Event details</p>
          <h2 className="heading-section mt-3">
            Everything you need to know.
          </h2>
          <p className="lead mt-5">
            A short, beginner-friendly community run. Walk, jog, or both — at
            your own pace. Bring your dog if you have one.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-ink-900/10 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                    <f.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                    {f.label}
                  </p>
                </div>
                <p className="mt-4 font-display text-xl font-semibold leading-tight text-ink-900">
                  {f.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {f.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-ink-500">
            Final details (route, exact time, parking) sent to all registrants
            before the event.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
