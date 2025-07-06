'use client'
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      icon: "🌱",
      title: "Nature Connection",
      description: "We help children develop a deep connection with the natural world through hands-on experiences."
    },
    {
      icon: "🎨",
      title: "Creative Learning",
      description: "Our programs combine education with creativity, making learning fun and memorable."
    },
    {
      icon: "🤝",
      title: "Community Building",
      description: "We create safe spaces where children can build friendships and develop social skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#F8F6FF] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            We are passionate about connecting children with nature through fun, creative, and educational events. 
            Our team is dedicated to nurturing curiosity, confidence, and joy in every child.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#FDE047]/20 hover:border-[#45C8F0]"
            >
              <div className="text-6xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-[#6B5AA2] mb-4 text-center font-['Comic_Sans_MS','Comic_Sans','cursive']">
                {feature.title}
              </h3>
              <p className="text-[#6B5AA2]/80 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#FDE047]/20 to-[#45C8F0]/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#6B5AA2] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">
              Our Mission
            </h3>
            <p className="text-lg text-[#6B5AA2]/80 leading-relaxed">
              To inspire the next generation of nature lovers, creative thinkers, and confident individuals 
              through engaging outdoor experiences that spark curiosity and foster a lifelong love for learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 