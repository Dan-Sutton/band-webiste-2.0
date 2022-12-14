import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import NavButton from "./components/NavButton";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import HeadShot from "./components/HeadShot";
import About from "./components/About";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  // const [showMenu, setShowMenu] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-40vh", opacity: 0 });
    }
  }, [inView, animation]);
  return (
    <div className={styles.container}>
      <Head>
        <title>The Wildfire</title>
        <meta name="The Wildfire function band." content="" />
      </Head>
      <main className={styles.main}>
        <div className={styles.fullHeader}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 3,
                bounce: 0.2,
              },
            }}
            className={styles.heading}
          >
            <h1 className={styles.title}>THE WILDFIRE</h1>
            <p className={styles.subtitle}>
              Dynamic 4-piece function band, perfect for any event.
            </p>
          </motion.div>

          <NavButton />

          <video autoPlay={"true"} loop muted infinite className={styles.video}>
            <source
              src="https://res.cloudinary.com/ddoeif72w/video/upload/v1670671606/Website/New_website_header_hhrcd1.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <motion.div
          ref={ref}
          animate={animation}
          className={styles.aboutSection}
        >
          <h2 className={styles.subheading}>WHO ARE THE WILDFIRE?</h2>

          <div className={styles.headshots}>
            <HeadShot
              name={"Dan Sutton"}
              desc={"Lead vocals and Rhythm Guitarist"}
              src={
                "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/4_h1fesw.png"
              }
            />

            <HeadShot
              name={"Tom Orves"}
              desc={"Lead Guitar"}
              src={
                "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/1_jbqdrc.png"
              }
            />

            <HeadShot
              name={"Hayden Price"}
              desc={"Drums, Percussion and backing vocals"}
              src={
                "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/3_tzxb5p.png"
              }
            />
            <HeadShot
              name={"James Price"}
              desc={"Bassist and backing vocals"}
              src={
                "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/2_t5bef9.png"
              }
            />
          </div>
        </motion.div>

        <div className={styles.aboutContentContainer}>
          <div className={styles.aboutContent}>
            <About />
          </div>
          {/* 
          <motion.button
            className={styles.contactButton}
            whileHover={{
              scale: 1.15,
              transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.6,
              },
            }}
          >
            Get in contact now
          </motion.button> */}
        </div>
      </main>
    </div>
  );
}
