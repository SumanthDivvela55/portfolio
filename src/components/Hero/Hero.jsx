import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm SUMANTH </h1>
        <p className={styles.description}>
          I'm proficient in both front-end and back-end development, with experience in React and NodeJS. Feel free to reach out if you'd like to discuss further!
        </p>
        <a href="mailto:sumanth.d21@iiits.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sumantss.jpg")}
        alt="Hero image of me"
        style={{width: "400px"}}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
