import React from "react";
import Layout from "@theme/Layout";
import MikkelImg from "../../static/img/mikkel.png";
import Presentation1 from "../../static/img/xppresentation.jpeg";
import Presentation2 from "../../static/img/awardspresentation.jpg";
import styles from "./about-me.module.css";

export default function AboutMe() {
  return (
    <Layout title="About Me" description="About Mikkel Agerlin">
      <div className={"center"}>
        <h1 className={"page-header"}>Hey there, I'm Mikkel 👋</h1>
        <div className={"row-to-col"}>
          <img className={styles.heroImage} src={MikkelImg} />
          <p className={styles.heroDesc}>
            <h2 className={styles.nameTitle}>Mikkel Agerlin Christensen</h2>
            <p>
              I'm a Software Developer by day, and a Psychological Safety
              practitioner and researcher by... well, also day I suppose. I come
              from a background working as a software developer, but realized
              early on in my career that people and interactions are what make
              tech great. As a result of this, I have spent the last couple of
              years researching and practicing psychological safety across many
              different software teams - both in my own teams, and other teams
              interested in working with psychological safety.
            </p>
            <p>
              The result of this has been several papers, a research award, and
              several amazing experiences working with psychological safety in
              different software teams. I focus on making psychological safety{" "}
              <i>actionable</i>, designing and implementing tools for working
              with psychological safety, which your and your team can adopt to
              start working with psychological safety today! I also attend
              various events and conferences, speaking and learning about
              psychological safety. If you want me to speak at your event, at
              your company, or work with your teams, don't hesitate to contact
              me at{" "}
              <a href="mailto:mikkel@addresstheelephant.io">
                mikkel@addresstheelephant.io
              </a>
            </p>
            <p>
              If you're interested in my research projects or my CV, you can
              find those on my{" "}
              <a href="https://magerlinc.github.io/">personal website</a>. You
              are also welcome to contact me on{" "}
              <a href="https://www.linkedin.com/in/mikkel-agerlin-christensen-3a38ba166/">
                my LinkedIn
              </a>
              .
            </p>
          </p>
        </div>
        <h1>Gallery</h1>
        <div className={"grid"}>
          <figure>
            <iframe src="https://www.youtube.com/embed/EaQ13glksZg" />
            <figcaption>
              Speaking at the Devops Conference in Stockholm in 2023
            </figcaption>
          </figure>
          <figure>
            <iframe src="https://www.youtube.com/embed/pnmxnJJVhns" />
            <figcaption className={"recording-description"}>
              Speaking at an open research event at the IT University of
              Copenhagen in 2021
            </figcaption>
          </figure>
          <figure>
            <img src={Presentation1} />
            <figcaption>
              Speaking at the XP2022 International Conference of Software
              Development
            </figcaption>
          </figure>
          <figure>
            <img src={Presentation2} />
            <figcaption>
              Speaking as a Nominee at the 2021 Computer Science Thesis Awards
            </figcaption>
          </figure>
        </div>
      </div>
    </Layout>
  );
}
