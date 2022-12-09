import React from "react";
import NavButton from "./components/NavButton";
import styles from "../styles/gallery.module.css";
import { motion } from "framer-motion";
import GalleryImage from "./components/galleryImage";
import { useState } from "react";

function gallery(props) {
  const images = [
    {
      src: "https://drive.google.com/uc?export=view&id=1eQ_MQ-K3MOkYJxShGX4-NxWuIT-vHfmA",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=12kuXGsveyYJzz_Z-5JJzKOE6DU7vjuPP",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1o0gWVyGuPvMtUqcutQZefYyor3qw4JBK",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1ALZyRanHkNe5SdBXeybDIxMwPp7K4w_U",
      desc: "Doggo pulling a weird one",
    },
  ];

  return (
    <div className={styles.gallery}>
      <div className={styles.navposition}>
        <NavButton />
      </div>

      <div className={styles.galleryContainer}>
        <h1>GALLERY</h1>

        <div className={styles.videos}>
          <video
            controls
            width={500}
            src="https://drive.google.com/uc?export=view&id=1grJfVwo8s5MaoSth9M3-tjceEDuLM5he"
          />
          <video
            controls
            width={500}
            src="https://drive.google.com/uc?export=view&id=16inJGfAyuknbhL--gDXwreM39mYac_wb"
          />
          <video
            controls
            width={500}
            height={300}
            src="https://drive.google.com/uc?export=view&id=1x5cZLGI3KXfrx9feL3oXV_m9IetJV6xT"
          />
          <video
            controls
            width={500}
            src="https://drive.google.com/uc?export=view&id=1grJfVwo8s5MaoSth9M3-tjceEDuLM5he"
          />
        </div>

        <motion.div
          className={styles.images}
          initial={{ opacity: 0, x: 30 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.2,
            },
          }}
        >
          {images.map((image, index) => {
            return (
              <GalleryImage image={image.src} desc={image.desc} index={index} />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default gallery;
