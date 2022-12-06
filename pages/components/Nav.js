import Link from "next/link";
import React from "react";
import styles from "../../styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <Link href={"/setList"}>SET LIST</Link>
        </li>
        <li className={styles.listItem}>
          <Link href={"/contact"}>CONTACT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href={"/gallery"}>GALLERY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href={"/events"}>EVENTS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
