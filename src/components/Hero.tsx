"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Calendar, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream-50 pt-28 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain-bg opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl"
      />

      <div className="container-prose relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill-brand"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              A community run for shelter dogs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="heading-display mt-5"
            >
              Run for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">shelter dogs.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-2 -z-0 h-3 -skew-x-6 rounded-full bg-brand-300/80"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lead mt-6 max-w-xl"
            >
              An easy, beginner-friendly community run.{" "}
              <span className="font-semibold text-ink-900">€20</span> funds
              food, toys, and supplies for shelter dogs — and unlocks{" "}
              <span className="font-semibold text-ink-900">
                3 months free
              </span>{" "}
              founder access to our pet care app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#register" className="btn-brand">
                Register for €20
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#details" className="btn-secondary">
                Event details
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-700"
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-brand-600" strokeWidth={2.4} />
                {/* TODO: replace with date */}
                <span className="font-medium">[Date — TBC]</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-400" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand-600" strokeWidth={2.4} />
                {/* TODO: replace with location */}
                <span className="font-medium">[Location — TBC]</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-400" />
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-brand-600" strokeWidth={2.4} />
                <span className="font-medium">Beginner-friendly</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 flex items-center gap-2 text-sm text-ink-600"
            >
              <ShieldCheck
                className="h-4 w-4 text-brand-600"
                strokeWidth={2.4}
              />
              We document the run, supply purchase & shelter delivery publicly.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink-900/10 shadow-warm">
              <Image
                src="/hero-run.jpg"
                alt="Community runners with their dogs at sunrise"
                fill
                priority
                sizes="(min-width:1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink-900/25 via-transparent to-transparent" />

              <div className="absolute right-4 top-4 rounded-2xl border border-white/20 bg-ink-900/70 px-4 py-2.5 text-cream-50 backdrop-blur">
                <p className="text-[10px] uppercase tracking-widest text-cream-200">
                  Registration
                </p>
                <p className="font-display text-2xl font-semibold leading-tight">
                  €20
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
