'use client'
import HomeSlider from "./components/HomeSlider";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#F8F6FF] min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 relative min-h-[420px]"
        style={{ backgroundImage: "url('/Images/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#6B5AA2]/80" aria-hidden="true"></div>
        <div className="relative flex flex-col items-center z-10">
          <Image src="/Images/logo.jpg" alt="Mommyology Logo" width={220} height={70} className="rounded-2xl bg-[#FDE047] p-2 border-4 border-[#45C8F0] shadow-xl mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FDE047] drop-shadow-lg mb-2 text-center font-['Comic_Sans_MS','Comic_Sans','cursive']">Nature-based Fun for Kids!</h1>
          <p className="text-lg md:text-xl text-white mb-6 text-center max-w-xl drop-shadow">Events, adventures, and learning in nature for every child. Discover, play, and grow with Mommyology!</p>
          <Link href="#contact" className="px-6 py-3 rounded-full bg-[#45C8F0] text-white font-bold text-lg shadow hover:bg-[#FDE047] hover:text-[#6B5AA2] transition-all">Join Us</Link>
        </div>
      </section>

      {/* Infinite Partner Slider */}
      <HomeSlider />

      {/* Who We Are */}
      <section id="who-we-are" className="w-full max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B5AA2] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">Who We Are</h2>
        <p className="text-lg text-[#6B5AA2]">We are passionate about connecting children with nature through fun, creative, and educational events. Our team is dedicated to nurturing curiosity, confidence, and joy in every child.</p>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="w-full max-w-4xl mx-auto py-12 px-4 text-center bg-[#FDE047]/30 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#45C8F0] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">What We Do</h2>
        <p className="text-lg text-[#6B5AA2]">From nature walks and art workshops to science experiments and outdoor games, we create memorable experiences that inspire kids to explore and care for the world around them.</p>
      </section>

      {/* Past Events Preview */}
      <section id="past-events" className="w-full max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FDE047] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">Past Events</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="w-40 h-28 bg-[#45C8F0]/10 border-2 border-[#45C8F0] rounded-xl flex items-center justify-center text-[#45C8F0] font-bold">Event 1</div>
          <div className="w-40 h-28 bg-[#FDE047]/10 border-2 border-[#FDE047] rounded-xl flex items-center justify-center text-[#FDE047] font-bold">Event 2</div>
          <div className="w-40 h-28 bg-[#6B5AA2]/10 border-2 border-[#6B5AA2] rounded-xl flex items-center justify-center text-[#6B5AA2] font-bold">Event 3</div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="w-full max-w-2xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B5AA2] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">Contact Us</h2>
        <p className="text-lg text-[#6B5AA2] mb-4">Want to join an event or partner with us? Reach out and let’s make magic happen!</p>
        <a href="mailto:info@mommyology.com" className="inline-block px-6 py-3 rounded-full bg-[#FDE047] text-[#6B5AA2] font-bold text-lg shadow hover:bg-[#45C8F0] hover:text-white transition-all">Email Us</a>
      </section>
    </main>
  );
}