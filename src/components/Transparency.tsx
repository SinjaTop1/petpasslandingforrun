import { Camera, ListChecks, PackageCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: ListChecks,
    title: "Public supply list",
    body: "We share exactly what’s being purchased, before it’s spent.",
  },
  {
    icon: Camera,
    title: "Filmed delivery",
    body: "The drop-off at the shelter is documented on video.",
  },
  {
    icon: PackageCheck,
    title: "Final recap",
    body: "How many runners, what was delivered, where it went.",
  },
];

export function Transparency() {
  return (
    <section className="section bg-cream-50">
      <div className="container-prose">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Built on trust</p>
          <h2 className="heading-section mt-3">
            Transparent from start to finish.
          </h2>
          <p className="lead mt-4">
            You should see exactly where your €20 ends up. So we’ll show you.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-ink-900/10 bg-white p-6 shadow-card">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <it.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">
                    {it.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
