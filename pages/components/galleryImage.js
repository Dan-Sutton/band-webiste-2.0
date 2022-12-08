import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/galleryImage.module.css";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function GalleryImage({ image, desc, index }) {
  return (
    <div>
      <div className={styles.imageContainer}>
        <motion.img
          whileHover={{
            scale: 1.05,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.6,
            },
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
