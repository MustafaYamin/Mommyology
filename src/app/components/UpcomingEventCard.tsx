import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface UpcomingEventCardProps {
  title: string;
  image: string;
  bgImage: string;
  time: string;
  cost: string;
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ 
  title, 
  bgImage, 
  image, 
  time, 
  cost 
}) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => setOpen(true);
  
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
  };
  
  const handleBookClick = () => {
    setOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Card */}
      <motion.div
        className="relative group cursor-pointer w-full max-w-sm mx-auto mt-2"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm">
          {/* Background Image */}
          <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
            <Image
              src={bgImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Animated sparkles */}
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 text-yellow-400"
              >
                ✨
              </motion.div>
            </div>
            
            {/* Status badge */}
            <div className="absolute top-4 left-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                🎉 Upcoming
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6">
            {/* Title */}
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive'] leading-tight">
              {title}
            </h4>
            
            {/* Event Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-sm">
                  🕐
                </div>
                <span className="text-gray-600 text-sm font-medium flex-1">{time}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-sm">
                  💰
                </div>
                <span className="text-gray-800 text-sm font-semibold flex-1">{cost}</span>
              </div>
            </div>

            {/* View Details Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Details
                <motion.span
                  animate={isHovered ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 shadow-lg border border-gray-200 hover:border-red-200 transition-all duration-200"
                onClick={handleClose}
                aria-label="Close"
              >
                ✕
              </motion.button>

              {/* Modal Header Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image 
                  src={image} 
                  alt={title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating title */}
                <div className="absolute bottom-6 left-6 right-16">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 font-['Comic_Sans_MS','Comic_Sans','cursive'] drop-shadow-lg">
                    {title}
                  </h4>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Event Details Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-lg">
                        🕐
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 text-sm">Event Time</h5>
                        <p className="text-blue-600 font-medium text-sm">{time}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-2xl border border-yellow-100"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-lg">
                        💰
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 text-sm">Event Cost</h5>
                        <p className="text-orange-600 font-bold text-sm">{cost}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Features */}
                {/* <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl mb-8 border border-purple-100"
                >
                  <h5 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-purple-500">🎉</span>
                    What's Included
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      All materials provided
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Expert guidance
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Fun activities
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Safe environment
                    </div>
                  </div>
                </motion.div> */}

                {/* Book Button */}
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  onClick={handleBookClick}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-2xl">🎯</span>
                    Book Your Slot Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>

                {/* Additional Info */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center text-gray-500 text-sm mt-4"
                >
                  Limited spots available! Book early to secure your place.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UpcomingEventCard;