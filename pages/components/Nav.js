import Link from "next/link";
import React from "react";
import styles from "../../styles/Nav.module.css";
import { motion } from "framer-motion";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <motion.li
          className={styles.listItem}
          whileHover={{
            scale: 1.15,
            transition: {
              type: "spring",
              duration: 0.3,
              bounce: 0.3,
            },
          }}
        >
          <Link href={"/"}>ABOUT</Link>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.15,
            transition: {
              type: "spring",
              duration: 0.3,
              bounce: 0.3,
            },
          }}
          s
          className={styles.listItem}
        >
          <Link href={"/setlist"}>SET LIST</Link>
        </motion.li>
        <motion.li
          className={styles.listItem}
          whileHover={{
            scale: 1.15,
            transition: {
              type: "spring",
              duration: 0.3,
              bounce: 0.3,
            },
          }}
        >
          <Link href={"/contact"}>CONTACT</Link>
        </motion.li>
        <motion.li
          className={styles.listItem}
          whileHover={{
            scale: 1.15,
            transition: {
              type: "spring",
              duration: 0.3,
              bounce: 0.3,
            },
          }}
        >
          <Link href={"/gallery"}>GALLERY</Link>
        </motion.li>
        <motion.li
          className={styles.listItem}
          whileHover={{
            scale: 1.15,
            transition: {
              type: "spring",
              duration: 0.3,
              bounce: 0.3,
            },
          }}
        >
          <Link href={"/events"}>EVENTS</Link>
        </motion.li>
      </ul>
    </div>
  );
}

export default Nav;
