import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/galleryImage.module.css";

function GalleryImage({ image, desc, index, setViewDesc, viewDesc }) {
  return (
    <div>
      <div className={styles.imageContainer}>
        {viewDesc[0] && index === viewDesc[1] ? (
          <p
            index={index}
            className={styles.desc}
            onMouseLeave={() => {
              setViewDesc([false, null]);
            }}
          >
            {desc}
          </p>
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
