
import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // EmailJS configuration: uses .env if available, otherwise falls back to hardcoded values
  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_1409z4o";
  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_6tcbe7m";
  const publicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "HYuOiNmDVPeRocERi";

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
        },
        (error) => {
          setLoading(false);
          console.error("Email sending error:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-white to-white font-poppins"
    >
      {/* Toast Container */}
      <ToastContainer />

      <h2 className="text-4xl font-bold text-center mb-4 text-red-600">
        <span className="text-black">Get</span> In Touch
      </h2>
      <p className="text-center mb-10 text-gray-600">
        Let's connect and create something amazing together!
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-2xl transition duration-300"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="w-full border border-red-200 px-4 py-3 rounded-lg focus:outline-none focus:border-red-400 transition"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            required
            className="w-full border border-red-200 px-4 py-3 rounded-lg focus:outline-none focus:border-red-400 transition"
          />
          <input
            type="tel"
            name="from_phonenumber"
            placeholder="Phone Number"
            pattern="[0-9+()\-\s]{7,}"
            title="Please enter a valid phone number"
            required
            className="w-full border border-red-200 px-4 py-3 rounded-lg focus:outline-none focus:border-red-400 transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            maxLength={1000}
            className="w-full border border-red-200 px-4 py-3 rounded-lg h-32 focus:outline-none focus:border-red-400 transition resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-red-400" : "bg-red-600"
            } text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 w-full font-semibold`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <p className="text-lg font-medium text-gray-700">
            Connect with me on:
          </p>
          <div className="flex gap-6 text-4xl text-red-600">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
