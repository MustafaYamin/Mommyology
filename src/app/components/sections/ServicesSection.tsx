'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  // Mommyology activities/services
  const services = [
    {
      icon: "📖",
      title: "Storytelling Circles",
      description: "Interactive storytelling sessions where children dive into magical tales, sparking imagination and language skills.",
      color: "from-[#FDE047] to-[#FDE047]/80",
      image: "https://placehold.co/400x250?text=Storytelling+Circles",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      icon: "🏺",
      title: "Pottery & Messy Play",
      description: "Clay and sensory play sessions where kids explore creativity, self-expression, and hands-on learning.",
      color: "from-[#45C8F0] to-[#45C8F0]/80",
      image: "https://placehold.co/400x250?text=Pottery+%26+Messy+Play",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      icon: "🌿",
      title: "Nature Adventures",
      description: "Camping, fishing, and mangrove explorations that connect children to the natural world with curiosity and joy.",
      color: "from-[#6B5AA2] to-[#6B5AA2]/80",
      image: "https://placehold.co/400x250?text=Nature+Adventures",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      icon: "🐇",
      title: "Animal Interactions",
      description: "Gentle encounters with rabbits, birds, and more to nurture empathy, care, and responsibility toward animals.",
      color: "from-[#45C8F0] to-[#FDE047]",
      image: "https://placehold.co/400x250?text=Animal+Interactions",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      icon: "🌻",
      title: "Gardening Fun",
      description: "Kids plant, water, and grow their own little gardens, discovering patience and the joy of caring for the earth.",
      color: "from-[#FDE047] to-[#6B5AA2]",
      image: "https://placehold.co/400x250?text=Gardening+Fun",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      icon: "💡",
      title: "Kidpreneur Events",
      description: "Children become little entrepreneurs by showcasing their talents, crafts, and ideas in fun markets and events.",
      color: "from-[#6B5AA2] to-[#45C8F0]",
      image: "https://placehold.co/400x250?text=Kidpreneur+Events",
      video: "https://www.w3schools.com/html/movie.mp4"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-[#FFFDF5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B5AA2] mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            What We Do
          </h2>
          <p className="text-xl text-[#6B5AA2]/80 max-w-4xl mx-auto leading-relaxed">
            At Mommyology, we bring families and children together through joyful,
            nature-based and creative experiences. From storytelling and messy play 
            to gardening, camping, and kidpreneurship — we nurture curiosity, creativity, 
            and community beyond screens.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-[#6B5AA2] overflow-hidden cursor-pointer"
              onClick={() => {
                if (!modalOpen) {
                  setActiveVideo(service.video);
                  setActiveTitle(service.title);
                  setModalOpen(true);
                }
              }}
            >
              {/* Gradient hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-center">
                {/* Service image */}
                <div className="mb-3 sm:mb-4 w-full flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={280}
                    height={120}
                    className="rounded-xl w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] h-20 sm:h-24 md:h-[120px] object-cover border-2 sm:border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Icon */}
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B5AA2] mb-3 sm:mb-4 text-center font-['Comic_Sans_MS','Comic_Sans','cursive'] group-hover:text-[#45C8F0] transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-sm sm:text-base text-[#6B5AA2]/80 text-center leading-relaxed group-hover:text-[#6B5AA2] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              {/* Decorative corner dots */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-[#FDE047] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#45C8F0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setModalOpen(false)}>
            <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-xl md:max-w-2xl relative flex flex-col items-center max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {/* Close */}
              <button className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-3xl text-[#6B5AA2] hover:text-[#45C8F0]" onClick={() => setModalOpen(false)} aria-label="Close">&times;</button>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B5AA2] mb-3 sm:mb-4 text-center">{activeTitle}</h4>
              <video
                src={activeVideo || ''}
                controls
                autoPlay
                className="rounded-xl w-full max-h-48 sm:max-h-64 md:max-h-[400px] object-contain mb-3 sm:mb-4"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
