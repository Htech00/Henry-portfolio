import React from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import useContactForm from "../hooks/useContactForm";

const contactDetails = [
  {
    Icon: FiMail,
    label: "Email",
    value: "henryojukwu1996@gmail.com",
    href: "mailto:henryojukwu1996@gmail.com",
  },
  {
    Icon: FiPhone,
    label: "Phone",
    value: "+234 810 939 9679",
    href: "tel:+2348109399679",
  },
  { Icon: FiMapPin, label: "Location", value: "Lagos, Nigeria" },
];

const socials = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/henry-ojukwu-2296a0297",
  },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Htech00" },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/2348109399679?text=Hello%20Henry%2C%20I%20saw%20your%20portfolio!",
  },
];

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[15px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#425d82]/40 focus:border-[#425d82] transition";

const Contact = () => {
  const { form, status, sendEmail } = useContactForm();
  const sending = status === "sending";

  return (
    <div
      id="contact"
      className="w-full bg-[linear-gradient(to_right,rgba(66,93,130,0.1),rgba(255,255,255,0.2))] py-16 px-4 sm:px-6 lg:px-8 scroll-mt-[80px] sm:scroll-mt-[100px]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#425d82]">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#425d82] mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind or a role to discuss? Send a message and
            I'll get back to you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 p-8 bg-[#425d82]/5 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Information
            </h3>
            <p className="text-sm text-gray-600 mb-8">
              Fill out the form or reach me directly through any of these
              channels.
            </p>

            <ul className="space-y-5">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#425d82]/10 text-[#425d82]">
                    <Icon className="text-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-800 font-medium hover:text-[#425d82] break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-8 lg:mt-auto lg:pt-8">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#425d82] hover:bg-[#425d82] hover:text-white hover:border-[#425d82] transition-colors"
                >
                  <Icon className="text-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:col-span-3 p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows="6"
                placeholder="Tell me about your project or role..."
                name="message"
                className={`${inputClass} resize-none`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#425d82] hover:bg-[#344a68] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full shadow-md transition-colors font-semibold"
            >
              <FiSend className="text-[18px]" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
