import Image from 'next/image';
import Link from 'next/link';

const funFont = "font-['Comic_Sans_MS','Comic_Sans','cursive'] font-extrabold tracking-wide";

const navLinks = [
  { href: '#who-we-are', label: 'Who We Are' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#contact', label: 'Contact' },
  { href: '#past-events', label: 'Past Events' },
];

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-[#6B5AA2] px-4 py-2 shadow-lg relative overflow-visible border-b-4 border-[#FDE047]">
      <div className="flex items-center gap-3 z-10">
        <Link href="/">
          <Image src="/Images/logo.jpg" alt="Mommyology Logo" width={160} height={48} priority className="rounded-xl bg-[#FDE047] p-1 shadow-lg border-2 border-[#45C8F0] hover:scale-105 transition-transform" />
        </Link>
      </div>
      <ul className="flex gap-2 md:gap-4 items-center z-10">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`px-3 py-1.5 rounded-full bg-white/10 text-white border-2 border-[#FDE047] shadow text-base md:text-lg ${funFont} hover:bg-[#FDE047] hover:text-[#6B5AA2] hover:border-[#45C8F0] transition-all duration-200`}
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
