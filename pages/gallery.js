import React from "react";
import NavButton from "./components/NavButton";
import styles from "../styles/gallery.module.css";
import { motion } from "framer-motion";
import GalleryImage from "./components/galleryImage";

function gallery(props) {
  return (
    <div className={styles.gallery}>
      <div className={styles.navposition}>
        <NavButton />
      </div>

      <div className={styles.galleryContainer}>
        <h1>GALLERY</h1>

        <GalleryImage
          images={[
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
          ]}
        />
      </div>
    </div>
  );
}

export default gallery;
