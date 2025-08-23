'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const funFont = "font-['Comic_Sans_MS','Comic_Sans','cursive'] font-extrabold tracking-wide";

const socialLinks = [
  {
    href: 'https://facebook.com/mommyology',
    label: 'Facebook',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5Z"
          fill="#A78BFA"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <path
          d="M13.5 22V14.5h2.25l.25-2H13.5V11.5c0-.58.16-.97 1-.97h1.25V8.7c-.22-.03-.97-.1-1.85-.1-1.83 0-3.15 1.12-3.15 3.18V12.5H8v2h2.25V22"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/mommyology',
    label: 'Instagram',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="6"
          fill="#A78BFA"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <circle cx="17" cy="7" r="1.2" fill="#fff" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/mommyology',
    label: 'Twitter',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
          fill="#A78BFA"
          stroke="#fff"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const quickLinks = [
  { href: '#about', label: 'Who We Are' },
  { href: '#services', label: 'What We Do' },
  { href: '#upcoming-events', label: 'Upcoming Events' },
  { href: '#team', label: 'Our Team' },
  { href: '#past-events', label: 'Past Events' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#6B5AA2] to-[#6B5AA2]/90 text-[#FDE047] py-12 px-4 relative mt-10 shadow-inner overflow-visible border-t-4 border-[#FDE047] z-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Logo and Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Image
                  src="/Images/logo.jpg"
                  alt="Mommyology Logo"
                  width={120}
                  height={40}
                  className="rounded-2xl bg-[#FDE047] p-2 border-4 border-[#45C8F0] shadow-lg hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FDE047] rounded-full animate-pulse" />
              </motion.div>
              <span className={`text-2xl md:text-3xl ${funFont}`}>
                mommyology
              </span>
            </div>
            <p className="text-[#FDE047]/90 text-sm leading-relaxed max-w-md">
              Connecting children with nature through fun, creative, and educational experiences. 
              We inspire curiosity, confidence, and joy in every child.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-bold mb-4 ${funFont}`}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-[#FDE047]/80 hover:text-[#FDE047] transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-bold mb-4 ${funFont}`}>Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-[#A78BFA] border border-white/60 p-3 flex items-center justify-center shadow-lg hover:bg-[#FDE047] hover:border-[#45C8F0] transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#FDE047]/20 text-center"
        >
          <p className={`text-[#FDE047] text-sm ${funFont} mb-2`}>
            © {new Date().getFullYear()} Mommyology. All rights reserved.
          </p>
          <p className="text-[#FDE047]/70 text-xs">
            Making nature fun for kids since 2024
          </p>
        </motion.div>
      </div>

      {/* Playful footer bubbles */}
      <div className="absolute -top-4 left-8 w-10 h-10 bg-[#FDE047]/60 rounded-full blur-xl animate-bounce-slow z-0" />
      <div className="absolute -bottom-4 right-16 w-14 h-14 bg-[#45C8F0]/40 rounded-full blur-xl animate-bounce-slower z-0" />
      <div className="absolute top-2 right-4 w-6 h-6 bg-[#6B5AA2]/70 rounded-full blur-md animate-bounce-fast z-0" />
    </footer>
  );
};

export default Footer;
