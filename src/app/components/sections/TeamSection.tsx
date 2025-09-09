'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  // bio: string;
  socials?: string;
}

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Zarlish Shehroz",
      role: "Founder & CEO",
      image: "/Images/team/zarlish.jpg",
      // bio: "Passionate educator with 15+ years of experience in child development and nature-based learning.",
      socials: "https://instagram.com/sarahjohnson"
    },
    {
      id: 2,
      name: "Wajeeha Ali",
      role: "Team Lead",
      image: "/Images/team/wajeeha.jpg",
      // bio: "Environmental educator specializing in outdoor activities and sustainable practices for children.",
      socials: "https://instagram.com/michaelchen"
    },
    {
      id: 3,
      name: "Asadullah",
      role: "Photographer",
      image: "/Images/team/asad.jpg",
      // bio: "Artist and educator who believes in the power of creative expression and messy play for learning.",
      socials: "https://instagram.com/emmarodriguez"
    },
    {
      id: 4,
      name: "Umaima Ali",
      role: "Team Member",
      image: "/Images/team/umaima.jpg",
      // bio: "Adventure guide and camping expert who loves introducing children to the wonders of nature.",
      socials: "https://instagram.com/davidthompson"
    },
    {
      id: 5,
      name: "Maleeha Ali",
      role: "Social Media Manager",
      image: "/Images/team/maleeha.jpg",
      // bio: "Child psychologist with expertise in early childhood development and nature-based therapy.",
      socials: "https://instagram.com/lisawang"
    },
    {
      id: 6,
      name: "Hooriya Ali",
      role: "Team Member",
      image: "/Images/team/hooriya.jpg",
      // bio: "Community builder who connects families with nature and creates lasting partnerships.",
      socials: "https://instagram.com/jameswilson"
    },
    {
      id: 7,
      name: "Mustafa Khilji",
      role: "Team Lead",
      image: "/Images/team/mustafa.jpg",
      // bio: "Community builder who connects families with nature and creates lasting partnerships.",
      socials: "https://instagram.com/jameswilson"
    },
    {
      id: 8,
      name: "Marium Yamin",
      role: "Team Member",
      image: "/Images/team/marium.jpg",
      // bio: "Community builder who connects families with nature and creates lasting partnerships.",
      socials: "https://instagram.com/jameswilson"
    },
    // {
    //   id: 9,
    //   name: "Mustafa Khilji",
    //   role: "Team Member",
    //   image: "/Images/team/mustafa.jpg",
    //   // bio: "Community builder who connects families with nature and creates lasting partnerships.",
    //   socials: "https://instagram.com/jameswilson"
    // },
  ];

  // const handleSocialClick = (url: string) => {
  //   if (url) {
  //     window.open(url, '_blank', 'noopener,noreferrer');
  //   }
  // };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
        
      }
    }
  };

  return (
    <section id="team" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-600 font-medium text-sm sm:text-base uppercase tracking-wider">
              Our Amazing Team
            </span>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            Meet the Dreamers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of educators, artists, and nature enthusiasts are dedicated to 
            <br className="hidden sm:block" />
            creating meaningful experiences that connect children with the natural world.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {(showAll ? teamMembers : teamMembers.slice(0, 3)).map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
              // onClick={() => handleSocialClick(member.socials)}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden min-h-[480px] flex flex-col">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Member Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl h-64 w-full flex-shrink-0">
                  <motion.div
                    animate={{ scale: hoveredMember === member.id ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="object-cover w-full h-full"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Social media indicator */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredMember === member.id ? 1 : 0,
                        opacity: hoveredMember === member.id ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      📱
                    </motion.div>
                  </motion.div>
                </div>
                {/* Member Info */}
                <div className="relative z-10 text-center">
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-gray-800 mb-2 font-['Comic_Sans_MS','Comic_Sans','cursive']"
                    animate={{ color: hoveredMember === member.id ? "#7c3aed" : "#1f2937" }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-3">
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-200"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* View All Button */}
        {!showAll && teamMembers.length > 3 && (
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All
            </button>
          </div>
        )}
       
      </div>
    </section>
  );
};

export default TeamSection;