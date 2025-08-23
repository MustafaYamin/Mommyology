'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/Images/flames-and-forts/fnf1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B5AA2]/90 via-[#6B5AA2]/80 to-[#6B5AA2]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <Image 
                src="/Images/logo.jpg" 
                alt="Mommyology Logo" 
                width={280} 
                height={90} 
                className="rounded-3xl bg-[#FDE047] p-4 border-4 border-[#45C8F0] shadow-2xl transform hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FDE047] rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#45C8F0] rounded-full animate-pulse delay-1000" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-[#FDE047] mb-6 leading-tight font-['Comic_Sans_MS','Comic_Sans','cursive'] drop-shadow-2xl"
          >
            Nature-based Fun for Kids!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Events, adventures, and learning in nature for every child. Discover, play, and grow with Mommyology!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="#contact" 
              className="group relative px-8 py-4 bg-gradient-to-r from-[#45C8F0] to-[#45C8F0]/90 text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#FDE047] hover:bg-[#FDE047] hover:text-[#6B5AA2]"
            >
              <span className="relative z-10">Join Us Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FDE047] to-[#FDE047]/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              href="#about" 
              className="px-8 py-4 bg-transparent text-[#FDE047] font-bold text-xl rounded-full border-2 border-[#FDE047] hover:bg-[#FDE047] hover:text-[#6B5AA2] transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-[#FDE047]/60 rounded-full blur-xl animate-bounce-slow" />
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-[#45C8F0]/40 rounded-full blur-xl animate-bounce-slower" />
      <div className="absolute top-1/2 left-5 w-6 h-6 bg-[#6B5AA2]/70 rounded-full blur-md animate-bounce-fast" />
    </section>
  );
};

export default HeroSection; 