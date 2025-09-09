"use client";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamic import for code splitting
const UpcomingEventCard = dynamic(() => import("../components/UpcomingEventCard"), {
  loading: () => (
    <div className="animate-pulse bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-96 shadow-lg" />
  )
});

// Static event data
const eventData = [
  {
    id: "mangroves-explorer",
    title: "Mangroves Island Explorer",
    image: "/Images/upcomings/mangroves_b.jpg",
    bgImage: "/Images/upcomings/mangroves_p.jpg",
    time: "14th September",
    cost: "Rs.1999/- Per Head",
    category: "Adventure",
    description: "Explore the magical world of mangroves",
  },
  {
    id: "claws-and-paws",
    title: "Claws and Paws",
    image: "/Images/upcomings/clawsnpaws_b.jpg",
    bgImage: "/Images/upcomings/clawsnpaws_p.jpg",
    time: "28th Sep, 4:00 PM - 6:00 PM",
    cost: "Rs.1999/- Per Kid",
    category: "Animals",
    description: "Meet and interact with adorable animals",
  },
  {
    id: "messy-play",
    title: "Messy Play Adventure",
    image: "/Images/upcomings/messyplay.jpg",
    bgImage: "/Images/upcomings/messyplay.jpg",
    time: "21st Sep, 5:00 PM - 6:30 PM",
    cost: "Rs.1499/- Per Kid",
    category: "Creative",
    description: "Get messy and have unlimited fun",
  },
  {
    id: "pottery-workshop",
    title: "Pottery Workshop",
    image: "/Images/upcomings/pottery.jpg",
    bgImage: "/Images/upcomings/pottery.jpg",
    time: "21st Sep, 4:00 PM - 5:00 PM",
    cost: "Rs.1199/- Per Kid",
    category: "Arts & Crafts",
    description: "Create beautiful pottery masterpieces",
  }
];

// Floating elements background
const FloatingElements = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Geometric shapes */}
    <motion.div
      animate={{
        y: [0, -30, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20"
    />
    <motion.div
      animate={{
        y: [0, 40, 0],
        x: [0, 20, 0],
        rotate: [0, -180, -360],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute top-1/3 right-20 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 transform rotate-45 opacity-20"
    />
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, -15, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute bottom-32 left-1/4 w-12 h-12 border-4 border-yellow-400/20 rounded-full"
    />
    <motion.div
      animate={{
        y: [0, 25, 0],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute bottom-20 right-1/3 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 opacity-20"
      style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
    />
  </div>
));

FloatingElements.displayName = 'FloatingElements';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

// const cardVariants = {
//   hidden: { 
//     opacity: 0, 
//     y: 50,
//     scale: 0.9,
//     rotateX: 15,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotateX: 0,
//     transition: {
//       duration: 0.8,
//     //   ease: [0.25, 0.25, 0, 1],
//     }
//   }
// };

const UpcomingEvents = () => {
  // Memoize event cards
  const eventCards = useMemo(() =>
    eventData.map((event) => (
      <motion.div
        key={event.id}
       initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
        // className="h-full perspective-1000"
      >
        <UpcomingEventCard 
          title={event.title}
          image={event.image}
          bgImage={event.bgImage}
          time={event.time}
          cost={event.cost}
        />
      </motion.div>
    )), []
  );

  const router = useRouter();
  const handleBookNowClick = () => {
    router.push('/Contact');
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full mb-6 border border-pink-200/50 shadow-sm"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-ping opacity-30" />
              </div>
              <span className="text-purple-700 font-semibold text-sm tracking-wide uppercase">
                Upcoming Adventures
              </span>
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-30" />
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                Amazing
              </span>
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent block">
                Events Await
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Join us for unforgettable experiences filled with joy, learning, and endless fun. 
              <br className="hidden sm:block" />
              Every event is crafted to create magical memories that last a lifetime.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center"
            >
              {[
                { number: "500+", label: "Happy Kids" },
                { number: "500+", label: "Events Hosted" },
                { number: "100%", label: "Fun Guaranteed" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1 }}
                  className="group cursor-default"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Choose Your
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-3">
                  Adventure
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </motion.div>

            {/* Cards Grid - 3 columns responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {eventCards}
            </div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20 sm:mt-24 lg:mt-32"
          >
            <div className="relative bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-500/10 rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 border border-purple-200/30 backdrop-blur-sm">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-20"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20"
              />

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                Ready to Join the
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-3">
                  Fun?
                </span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                Don&apos;t miss out on these incredible experiences. Book your spot today and give your child memories they&apos;ll treasure forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px -12px rgba(139, 69, 193, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </motion.button>
               
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;