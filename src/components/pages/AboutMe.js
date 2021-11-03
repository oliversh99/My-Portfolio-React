import React from "react";
import { profileJpg } from "../../images";

const styles = {
  image: {
    maxWidth: 300,
  },
};

export default function About() {
  return (
    <section className="container">
      <h2 class="top-title">Olivar Raees</h2>
      <hr></hr>
      <div className="row">
        <div className="col-xs-12 col-sm-5">
          <img
            class="mb-5 img-responsive img"
            src={profileJpg}
            alt="Olivar"
            style={styles.image}
          />
        </div>
        <div className="col-xs-12 col-sm-7">
          <p>
           Hello,I'm Entry-level web developer with high proficiency in full-stack
            development, and passionate for learn more about coding programs.
          </p>
          <p>
          Also I have a
          </p>
          <p>
            Certificate in Full Stack Web Development From UCSD BootCamp.
            Thanks for visit My PORTOFOLIO
          </p>
        </div>
      </div>
    </section>
  );
}
