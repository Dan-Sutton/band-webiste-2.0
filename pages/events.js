import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import EventCard from "./components/EventCard.js";
import NavButton from "./components/NavButton.js";
import styles from "../styles/events.module.css";
import { motion } from "framer-motion";
import Head from "next/head.js";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_API_KEY);

const QUERY = gql`
  {
    events {
      createdAt
      date
      id
      publishedAt
      slug
      title
      updatedAt
      coverPhoto {
        url
      }
      description {
        text
      }
      datevalue
    }
  }
`;

export async function getStaticProps() {
  const { events } = await graphcms.request(QUERY);
  return {
    props: {
      events,
    },
    revalidate: 30,
  };
}

function isAfterToday(date) {
  const today = new Date();
  console.log(today);

  today.setHours(23, 59, 59, 998);

  return date > today;
}

function Events({ events }) {
  return (
    <div>
      <Head>
        <title>Events | The Wildfire</title>
        <meta name="The Wildfire function band." content="" />
      </Head>
      <NavButton />
      <motion.div
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
        <h1 className={styles.title}>EVENTS</h1>

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 3,
              bounce: 0.2,
            },
          }}
          className={styles.events}
        >
          {events.map((event) => {
            return (
              <EventCard
                key={event.id}
                title={event.title}
                coverPhoto={event.coverPhoto}
                slug={event.slug}
                date={event.date}
                description={event.description.text}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Events;
