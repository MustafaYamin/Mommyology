'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const funFont = "font-['Comic_Sans_MS','Comic_Sans','cursive'] font-extrabold tracking-wide";

const navLinks = [
  { href: '#who-we-are', label: 'Who We Are' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#contact', label: 'Contact' },
  { href: '#past-events', label: 'Past Events' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between bg-[#6B5AA2] px-4 py-2 shadow-lg relative overflow-visible border-b-4 border-[#FDE047]">
      <div className="flex items-center gap-3 z-10">
        <Link href="/">
          <Image src="/Images/logo.jpg" alt="Mommyology Logo" width={120} height={36} priority className="rounded-xl bg-[#FDE047] p-1 shadow-lg border-2 border-[#45C8F0] hover:scale-105 transition-transform" />
        </Link>
        {/* <span className={`ml-2 text-xl md:text-2xl ${funFont}`}>mommyology</span> */}
      </div>
      {/* Hamburger button for mobile */}
      <button
        className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 z-60 fixed top-4 right-4 ${menuOpen ? '' : 'relative'}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-7 h-1 bg-[#FDE047] rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#FDE047] rounded my-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-[#FDE047] rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Nav links */}
      <ul
        className={`flex flex-col lg:flex-row items-center z-50 gap-2 lg:gap-4
          fixed lg:static inset-0 lg:inset-auto h-full lg:h-auto w-full lg:w-auto max-w-xs lg:max-w-none
          bg-[#6B5AA2]/95 lg:bg-transparent shadow-lg lg:shadow-none pt-24 lg:pt-0 px-6 lg:px-0
          transition-transform transition-opacity duration-300 ease-in-out
          ${menuOpen ? 'flex translate-x-0 opacity-100' : 'hidden lg:flex -translate-x-full opacity-0 lg:opacity-100 lg:translate-x-0'}`}
      >
        {navLinks.map((link) => (
          <li key={link.label} className="w-full lg:w-auto">
            <Link
              href={link.href}
              className={`block px-3 py-2 rounded-full bg-white/10 text-white border-2 border-[#FDE047] shadow text-lg lg:text-xl ${funFont} hover:bg-[#FDE047] hover:text-[#6B5AA2] hover:border-[#45C8F0] transition-all duration-200 text-center lg:text-left`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Playful bubbles */}
      <div className="absolute -top-4 left-8 w-8 h-8 bg-[#FDE047]/60 rounded-full blur-xl animate-bounce-slow z-0" />
      <div className="absolute -bottom-4 right-16 w-10 h-10 bg-[#45C8F0]/40 rounded-full blur-xl animate-bounce-slower z-0" />
      <div className="absolute top-2 right-4 w-4 h-4 bg-[#6B5AA2]/70 rounded-full blur-md animate-bounce-fast z-0" />
    </nav>
  );
};

export default Navbar;
