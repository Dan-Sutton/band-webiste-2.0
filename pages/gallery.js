import React from "react";
import NavButton from "./components/NavButton";
import styles from "../styles/gallery.module.css";
import { motion } from "framer-motion";
import GalleryImage from "./components/galleryImage";
import { useState } from "react";

function gallery(props) {
  const [viewDesc, setViewDesc] = useState([false, null]);
  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFKYcXuM4onp47mQIIb5AgwVG6EXUWuZ6HGw7-7s&s",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFKYcXuM4onp47mQIIb5AgwVG6EXUWuZ6HGw7-7s&s",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFKYcXuM4onp47mQIIb5AgwVG6EXUWuZ6HGw7-7s&s",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFKYcXuM4onp47mQIIb5AgwVG6EXUWuZ6HGw7-7s&s",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFKYcXuM4onp47mQIIb5AgwVG6EXUWuZ6HGw7-7s&s",
      desc: "Doggo pulling a weird one",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFKYcXuM4onp47mQIIb5AgwVG6EXUWuZ6HGw7-7s&s",
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
              <GalleryImage
                viewDesc={viewDesc}
                setViewDesc={setViewDesc}
                image={image.src}
                desc={image.desc}
                index={index}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default gallery;
