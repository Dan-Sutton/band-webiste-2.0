import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/galleryImage.module.css";
import { motion } from "framer-motion";

function GalleryImage({ image, desc, index, setViewDesc, viewDesc }) {
  return (
    <div>
      <div className={styles.imageContainer}>
        {viewDesc[0] && index === viewDesc[1] ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 0.7,
                bounce: 0.2,
              },
            }}
            index={index}
            className={styles.desc}
            onMouseLeave={() => {
              setViewDesc([false, null]);
            }}
          >
            {desc}
          </motion.p>
        ) : (
          <></>
        )}

        <Image
          onMouseEnter={() => {
            setViewDesc([true, index]);
          }}
          className={styles.galleryImage}
          height={200}
          width={200}
          alt=""
          src={image}
        />
      </div>
    </div>
  );
}

export default GalleryImage;
