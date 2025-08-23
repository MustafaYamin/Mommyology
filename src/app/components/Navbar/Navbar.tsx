'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const funFont = "font-['Comic_Sans_MS','Comic_Sans','cursive'] font-extrabold tracking-wide";

const navLinks = [
  { href: '#about', label: 'Who We Are' },
  { href: '#services', label: 'What We Do' },
  { href: '#upcoming-events', label: 'Upcoming Events' },
  { href: '#team', label: 'Our Team' },
  { href: '#past-events', label: 'Past Events' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full flex items-center justify-between px-4 py-3 shadow-lg relative overflow-visible border-b-4 border-[#FDE047] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#6B5AA2]/95 backdrop-blur-md' 
          : 'bg-[#6B5AA2]'
      }`}
    >
      <div className="flex items-center gap-3 z-10">
        <Link href="/" className="group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Image 
              src="/Images/logo.jpg" 
              alt="Mommyology Logo" 
              width={120} 
              height={36} 
              priority 
              className="rounded-xl bg-[#FDE047] p-1 shadow-lg border-2 border-[#45C8F0] transition-all duration-300 group-hover:shadow-xl" 
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FDE047] rounded-full animate-pulse" />
          </motion.div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              className={`px-4 py-2 rounded-full text-white border-2 border-transparent hover:border-[#FDE047] hover:bg-[#FDE047] hover:text-[#6B5AA2] transition-all duration-300 text-lg ${funFont} shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-50 relative"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span 
          className={`block w-7 h-1 bg-[#FDE047] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <motion.span 
          className={`block w-7 h-1 bg-[#FDE047] rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <motion.span 
          className={`block w-7 h-1 bg-[#FDE047] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#6B5AA2]/95 backdrop-blur-md z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-6 py-3 rounded-full bg-white/10 text-white border-2 border-[#FDE047] shadow-lg text-xl ${funFont} hover:bg-[#FDE047] hover:text-[#6B5AA2] transition-all duration-300 transform hover:scale-105`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 left-8 w-8 h-8 bg-[#FDE047]/60 rounded-full blur-xl animate-bounce-slow z-0" />
      <div className="absolute -bottom-4 right-16 w-10 h-10 bg-[#45C8F0]/40 rounded-full blur-xl animate-bounce-slower z-0" />
      <div className="absolute top-2 right-4 w-4 h-4 bg-[#6B5AA2]/70 rounded-full blur-md animate-bounce-fast z-0" />
    </motion.nav>
  );
};

export default Navbar;
