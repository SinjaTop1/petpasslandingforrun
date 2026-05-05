import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventDetails } from "@/components/EventDetails";
import { Impact } from "@/components/Impact";
import { AppSection } from "@/components/AppSection";
import { Transparency } from "@/components/Transparency";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <EventDetails />
      <Impact />
      <AppSection />
      <Transparency />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
