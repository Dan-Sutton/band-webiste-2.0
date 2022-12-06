import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import EventCard from "./components/EventCard.js";

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

function Events({ events }) {
  return (
    <div>
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
    </div>
  );
}

export default Events;
