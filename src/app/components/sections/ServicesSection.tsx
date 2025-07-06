'use client'
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: "🌿",
      title: "Nature Walks",
      description: "Guided exploration of local parks and natural areas, teaching children about local flora and fauna.",
      color: "from-[#45C8F0] to-[#45C8F0]/80"
    },
    {
      icon: "🎨",
      title: "Art Workshops",
      description: "Creative sessions using natural materials, encouraging artistic expression and environmental awareness.",
      color: "from-[#FDE047] to-[#FDE047]/80"
    },
    {
      icon: "🔬",
      title: "Science Experiments",
      description: "Hands-on experiments that make science fun and accessible, sparking curiosity about the natural world.",
      color: "from-[#6B5AA2] to-[#6B5AA2]/80"
    },
    {
      icon: "🎮",
      title: "Outdoor Games",
      description: "Active, nature-based games that promote physical fitness and teamwork in natural settings.",
      color: "from-[#45C8F0] to-[#FDE047]"
    },
    {
      icon: "📚",
      title: "Storytelling",
      description: "Interactive storytelling sessions that bring nature stories to life and foster imagination.",
      color: "from-[#FDE047] to-[#6B5AA2]"
    },
    {
      icon: "🌱",
      title: "Gardening",
      description: "Educational gardening activities that teach children about plant life cycles and sustainability.",
      color: "from-[#6B5AA2] to-[#45C8F0]"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-[#F8F6FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#45C8F0] mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            What We Do
          </h2>
          <p className="text-xl text-[#6B5AA2]/80 max-w-4xl mx-auto leading-relaxed">
            From nature walks and art workshops to science experiments and outdoor games, 
            we create memorable experiences that inspire kids to explore and care for the world around them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-[#45C8F0] overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#6B5AA2] mb-4 text-center font-['Comic_Sans_MS','Comic_Sans','cursive'] group-hover:text-[#45C8F0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6B5AA2]/80 text-center leading-relaxed group-hover:text-[#6B5AA2] transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#FDE047] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#45C8F0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
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
          <div className="bg-gradient-to-r from-[#FDE047]/20 via-[#45C8F0]/20 to-[#6B5AA2]/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#6B5AA2] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">
              Custom Programs
            </h3>
            <p className="text-lg text-[#6B5AA2]/80 leading-relaxed mb-6">
              We also offer customized programs for schools, community groups, and special events. 
              Let us create a unique experience tailored to your needs!
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#45C8F0] to-[#45C8F0]/90 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#FDE047] hover:bg-[#FDE047] hover:text-[#6B5AA2]">
              Learn More About Programs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 