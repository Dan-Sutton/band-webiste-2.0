import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Wildfire</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Link href={"/events"}>Events</Link>
      </main>
    </div>
  );
}
