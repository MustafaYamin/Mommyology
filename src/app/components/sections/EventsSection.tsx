'use client'
import { motion } from 'framer-motion';

const EventsSection = () => {
  const events = [
    {
      title: "Spring Nature Walk",
      date: "March 15, 2024",
      description: "A guided exploration of local flora and fauna",
      image: "/events/event1.jpg",
      category: "Nature Walk",
      color: "bg-[#45C8F0]"
    },
    {
      title: "Art in the Park",
      date: "April 22, 2024",
      description: "Creative workshops using natural materials",
      image: "/events/event2.jpg",
      category: "Art Workshop",
      color: "bg-[#FDE047]"
    },
    {
      title: "Science Discovery Day",
      date: "May 10, 2024",
      description: "Hands-on experiments with nature",
      image: "/events/event3.jpg",
      category: "Science",
      color: "bg-[#6B5AA2]"
    },
    {
      title: "Summer Garden Party",
      date: "June 5, 2024",
      description: "Planting and gardening activities",
      image: "/events/event4.jpg",
      category: "Gardening",
      color: "bg-[#45C8F0]"
    },
    {
      title: "Story Time Under the Stars",
      date: "July 20, 2024",
      description: "Evening storytelling and stargazing",
      image: "/events/event5.jpg",
      category: "Storytelling",
      color: "bg-[#FDE047]"
    },
    {
      title: "Outdoor Adventure Games",
      date: "August 12, 2024",
      description: "Active games in natural settings",
      image: "/events/event6.jpg",
      category: "Outdoor Games",
      color: "bg-[#6B5AA2]"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-[#F8F6FF] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Take a look at some of our most memorable events and the amazing experiences we&apos;ve created for children.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-[#45C8F0]"
            >
              {/* Event Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#FDE047]/20 via-[#45C8F0]/20 to-[#6B5AA2]/20 flex items-center justify-center">
                <div className="text-4xl opacity-60">{event.category === "Nature Walk" ? "🌿" : 
                  event.category === "Art Workshop" ? "🎨" :
                  event.category === "Science" ? "🔬" :
                  event.category === "Gardening" ? "🌱" :
                  event.category === "Storytelling" ? "📚" : "🎮"}</div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${event.color}`}>
                    {event.category}
                  </span>
                  <span className="text-sm text-[#6B5AA2]/60 font-medium">
                    {event.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#6B5AA2] mb-3 group-hover:text-[#45C8F0] transition-colors duration-300 font-['Comic_Sans_MS','Comic_Sans','cursive']">
                  {event.title}
                </h3>

                <p className="text-[#6B5AA2]/80 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#45C8F0] to-[#45C8F0]/90 text-white font-semibold rounded-full text-sm hover:bg-[#FDE047] hover:text-[#6B5AA2] transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B5AA2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              Upcoming Events
            </h3>
            <p className="text-lg text-[#6B5AA2]/80 leading-relaxed mb-6">
              Stay tuned for our upcoming events! We&apos;re always planning new adventures and experiences for your children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#FDE047] to-[#FDE047]/90 text-[#6B5AA2] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#45C8F0] hover:bg-[#45C8F0] hover:text-white">
                View Calendar
              </button>
              <button className="px-8 py-4 bg-transparent text-[#6B5AA2] font-bold text-lg rounded-full border-2 border-[#6B5AA2] hover:bg-[#6B5AA2] hover:text-white transition-all duration-300 transform hover:scale-105">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection; 