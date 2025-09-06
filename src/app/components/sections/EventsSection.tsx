"use client";
import { motion } from "framer-motion";
import UpcomingEventCard from "../UpcomingEventCard";
import PastEventGalleryCard from "../PastEventGalleryCard";

const EventsSection = () => {
  return (
    <section 
      id="events" 
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            Fun Events & Adventures
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Creating magical memories through exciting activities and celebrations
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          id="upcoming-events"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-sm border border-white/10">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 font-medium text-sm sm:text-base uppercase tracking-wider">
                  Coming Soon
                </span>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 font-['Comic_Sans_MS','Comic_Sans','cursive']">
                Upcoming Events
              </h2>
              <p className="text-purple-100 text-sm sm:text-base max-w-md mx-auto">
                Don&apos;t miss out on these amazing upcoming adventures!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl  mx-auto">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <UpcomingEventCard
                  title="Mangroves Island Explorer"
                  image="/Images/upcomings/mangroves_b.jpg"
                  bgImage="/Images/upcomings/mangroves_p.jpg"
                  time="14th September"
                  cost="Rs.1999/- Per Head"
                />
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <UpcomingEventCard
                  title="Claws and Paws"
                  image="/Images/upcomings/clawsnpaws_b.jpg"
                  bgImage="/Images/upcomings/clawsnpaws_p.jpg"
                  time="28th Sep, 4:00 PM - 6:00 PM"
                  cost="Rs.1999/- Per Kid"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Past Events */}
        <motion.div
          id="past-events"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Past Events Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-pink-600 font-medium text-sm sm:text-base uppercase tracking-wider">
                Memory Lane
              </span>
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
              Past Events Gallery
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Relive the joy and excitement from our previous events. Each celebration created 
              <br className="hidden sm:block" />
              unforgettable memories for children and families.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Neon Party",
                images: [
                  "/Images/neonparty/np1.jpg",
                  "/Images/neonparty/np2.jpg",
                  "/Images/neonparty/np3.jpg",
                  "/Images/neonparty/np4.jpg",
                  "/Images/neonparty/np5.jpg"
                ],
                delay: 0.1
              },
              {
                title: "Funtopia",
                images: [
                  "/Images/funtopia/funtopia1.jpg",
                  "/Images/funtopia/funtopia2.jpg",
                  "/Images/funtopia/funtopia3.jpg",
                  "/Images/funtopia/funtopia4.jpg"
                ],
                delay: 0.2
              },
              {
                title: "Farmtastic",
                images: [
                  "/Images/farmtastic/farm1.jpg",
                  "/Images/farmtastic/farm2.jpg",
                  "/Images/farmtastic/farm3.jpg",
                  "/Images/farmtastic/farm4.jpg"
                ],
                delay: 0.3
              },
              {
                title: "Flames and Fortes",
                images: [
                  "/Images/flames-and-forts/fnf1.jpg",
                  "/Images/flames-and-forts/fnf2.jpg",
                  "/Images/flames-and-forts/fnf3.jpg",
                  "/Images/flames-and-forts/fnf4.jpg"
                ],
                delay: 0.4
              },
              {
                title: "Fishing",
                images: [
                  "/Images/fishing/fishing1.jpg",
                  "/Images/fishing/fishing2.jpg",
                  "/Images/fishing/fishing3.jpg",
                  "/Images/fishing/fishing4.jpg",
                  "/Images/fishing/fishing5.jpg"
                ],
                delay: 0.5
              },
              {
                title: "Messy Playday",
                images: [
                  "/Images/messy-play-day/mpd1.jpg",
                  "/Images/messy-play-day/mpd2.jpg",
                  "/Images/messy-play-day/mpd3.jpg",
                  "/Images/messy-play-day/mpd4.jpg",
                  "/Images/messy-play-day/mpd5.jpg"
                ],
                delay: 0.6
              },
              {
                title: "World Book Day",
                images: [
                  "/Images/world-book-day/wbd1.jpg",
                  "/Images/world-book-day/wbd2.jpg",
                  "/Images/world-book-day/wbd3.jpg",
                  "/Images/world-book-day/wbd4.jpg"
                ],
                delay: 0.7
              },
              {
                title: "Spring Fling",
                images: [
                  "/Images/spring-fling/springfling1.jpg",
                  "/Images/spring-fling/springfling2.jpg",
                  "/Images/spring-fling/springfling3.jpg",
                  "/Images/spring-fling/springfling4.jpg"
                ],
                delay: 0.8
              },
              {
                title: "Mothers Day",
                images: [
                  "/Images/Mothers-day/md1.jpg",
                  "/Images/Mothers-day/md2.jpg",
                  "/Images/Mothers-day/md3.jpg",
                  "/Images/Mothers-day/md4.jpg"
                ],
                delay: 0.9
              },
              {
                title: "Mangroves",
                images: [
                  "/Images/Mangroves-and-team/mangrove1.jpg",
                  "/Images/Mangroves-and-team/mangrove2.jpg",
                  "/Images/Mangroves-and-team/mangrove3.jpg",
                  "/Images/Mangroves-and-team/mangrove4.jpg",
                  "/Images/Mangroves-and-team/mangrove5.jpg"
                ],
                delay: 1.0
              }
            ].map((event) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: event.delay,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group"
              >
                <PastEventGalleryCard
                  title={event.title}
                  images={event.images}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-purple-100 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 font-['Comic_Sans_MS','Comic_Sans','cursive']">
                Want to Join the Fun?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                Stay updated with our latest events and be the first to know about new adventures!
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Notified
              </button>
             </div> 
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;