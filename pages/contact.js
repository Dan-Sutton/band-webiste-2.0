import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../styles/contact.module.css";
import { motion } from "framer-motion";
import NavButton from "./components/NavButton";
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Message sent!",
          });
        },
        (error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "There was an error whilst sending your message.",
          });
        }
      );
    e.target.reset();
  };

  return (
    <motion.div
      className={contact.body}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, duration: 5 }}
    >
      <NavButton />

      <div className={contact.contactForm}>
        <div className={contact.contacthead}>
          <h1 className={contact.title}>CONTACT</h1>
          <div className={contact.contactDesc}>
            <p>
              We'd love to hear from you! If you have any questions, or would
              like to secure a booking, please contact us using the form below.
              Alternatively, you can reach us on our{" "}
              <a href="https://www.facebook.com/TheWildfireMusic">
                Facebook page.
              </a>
            </p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className={contact.form}>
          <input
            required={true}
            className={contact.username}
            type="text"
            name="user_name"
            placeholder="Your name"
          />
          <br />
          <input
            className={contact.email}
            required={true}
            type="email"
            name="user_email"
            placeholder="Your Email Address"
          />
          <br />
          <textarea
            className={contact.message}
            required={true}
            name="message"
            placeholder="Message"
          />
          <motion.input
            whileHover={{
              scale: 1.15,
              transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.6,
              },
            }}
            type="submit"
            value="Send"
            className={contact.submit}
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
