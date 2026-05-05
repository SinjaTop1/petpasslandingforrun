# The Shelter Run — Landing Page

A high-converting landing page for **The Shelter Run**, a community charity event. People register for €20 — their registration helps fund food, toys, and supplies for shelter dogs and includes 3 months free founder access to a personalized pet care app.

## Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **Motion** (`motion/react`, formerly Framer Motion)
- **Lucide Icons**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          Fonts, metadata, body shell
│   ├── page.tsx            Composes all landing-page sections
│   └── globals.css         Tailwind layers + design tokens
└── components/
    ├── Header.tsx          Sticky header w/ scroll state
    ├── Hero.tsx            Hero + CTA + trust line + visual
    ├── HowItWorks.tsx      3-step explainer
    ├── Mission.tsx         Why we’re launching this way
    ├── Includes.tsx        What €20 includes (cards)
    ├── AppSection.tsx      The pet care app (dark)
    ├── Transparency.tsx    Public delivery pipeline
    ├── Community.tsx       Run / walk / support-from-home
    ├── Pricing.tsx         Pricing card with primary CTA
    ├── FAQ.tsx             Accordion FAQ
    ├── Footer.tsx
    └── Reveal.tsx          Scroll reveal helper
```

Imagery in `/public` is custom-generated for the campaign and is intended to feel local, warm, and documentary — not stock-y or corporate.

## Conversion goal

Drive registrations for the €20 Shelter Run. The primary CTA `Register for €20` repeats in the header, hero, includes section, pricing card, and footer.
