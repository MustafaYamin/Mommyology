import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ActivityData {
  icon: string;
  title: string;
  description: string;
  modalDescription: string;
  images: string[];
}

interface ActivityCardWithModalProps {
  activity: ActivityData;
  index: number;
}

const ActivityCardWithModal: React.FC<ActivityCardWithModalProps> = ({ activity, index }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Activity Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#FDE047]/20 hover:border-[#6B5AA2]/40 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 text-center">{activity.icon}</div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B5AA2] mb-3 sm:mb-4 text-center font-['Comic_Sans_MS','Comic_Sans','cursive']">
          {activity.title}
        </h3>
        <p className="text-sm sm:text-base text-[#6B5AA2]/80 text-center leading-relaxed">
          {activity.description}
        </p>
      </motion.div>

      {/* Modal Popup */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 w-full max-w-sm sm:max-w-4xl md:max-w-5xl relative flex flex-col md:flex-row items-stretch max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button 
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-3xl text-[#6B5AA2] hover:text-[#45C8F0]" 
              onClick={() => setModalOpen(false)} 
              aria-label="Close"
            >
              &times;
            </button>
            
            {/* Images on the left */}
            <div className="md:w-1/2 w-full flex flex-col gap-3 sm:gap-4 items-center justify-center mb-4 sm:mb-6 md:mb-0 md:mr-4">
              {activity.images.map((img: string, idx: number) => (
                <Image 
                  key={idx} 
                  src={img} 
                  alt={activity.title + ' image'} 
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover max-h-48 sm:max-h-64 md:max-h-80" 
                />
              ))}
            </div>
            
            {/* Text on the right */}
            <div className="md:w-1/2 w-full flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6B5AA2] mb-3 sm:mb-4 text-center md:text-left font-['Comic_Sans_MS','Comic_Sans','cursive']">
                {activity.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#6B5AA2]/80 leading-relaxed text-center md:text-left">
                {activity.modalDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityCardWithModal;
