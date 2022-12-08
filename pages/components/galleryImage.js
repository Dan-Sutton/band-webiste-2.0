import React from "react";
import Image from "next/image";

function GalleryImage({ images }) {
  return (
    <div>
      {images.map((image) => {
        return <Image height={200} width={200} alt="" src={image.src} />;
      })}
    </div>
  );
}

export default GalleryImage;
