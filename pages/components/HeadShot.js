import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/HeadShot.module.css";
import Image from "next/image";

function HeadShot({ name, desc, src }) {
  return (
    <div>
      <motion.div
        className={styles.headshot}
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
          src={src}
          className={styles.headshotImage}
        />
        <h2>{name}</h2>
        <p>{desc}</p>
      </motion.div>
    </div>
  );
}

export default HeadShot;
