'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface PastEventGalleryCardProps {
  title: string;
  images: string[];
}

const PastEventGalleryCard: React.FC<PastEventGalleryCardProps> = ({ title, images }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleCardClick = useCallback(() => setOpen(true), []);
  
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
    setCurrent(0);
  }, []);
  
  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);
  
  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  }, [handleCardClick]);

  return (
    <>
      <motion.div
        className="relative group cursor-pointer h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View ${title} gallery`}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          duration: 0.3 
        }}
      >
        {/* Card Container */}
        <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 ease-out bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Background Image */}
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
            quality={85}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-border animate-pulse" 
                 style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
            
            {/* Click indicator */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>

          {/* Image Count Badge */}
          {images.length > 1 && (
            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-150">
              {images.length} photos
            </div>
          )}

          {/* Content Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
            <motion.div
              initial={{ y: 10, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              className="transform group-hover:-translate-y-1 transition-transform duration-300"
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg mb-2 leading-tight">
                {title}
              </h4>
              
              {/* Animated underline */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500 ease-out" />
              
              {/* View more text */}
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 mt-2">
                Click to view gallery →
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-3xl relative flex flex-col items-center max-h-[95vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-red-100 rounded-full text-gray-600 hover:text-red-500 transition-colors duration-200 z-10"
                onClick={handleClose}
                aria-label="Close gallery"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Image Container */}
              <div className="relative w-full flex items-center justify-center mb-6">
                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1, x: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-200"
                      onClick={handlePrev}
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-200"
                      onClick={handleNext}
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}

                {/* Main Image */}
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Image
                    src={images[current]}
                    alt={`${title} - Image ${current + 1}`}
                    width={800}
                    height={600}
                    className="rounded-2xl w-full max-h-60 sm:max-h-80 md:max-h-[500px] lg:max-h-[600px] object-contain shadow-lg"
                    priority
                    quality={90}
                  />
                </motion.div>
              </div>

              {/* Title */}
              <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 text-center leading-tight">
                {title}
              </h4>

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className="flex gap-2 mb-4">
                  {images.map((_, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrent(idx);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === current 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <p className="text-gray-500 text-sm">
                  {current + 1} of {images.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PastEventGalleryCard;