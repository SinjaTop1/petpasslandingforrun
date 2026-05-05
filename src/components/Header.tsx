"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-900/10 bg-cream-50/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-prose flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative h-9 w-9 overflow-hidden rounded-xl">
            <Image
              src="/logo.png"
              alt="The Shelter Run"
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-ink-900 sm:text-lg">
            The Shelter Run
          </span>
        </a>

        <a
          href="#register"
          className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition hover:bg-ink-800"
        >
          Register · €20
        </a>
      </div>
    </header>
  );
}
