'use client'
import HeroSection from "./components/sections/HeroSection";
import dynamic from "next/dynamic";
import TeamSection from "./components/sections/TeamSection";

const AboutSection = dynamic(() => import("./components/sections/AboutSection"), { ssr: false, loading: () => <div style={{minHeight: '400px'}} /> });
const ServicesSection = dynamic(() => import("./components/sections/ServicesSection"), { ssr: false, loading: () => <div style={{minHeight: '400px'}} /> });
const EventsSection = dynamic(() => import("./components/sections/EventsSection"), { ssr: false, loading: () => <div style={{minHeight: '400px'}} /> });
const ContactSection = dynamic(() => import("./components/sections/ContactSection"), { ssr: false, loading: () => <div style={{minHeight: '400px'}} /> });

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-[#F8F6FF] via-white to-[#F0F8FF] min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      {/* <PartnersSection /> */}
      <TeamSection/>
      <ContactSection />
    </main>
  );
}