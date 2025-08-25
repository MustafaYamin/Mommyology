"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        interest: formData.interest || "General Inquiry",
        title: `New Contact Form Submission from ${formData.name}`,
        to_name: "Mommyology Team",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
        interest: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Updated with WhatsApp + email pre-fill
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "info.mommyology@gmail.com",
      action:
        "mailto:info.mommyology@gmail.com?subject=Hello%20Mommyology&body=I%20would%20like%20to%20know%20more%20about%20your%20programs.",
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      title: "WhatsApp",
      description: "+92 332 3722139",
      action:
        "https://wa.me/923323722139?text=Hello%20Mommyology%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20events!",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white to-[#F8F6FF]"
    >
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
            Want to join an event or partner with us? Reach out and let&apos;s
            make magic happen!
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

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                ✅ Message sent successfully! We&lsquo;ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                ❌ Failed to send message. Please try again or contact us
                directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#6B5AA2] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white text-sm sm:text-base disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#6B5AA2] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white text-sm sm:text-base disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-semibold text-[#6B5AA2] mb-2"
                >
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white text-sm sm:text-base disabled:opacity-50"
                >
                  <option value="">Select an option</option>
                  <option value="Joining Events">Joining Events</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Custom Programs">Custom Programs</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#6B5AA2] mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#6B5AA2]/20 rounded-xl focus:border-[#45C8F0] focus:outline-none transition-colors duration-300 bg-white resize-none text-sm sm:text-base disabled:opacity-50"
                  placeholder="Tell us more about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FDE047] to-[#FDE047]/90 text-[#6B5AA2] font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#45C8F0] hover:bg-[#45C8F0] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
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
                We&apos;d love to hear from you! Whether you have questions
                about our programs, want to partner with us, or just want to say
                hello, we&apos;re here to help.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
