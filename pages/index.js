import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Nav from "./components/Nav";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>The Wildfire</title>
        <meta name="The Wildfire function band." content="" />
      </Head>
      <main className={styles.main}>
        <div className={styles.fullHeader}>
          <div className={styles.heading}>
            <h1 className={styles.title}>THE WILDFIRE</h1>
            <p className={styles.subtitle}>
              Dynamic 4-piece function band, perfect for any event.
            </p>
          </div>

          <p
            className={styles.menuTitle}
            onClick={() => setShowMenu(!showMenu)}
          >
            |||
          </p>

          {showMenu ? (
            <div
              className={styles.nav}
              onMouseLeave={() => setShowMenu(!showMenu)}
            >
              <Nav />
            </div>
          ) : (
            <></>
          )}

          <video autoPlay loop muted infinite className={styles.video}>
            <source
              src="https://res.cloudinary.com/dsdpn6tzq/video/upload/v1670360021/Website/new%20site/New_website_header_ksrcqi.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className={styles.aboutSection}>
          <h1>ABOUT</h1>
        </div>
      </main>
    </div>
  );
}
