import React from "react";
import NavButton from "./components/NavButton";
import styles from "../styles/setlist.module.css";
import { motion } from "framer-motion";

function setlist() {
  return (
    <motion.div
      className={styles.setlist}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.2,
        },
      }}
    >
      <div className={styles.navposition}>
        <NavButton />
      </div>

      <div className={styles.setListContainer}>
        <h1>SET LIST</h1>
        <motion.ul
          className={styles.setlistUl}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 3,
              bounce: 0.4,
            },
          }}
        >
          <li> ROCK N ROLL STAR</li>
          <li>ALL STAR</li>
          <li>LONELY BOY</li>
          <li>JUMPING JACK FLASH</li>
          <li>(I CANT GET NO) SATISFACTION</li>
          <li>LIGHTNING BOLT</li>
          <li>USE SOMEBODY</li>
          <li>SHE MOVES IN HER OWN WAY</li>
          <li>CRAZY LITTLE THING CALLED LOVE</li>
          <li>PLACE YOUR HANDS</li>
          <li>NEVER CAN TELL</li>
          <li>SAW HER STANDING THERE</li>
          <li>ALL THE SMALL THINGS</li>
          <li>DREAMS</li>
          <li>STUCK IN THE MIDDLE WITH YOU</li>
          <li>WHAT I LIKE ABOUT YOU</li>
          <li>NO ROOTS</li>
          <li>DOCTOR DOCTOR</li>
          <li>LAST NITE</li>
          <li>5 COLOURS IN HER HAIR</li>
          <li>SEX ON FIRE</li>
          <li>EX'S AND OH'S</li>
          <li>GETTING STARTED</li>
          <li>HOLD BACK THE RIVER</li>
          <li>WHAT YOU KNOW</li>
          <li>DAKOTA</li>
          <li>STACEY'S MOM/ TEENAGE DIRTBAG</li>
          <li>YELLOW</li>
          <li>AS IT WAS</li>
          <li>COME TOGETHER/LOSE YOURSELF</li>
          <li>SEVEN NATION ARMY</li>
          <li>FOOTLOOSE</li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default setlist;
