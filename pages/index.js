import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Nav from "./components/Nav";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import HeadShot from "./components/HeadShot";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [showMenu, setShowMenu] = useState(false);
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
  }, [inView]);
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

          <p
            className={styles.menuTitle}
            onClick={() => setShowMenu(!showMenu)}
          >
            III
          </p>

          {showMenu ? (
            <div
              className={styles.nav}
              onMouseLeave={() => setShowMenu(!showMenu)}
            >
              <Nav />
            </div>
          ) : (
            <></>
          )}

          <video autoPlay loop muted infinite className={styles.video}>
            <source
              src="https://res.cloudinary.com/dsdpn6tzq/video/upload/v1670360021/Website/new%20site/New_website_header_ksrcqi.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <motion.div
          ref={ref}
          animate={animation}
          className={styles.aboutSection}
        >
          <h1>ABOUT</h1>

          <div className={styles.headshots}>
            <HeadShot
              name={"Dan Sutton"}
              desc={"Lead vocals and Rhythm Guitarist"}
              src={
                "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/4_h1fesw.png"
              }
            />

            {/* <motion.div
              whileHover={{
                scale: 1.15,
                transition: {
                  type: "spring",
                  duration: 0.8,
                  bounce: 0.6,
                },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <Image
                width={500}
                height={500}
                alt=""
                src={
                  "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/1_jbqdrc.png"
                }
                className={styles.headshotImage}
              />
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.15,
                transition: {
                  type: "spring",
                  duration: 0.8,
                  bounce: 0.6,
                },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <Image
                width={500}
                height={500}
                alt=""
                src={
                  "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/3_tzxb5p.png"
                }
                className={styles.headshotImage}
              />
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.15,
                transition: {
                  type: "spring",
                  duration: 0.8,
                  bounce: 0.6,
                },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <Image
                width={500}
                height={500}
                alt=""
                src={
                  "https://res.cloudinary.com/dsdpn6tzq/image/upload/v1670429247/Website/new%20site/2_t5bef9.png"
                }
                className={styles.headshotImage}
              />
            </motion.div> */}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
