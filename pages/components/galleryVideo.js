import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function GalleryVideo({ src, index }) {
  const [showControl, setShowControl] = useState(false);
  return (
    <div>
      <div>
        <motion.video
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
          controls={showControl}
          src={src}
        />
      </div>
    </div>
  );
}

export default GalleryVideo;
