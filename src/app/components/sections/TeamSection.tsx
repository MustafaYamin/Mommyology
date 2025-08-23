'use client'
import { motion } from 'framer-motion';
import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: string; // Just one social link
}

const TeamSection = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/Images/Mangroves-and-team/team1.jpg",
      bio: "Passionate educator with 15+ years of experience in child development and nature-based learning.",
      socials: "https://instagram.com/sarahjohnson"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Programs",
      image: "/Images/Mangroves-and-team/team2.jpg",
      bio: "Environmental educator specializing in outdoor activities and sustainable practices for children.",
      socials: "https://instagram.com/michaelchen"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Creative Director",
      image: "./images/mangroves-and-team/mangrove1.jpg",
      bio: "Artist and educator who believes in the power of creative expression and messy play for learning.",
      socials: "https://instagram.com/emmarodriguez"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Outdoor Activities Coordinator",
      image: "/Images/Mangroves-and-team/team4.jpg",
      bio: "Adventure guide and camping expert who loves introducing children to the wonders of nature.",
      socials: "https://instagram.com/davidthompson"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Child Development Specialist",
      image: "/Images/Mangroves-and-team/team5.jpg",
      bio: "Child psychologist with expertise in early childhood development and nature-based therapy.",
      socials: "https://instagram.com/lisawang"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Community Outreach",
      image: "/Images/Mangroves-and-team/team6.jpg",
      bio: "Community builder who connects families with nature and creates lasting partnerships.",
      socials: "https://instagram.com/jameswilson"
    }
  ];

  const handleSocialClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-[#F8F6FF] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B5AA2] mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            Meet Our Team
          </h2>
          <p className="text-xl text-[#6B5AA2]/80 max-w-4xl mx-auto leading-relaxed">
            Our passionate team of educators, artists, and nature enthusiasts are dedicated to 
            creating meaningful experiences that connect children with the natural world.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg cursor-pointer"
              onClick={() => handleSocialClick(member.socials)}
            >
              {/* Member Image */}
              <div className="relative mb-3 sm:mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>

              {/* Member Info */}
              <div className="text-center mb-2 sm:mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#6B5AA2] mb-1 sm:mb-2 font-['Comic_Sans_MS','Comic_Sans','cursive']">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[#45C8F0] font-semibold mb-1 sm:mb-2">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-[#6B5AA2]/80 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          {/* <div className="bg-gradient-to-r from-[#45C8F0]/20 to-[#FDE047]/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#6B5AA2] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">
              Join Our Team
            </h3>
            <p className="text-lg text-[#6B5AA2]/80 leading-relaxed mb-6">
              We're always looking for passionate individuals who share our vision of connecting children with nature. 
              If you'd like to be part of our mission, we'd love to hear from you!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#45C8F0] to-[#FDE047] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#6B5AA2] hover:bg-[#6B5AA2] hover:text-white">
              Contact Us
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
