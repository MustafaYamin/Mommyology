'use client'
import HeroSection from "./components/sections/HeroSection";
import PartnersSection from "./components/sections/PartnersSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import EventsSection from "./components/sections/EventsSection";
import ContactSection from "./components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-[#F8F6FF] via-white to-[#F0F8FF] min-h-screen">
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}