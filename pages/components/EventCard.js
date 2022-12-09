import React from "react";
import styles from "../../styles/EventCard.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

function EventCard({ date, title, coverPhoto, description }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        transition: {
          type: "spring",
          duration: 0.8,
          bounce: 0.6,
        },
      }}
      className={styles.eventContainer}
    >
      {/* <Link href={"/events/" + slug}> */}
      <h1 className={styles.title}>{title}</h1>
      <p>{date}</p>
      <div className={styles.imgContainer}>
        <Image
          className={styles.eventImage}
          width={400}
          height={200}
          src={coverPhoto.url}
          alt=""
        ></Image>
      </div>
      <p>{description}</p>
      {/* </Link> */}
    </motion.div>
  );
}

export default EventCard;
