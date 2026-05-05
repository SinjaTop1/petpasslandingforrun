"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Do I have to run?",
    a: "No. Walk it, jog it, or do both — it’s an easy, beginner-friendly community run. You can also register as a supporter from home.",
  },
  {
    q: "Where does my €20 go?",
    a: "It funds the shelter supply delivery (food, toys, blankets, basics) and gives you 3 months free founder access to our pet care app. We publicly share what’s purchased and delivered.",
  },
  {
    q: "Can I bring my dog?",
    a: "Yes — if your dog is well-behaved on a leash. The pace is easy and dog-friendly.",
  },
  {
    q: "What happens after the 3 free months?",
    a: "You can continue at €5/month founder pricing, or cancel. No charges without your action.",
  },
  {
    q: "Can I join if I’m not local?",
    a: "Yes. Register as a supporter and you still get founder app access plus all event updates.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-cream-50">
      <div className="container-prose">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-section mt-3">
              Quick answers.
            </h2>
            <p className="mt-5 text-ink-600">
              Still curious? Reply to any of our event emails — we read every
              message.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink-900/10 rounded-3xl border border-ink-900/10 bg-white shadow-card">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-cream-50/60 sm:px-8"
                    >
                      <span className="font-display text-lg font-semibold text-ink-900 sm:text-xl">
                        {f.q}
                      </span>
                      <span
                        className={clsx(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-900/10 bg-cream-50 text-brand-600 transition",
                          isOpen && "rotate-45 border-brand-500 bg-brand-500 text-white"
                        )}
                      >
                        <Plus className="h-4 w-4" strokeWidth={2.6} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.32,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-ink-600 sm:px-8">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
