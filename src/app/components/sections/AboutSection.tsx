'use client'
import { motion } from 'framer-motion';
import React from 'react';
import ActivityCardWithModal from './ActivityCardWithModal';

const AboutSection = () => {
  // Activities with images and separate modalDescription
  const activities = [
    {
      icon: "📖",
      title: "Storytelling Circles",
      description: "Children gather around for magical storytelling sessions that spark imagination, language, and emotional growth.",
      modalDescription: "In our Storytelling Circles, children are immersed in magical tales, participate in interactive story-building, and develop language and emotional skills in a nurturing environment.",
      images: [
        "/Images/Mangroves-and-team/mangrove1.jpg"
      ]
    },
    {
      icon: "🏺",
      title: "Pottery & Messy Play",
      description: "Hands-on clay and messy art sessions that encourage creativity, sensory exploration, and self-expression.",
      modalDescription: "Pottery & Messy Play sessions let children explore textures, shapes, and colors, fostering creativity and sensory development through hands-on activities.",
      images: [
        "/Images/Mangroves-and-team/mangrove3.jpg"
      ]
    },
    {
      icon: "🌿",
      title: "Nature Adventures",
      description: "From camping to mangrove explorations, children learn to love and respect the natural world.",
      modalDescription: "Our Nature Adventures include camping, hiking, and mangrove explorations, teaching children about ecosystems, teamwork, and environmental stewardship.",
      images: [
        "/Images/Mangroves-and-team/mangrove4.jpg"
      ]
    },
    {
      icon: "🐇",
      title: "Animal Interactions",
      description: "Gentle encounters with animals teach compassion, responsibility, and kindness toward all living beings.",
      modalDescription: "Animal Interactions provide safe, gentle encounters with animals, helping children build empathy, responsibility, and a love for all living beings.",
      images: [
        "/Images/Mangroves-and-team/mangrove5.jpg"
      ]
    },
    {
      icon: "🌻",
      title: "Gardening Fun",
      description: "Kids plant seeds, nurture growth, and discover the joy of caring for our earth.",
      modalDescription: "Gardening Fun lets kids plant, water, and watch their gardens grow, learning about nature, patience, and sustainability in a hands-on way.",
      images: [
        "/Images/Mangroves-and-team/mangrove1.jpg"
      ]
    },
    {
      icon: "💡",
      title: "Kidpreneur Events",
      description: "Encouraging children to innovate and showcase their talents through kid-led projects and markets.",
      modalDescription: "Kidpreneur Events inspire children to create, market, and sell their own projects, building confidence, creativity, and entrepreneurial skills.",
      images: [
        "/Images/Mangroves-and-team/mangrove2.jpg"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#FFFDF5] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B5AA2] mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            Who We Are
          </h2>
          <p className="text-xl text-[#6B5AA2]/80 max-w-4xl mx-auto leading-relaxed">
            At Mommyology, we design hands-on, nature-based experiences that help children
            disconnect from screens and reconnect with the real world. 
            From storytelling and pottery to gardening, camping, and kidpreneurship — 
            we nurture curiosity, creativity, and confidence in every child.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCardWithModal
              key={index}
              activity={activity}
              index={index}
            />
          ))}
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#FDE047]/20 to-[#6B5AA2]/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#6B5AA2] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">
              Our Mission
            </h3>
            <p className="text-lg text-[#6B5AA2]/80 leading-relaxed">
              We create playful, nature-inspired experiences where children and families 
              can explore, connect, and grow together. Through outdoor adventures, 
              storytelling, and creative play, we nurture kindness, confidence, and 
              curiosity — inspiring a lifelong love for learning and nature.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
