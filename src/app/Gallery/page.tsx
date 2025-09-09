'use client';
import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamic import for better code splitting
const PastEventGalleryCard = dynamic(() => import("../components/PastEventGalleryCard"), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg aspect-square" />
});

// Memoized event data to prevent recreation on re-renders
const eventData = [
  {
    id: 'neon-party',
    title: "Neon Party",
    images: [
      "/Images/neonparty/np1.jpg",
      "/Images/neonparty/np2.jpg",
      "/Images/neonparty/np3.jpg",
      "/Images/neonparty/np4.jpg",
      "/Images/neonparty/np5.jpg",
    ],
  },
  {
    id: 'funtopia',
    title: "Funtopia",
    images: [
      "/Images/funtopia/funtopia1.jpg",
      "/Images/funtopia/funtopia2.jpg",
      "/Images/funtopia/funtopia3.jpg",
      "/Images/funtopia/funtopia4.jpg",
    ],
  },
  {
    id: 'farmtastic',
    title: "Farmtastic",
    images: [
      "/Images/farmtastic/farm1.jpg",
      "/Images/farmtastic/farm2.jpg",
      "/Images/farmtastic/farm3.jpg",
      "/Images/farmtastic/farm4.jpg",
    ],
  },
  {
    id: 'flames-and-fortes',
    title: "Flames and Fortes",
    images: [
      "/Images/flames-and-forts/fnf1.jpg",
      "/Images/flames-and-forts/fnf2.jpg",
      "/Images/flames-and-forts/fnf3.jpg",
      "/Images/flames-and-forts/fnf4.jpg",
    ],
  },
  {
    id: 'fishing',
    title: "Fishing",
    images: [
      "/Images/fishing/fishing1.jpg",
      "/Images/fishing/fishing2.jpg",
      "/Images/fishing/fishing3.jpg",
      "/Images/fishing/fishing4.jpg",
      "/Images/fishing/fishing5.jpg",
    ],
  },
  {
    id: 'messy-playday',
    title: "Messy Playday",
    images: [
      "/Images/messy-play-day/mpd1.jpg",
      "/Images/messy-play-day/mpd2.jpg",
      "/Images/messy-play-day/mpd3.jpg",
      "/Images/messy-play-day/mpd4.jpg",
      "/Images/messy-play-day/mpd5.jpg",
    ],
  },
  {
    id: 'world-book-day',
    title: "World Book Day",
    images: [
      "/Images/world-book-day/wbd1.jpg",
      "/Images/world-book-day/wbd2.jpg",
      "/Images/world-book-day/wbd3.jpg",
      "/Images/world-book-day/wbd4.jpg",
    ],
  },
  {
    id: 'spring-fling',
    title: "Spring Fling",
    images: [
      "/Images/spring-fling/springfling1.jpg",
      "/Images/spring-fling/springfling2.jpg",
      "/Images/spring-fling/springfling3.jpg",
      "/Images/spring-fling/springfling4.jpg",
    ],
  },
  {
    id: 'mothers-day',
    title: "Mothers Day",
    images: [
      "/Images/Mothers-day/md1.jpg",
      "/Images/Mothers-day/md2.jpg",
      "/Images/Mothers-day/md3.jpg",
      "/Images/Mothers-day/md4.jpg",
    ],
  },
  {
    id: 'mangroves',
    title: "Mangroves",
    images: [
      "/Images/Mangroves-and-team/mangrove1.jpg",
      "/Images/Mangroves-and-team/mangrove2.jpg",
      "/Images/Mangroves-and-team/mangrove3.jpg",
      "/Images/Mangroves-and-team/mangrove4.jpg",
      "/Images/Mangroves-and-team/mangrove5.jpg",
    ],
  },
];

// Memoized header component
const GalleryHeader = memo(() => (
  <motion.div
    className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 mb-4 sm:mb-6"
    >
      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
      <span className="text-pink-600 font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider">
        Memory Lane
      </span>
      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
    </motion.div>
    
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
      Past Events Gallery
    </h1>
    
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
      Relive the joy and excitement from our previous events. Each celebration created unforgettable memories for children and families.
    </p>
  </motion.div>
));

GalleryHeader.displayName = 'GalleryHeader';

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      // ease: [0.25, 0.25, 0, 1], // Custom easing for smoother animation
    }
  }
};

export default function GalleryPage() {
  // Memoize the event cards to prevent unnecessary re-renders
  const eventCards = useMemo(() => 
    eventData.map((event) => (
      <motion.div
        key={event.id}
        variants={itemVariants}
        className="group h-full"
      >
        <PastEventGalleryCard
          title={event.title}
          images={event.images}
        />
      </motion.div>
    )), []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <motion.div
        id="past-events"
        className="container mx-auto py-8 sm:py-12 lg:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <GalleryHeader />

        {/* Optimized Events Grid */}
        <motion.div
          className="px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced responsive grid with better breakpoints */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {eventCards}
          </div>
        </motion.div>

        {/* Enhanced call-to-action section */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Ready to Create New Memories?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Join us for our upcoming events and be part of the next amazing gallery!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/UpcomingEvents'}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Upcoming Events
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}