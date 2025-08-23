"use client";
import { motion } from "framer-motion";
import UpcomingEventCard from "../UpcomingEventCard";
import PastEventGalleryCard from "../PastEventGalleryCard";

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-br from-[#F8F6FF] to-white">
      {/* Upcoming Events */}
      <motion.div
        id="upcoming-events"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center mb-14 py-5 bg-[#6B5AA2] flex flex-col items-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#45C8F0] mb-10 font-['Comic_Sans_MS','Comic_Sans','cursive']">
          Upcoming Events
        </h3>
        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
          <UpcomingEventCard
            title="Pottery Party"
            image="/Images/poteryparty.jpg"
            time="24th August, 4:00 PM - 5:00 PM"
            cost="PKR 1200 per kid"
          />
          <UpcomingEventCard
            title="Messy Playday"
            image="/Images/messyplay.jpg"
            time="24th August, 5:00 PM - 6:30 PM"
            cost="PKR 1500 per kid"
          />
        </div>
      </motion.div>

      {/* Past Events */}
      <div id="past-events" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FDE047] mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            Past Events
          </h2>
          <p className="text-xl text-[#6B5AA2]/80 max-w-4xl mx-auto leading-relaxed">
            Take a look at some of our most memorable events and the amazing experiences <br /> we&apos;ve created for children.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {/* <PastEventGalleryCard
            title="Pets Playdate"
            images={["/Images/petsplaydate/petsplaydate1.jpg", "/Images/petsplaydate/petsplaydate2.jpg"]}
          /> */}
          <PastEventGalleryCard
            title="Neon Party"
            images={["/Images/neonparty/np1.jpg",
               "/Images/neonparty/np2.jpg",
               "/Images/neonparty/np3.jpg",
               "/Images/neonparty/np4.jpg",
               "/Images/neonparty/np5.jpg"]}
          />
          <PastEventGalleryCard
            title="Funtopia"
            images={["/Images/funtopia/funtopia1.jpg",
               "/Images/funtopia/funtopia2.jpg",
               "/Images/funtopia/funtopia3.jpg",
               "/Images/funtopia/funtopia4.jpg"]}
          />
          <PastEventGalleryCard
            title="Farmtastic"
            images={["/Images/farmtastic/farm1.jpg",
               "/Images/farmtastic/farm2.jpg",
               "/Images/farmtastic/farm3.jpg",
               "/Images/farmtastic/farm4.jpg"]}
          />
          <PastEventGalleryCard
            title="Flames and Fortes"
            images={["/Images/flames-and-forts/fnf1.jpg",
               "/Images/flames-and-forts/fnf2.jpg",
               "/Images/flames-and-forts/fnf3.jpg",
               "/Images/flames-and-forts/fnf4.jpg"]}
          />
          <PastEventGalleryCard
            title="Fishing"
            images={["/Images/fishing/fishing1.jpg",
               "/Images/fishing/fishing2.jpg",
               "/Images/fishing/fishing3.jpg",
               "/Images/fishing/fishing4.jpg",
               "/Images/fishing/fishing5.jpg"]}
          />
          <PastEventGalleryCard
            title="Messy Playday"
            images={["/Images/messy-play-day/mpd1.jpg",
               "/Images/messy-play-day/mpd2.jpg",
               "/Images/messy-play-day/mpd3.jpg",
               "/Images/messy-play-day/mpd4.jpg",
               "/Images/messy-play-day/mpd5.jpg"]}
          />
          <PastEventGalleryCard
            title="World Book Day"
            images={["/Images/world-book-day/wbd1.jpg",
               "/Images/world-book-day/wbd2.jpg",
               "/Images/world-book-day/wbd3.jpg",
               "/Images/world-book-day/wbd4.jpg"]}
          />
          <PastEventGalleryCard
            title="Spring Fling"
            images={["/Images/spring-fling/springfling1.jpg",
               "/Images/spring-fling/springfling2.jpg",
               "/Images/spring-fling/springfling3.jpg",
               "/Images/spring-fling/springfling4.jpg"]}
          />
          <PastEventGalleryCard
            title="Mothers Day"
            images={[
              "/Images/Mothers-day/md1.jpg",
              "/Images/Mothers-day/md2.jpg",
              "/Images/Mothers-day/md3.jpg",
              "/Images/Mothers-day/md4.jpg"
            ]}
          />
          <PastEventGalleryCard
            title="Mangroves"
            images={[
              "/Images/Mangroves-and-team/mangrove1.jpg",
              "/Images/Mangroves-and-team/mangrove2.jpg",
              "/Images/Mangroves-and-team/mangrove3.jpg",
              "/Images/Mangroves-and-team/mangrove4.jpg",
              "/Images/Mangroves-and-team/mangrove5.jpg"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 