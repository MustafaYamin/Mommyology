'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "info.mommyology@gmail.com",
      action: "mailto:info.mommyology@gmail.com"
    },
    {
      icon: "📱",
      title: "Call Us",
      description: "+92 332 3722139",
      action: "tel:+92 332 3722139"
    },
    // {
    //   icon: "📍",
    //   title: "Visit Us",
    //   description: "123 Nature Way, Green City",
    //   action: "#"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-[#F8F6FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B5AA2] mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
            Contact Us
          </h2>
          <p className="text-xl text-[#6B5AA2]/80 max-w-4xl mx-auto leading-relaxed">
            Want to join an event or partner with us? Reach out and let&apos;s make magic happen!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-[#FDE047]/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#6B5AA2] mb-4 sm:mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#6B5AA2] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#6B5AA2] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-[#6B5AA2] mb-2">
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white text-sm sm:text-base"
                >
                  <option value="">Select an option</option>
                  <option value="events">Joining Events</option>
                  <option value="partnership">Partnership</option>
                  <option value="custom">Custom Programs</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#6B5AA2] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white resize-none text-sm sm:text-base"
                  placeholder="Tell us more about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FDE047] to-[#FDE047]/90 text-[#6B5AA2] font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#45C8F0] hover:bg-[#45C8F0] hover:text-white"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#6B5AA2] mb-4 sm:mb-6 font-['Comic_Sans_MS','Comic_Sans','cursive']">
                Get in Touch
              </h3>
              <p className="text-sm sm:text-base text-[#6B5AA2]/80 leading-relaxed mb-6 sm:mb-8">
                We&apos;d love to hear from you! Whether you have questions about our programs, 
                want to partner with us, or just want to say hello, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
            {contactMethods.map((method, index) => (
  <motion.a
    key={index}
    href={method.action}
    rel="noopener noreferrer"
    target={method.action.startsWith("http") ? "_blank" : "_self"}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#45C8F0] group"
  >
    <div className="text-3xl sm:text-4xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
      {method.icon}
    </div>
    <div>
      <h4 className="text-base sm:text-lg font-bold text-[#6B5AA2] mb-1 font-['Comic_Sans_MS','Comic_Sans','cursive']">
        {method.title}
      </h4>
      <p className="text-sm sm:text-base text-[#6B5AA2]/80">
        {method.description}
      </p>
    </div>
  </motion.a>
))}

            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#FDE047]/20 to-[#45C8F0]/20 rounded-3xl p-6"
            >
              <h4 className="text-xl font-bold text-[#6B5AA2] mb-3 font-['Comic_Sans_MS','Comic_Sans','cursive']">
                Office Hours
              </h4>
              <p className="text-[#6B5AA2]/80 mb-2">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-[#6B5AA2]/80 mb-2">
                Saturday: 10:00 AM - 4:00 PM
              </p>
              <p className="text-[#6B5AA2]/80">
                Sunday: Closed
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

