import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import styles from "../../styles/navbutton.module.css";
import { motion } from "framer-motion";

function NavButton() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <motion.p
        initial={{ rotate: 270 }}
        whileHover={{
          rotate: 180,
          scale: 1.15,
          transition: {
            type: "spring",
            duration: 0.8,
            bounce: 0.6,
          },
        }}
        className={styles.menuTitle}
        onClick={() => setShowMenu(!showMenu)}
      >
        III
      </motion.p>

      {showMenu ? (
        <motion.div
          initial={{ opacity: 1, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              duration: 0.5,
              bounce: 0.2,
            },
          }}
          s
          className={styles.nav}
          onMouseLeave={() => setShowMenu(!showMenu)}
        >
          <Nav />
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavButton;
