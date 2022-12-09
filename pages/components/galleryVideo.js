import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function GalleryVideo({ src, index }) {
  const [showControl, setShowControl] = useState(false);
  return (
    <div>
      <div>
        <motion.iframe
          onMouseEnter={() => {
            setShowControl(true);
          }}
          onMouseLeave={() => {
            setShowControl(false);
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              type: "spring",
              duration: 1.5,
              bounce: 0.6,
            },
          }}
          width={500}
          height={300}
          frameborder="0"
          src={src}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default GalleryVideo;
