import React from "react";
import Link from "next/link";
import styles from "../../styles/EventCard.module.css";
import Image from "next/image";

function EventCard({
  date,
  id,
  slug,
  title,
  updatedAt,
  coverPhoto,
  description,
}) {
  return (
    <div>
      {/* <Link href={"/events/" + slug}> */}
      <h1>{title}</h1>
      <p>{date}</p>
      <div className={styles.imgContainer}>
        <Image width={400} height={200} src={coverPhoto.url} alt=""></Image>
      </div>
      <p>{description}</p>
      {/* </Link> */}
    </div>
  );
}

export default EventCard;
