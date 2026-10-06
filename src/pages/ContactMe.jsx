import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiMessageSquare } from "react-icons/fi";
import useContactForm from "../hooks/useContactForm";

const terminalOutput = {
  idle: [{ text: "> Waiting for your message...", className: "opacity-70" }],
  sending: [
    { text: "$ send --to henry", className: "" },
    { text: "> Sending message...", className: "text-[#e5c07b]" },
  ],
  sent: [
    { text: "$ send --to henry", className: "" },
    { text: "> 200 OK: Message delivered.", className: "text-[#c8f58e]" },
    { text: "> Thanks! I'll get back to you soon.", className: "text-[#c8f58e]" },
  ],
  error: [
    { text: "$ send --to henry", className: "" },
    { text: "> Error: Message failed to send.", className: "text-[#f48771]" },
    { text: "> Please try again or email me directly.", className: "opacity-70" },
  ],
};

const inputClass =
  "border-[#3c3c3c] border bg-[#3f3c3c3f] rounded-md px-3 py-2 placeholder:text-gray-500 focus:outline-[#3691c5] focus:outline-2";

const links = [
  {
    Icon: MdOutlineMail,
    label: "henryojukwu1996@gmail.com",
    href: "mailto:henryojukwu1996@gmail.com",
  },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Htech00" },
  {
    Icon: SlSocialLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/henry-ojukwu-2296a0297",
  },
];

const ContactMe = () => {
  const { form, status, sendEmail } = useContactForm();
  const sending = status === "sending";

  return (
    <div
      className=" max-w-4xl mx-auto"
      style={{
        color: "var(--text-main)",
      }}
    >
      <div className="space-y-4 mb-8">
        <p className="text-[#6a9955] text-2xl">// Contact</p>
        <p className="text-[#425d82] text-4xl font-semibold ">Get In Touch</p>
        <p>
          Have a project in mind or a role to discuss? Send a message and I'll
          get back to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-mono">
        {/* Contact Form */}
        <div className="rounded-md p-4 border border-[#3c3c3c]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 text-[#3691c5]"
          >
            <div className="flex gap-2 items-center">
              <MdOutlineMail />
              <p>Contact Form</p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="cursor-pointer">
                name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className={inputClass}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="cursor-pointer">
                email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className={inputClass}
                required
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="cursor-pointer">
                message:
              </label>
              <textarea
                id="message"
                name="message"
                className={`${inputClass} h-40 resize-none`}
                required
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="flex gap-2 items-center justify-center w-fit text-white bg-[#3691c5] px-4 py-2 rounded-md hover:bg-[#3691c5]/80 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              <BiMailSend className="text-[20px]" />
              <span className="font-semibold">
                {sending ? "Sending..." : "Submit"}
              </span>
            </button>
          </form>
        </div>

        {/* Terminal */}
        <div className="rounded-md border border-[#3c3c3c] flex flex-col overflow-hidden min-h-[300px]">
          <div className="bg-[#3f3c3c3f] py-2 px-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]"></span>
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="h-3 w-3 rounded-full bg-[#27c93f]"></span>
            <p className="ml-2 text-sm">Terminal</p>
          </div>
          <div className="p-4 flex-grow leading-[22px] text-[14px]">
            <p>$ init contact-form</p>
            <p className="text-[#c8f58e]">
              {">"} Contact form initialized successfully.
            </p>
            {terminalOutput[status].map((line) => (
              <p key={line.text} className={`mt-1 ${line.className}`}>
                {line.text}
              </p>
            ))}
            <div className="flex items-center mt-3 gap-2">
              <p>user@machine:~$</p>
              <span className="blinking-cursor h-4 w-2 bg-current opacity-70"></span>
            </div>
          </div>
          <div className="bg-[#425d82] py-1">
            <p className="px-4 text-[12px] text-white">
              Contact Terminal: node v18.0.0
            </p>
          </div>
        </div>
      </div>

      <div className=" rounded-md p-4 flex flex-col gap-3 mb-6 bg-[#3f3c3c3f] border border-[#3c3c3c] font-mono ">
        <p className="text-[#3691c5]">// Other Ways to Connect</p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 sm:text-[15px] text-[13px]">
          {links.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:text-[#3691c5] break-all"
            >
              <Icon className="text-[20px] shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className=" rounded-md p-6 flex flex-col gap-2 mb-6 bg-[#25d366]/10 border border-[#25d366] font-mono ">
        <div className="flex text-[20px] items-center gap-4 font-semibold">
          <FiMessageSquare className="text-[#25d366]" />
          <p className="text-[#25d366] ">WhatsApp Me Directly</p>
        </div>
        <p>
          For quick responses and real-time communication, feel free to reach
          out to me on WhatsApp.
        </p>
        <a
          href="https://wa.me/2348109399679?text=Hello%20Henry%2C%20I%20saw%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-fit mt-5 bg-[#25d366] py-3 px-5 text-white rounded-md hover:bg-[#1ebe5a] transition-colors"
        >
          <FiMessageSquare className="text-[16px]" />
          <span className="text-[14px] font-semibold">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
