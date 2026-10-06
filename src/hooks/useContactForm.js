import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

// Shared EmailJS submit logic for the client and developer contact forms.
// status: "idle" | "sending" | "sent" | "error"
const useContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    emailjs
      .sendForm(
        "service_bg25uoh",
        "template_zk443yk",
        form.current,
        "HRCaWPln68idPpo8d"
      )
      .then(
        () => {
          setStatus("sent");
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("error");
          toast.error("Failed to send message. Try again.");
        }
      );
  };

  return { form, status, sendEmail };
};

export default useContactForm;
