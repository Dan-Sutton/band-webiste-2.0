import React from "react";
import styles from "../../styles/About.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: 100, opacity: 0 });
    }
  }, [inView]);
  return (
    <motion.div ref={ref} animate={animation}>
      <p className={styles.content}>
        The Wildfire are a fresh and energetic Shropshire based function/party
        band ready to bring a big, unforgettable sound to your event. We cover a
        wide range of well-known hits suitable for Weddings, Parties and other
        events. Collectively, The Wildfire has many years of experience
        providing a professional musical package for clients nationwide. We
        provide our own PA and lighting system, as well as all the necessary
        cover/insurance for your event.
      </p>
    </motion.div>
  );
}

export default About;
