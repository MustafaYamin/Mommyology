'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  '/partners/partner1.png',
  '/partners/partner2.png',
  '/partners/partner3.png',
  '/partners/partner4.png',
  '/partners/partner5.png',
  '/partners/partner6.png',
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-[#F8F6FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B5AA2] mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-[#6B5AA2]/80 max-w-2xl mx-auto">
            We collaborate with amazing organizations to bring the best experiences to your children
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8 min-w-max">
            {partners.concat(partners).map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-24 w-40 bg-white rounded-2xl shadow-lg border-2 border-[#6B5AA2]/20 p-4 hover:shadow-xl hover:border-[#45C8F0] transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#FDE047]/10 to-[#45C8F0]/10 rounded-xl flex items-center justify-center">
                  <span className="text-[#6B5AA2] font-semibold text-sm">
                    Partner {idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnersSection; 