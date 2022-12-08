import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/galleryImage.module.css";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function GalleryImage({ image, desc, index, setViewDesc, viewDesc }) {
  return (
    <div>
      <div className={styles.imageContainer}>
        {viewDesc[0] && index === viewDesc[1] ? (
          <motion.div
            onMouseLeave={() => {
              setViewDesc([false, null]);
            }}
            className={styles.desc}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 0.7,
                bounce: 0.2,
              },
            }}
          >
            <p
              index={index}
              onMouseLeave={() => {
                setViewDesc([false, null]);
              }}
            >
              {desc}
            </p>
            <button
              onClick={() => {
                Swal.fire({
                  showConfirmButton: false,
                  imageUrl: image,
                  imageWidth: "100%",
                  imageHeight: "100%",
                  imageAlt: "Custom image",
                  background: "rgba(24, 24, 24, 0)",
                });
              }}
            >
              VIEW
            </button>
          </motion.div>
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
