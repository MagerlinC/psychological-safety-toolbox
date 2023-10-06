import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import ResearchImg from "../../../static/img/edmond-team.png";
import EfficiencyImg from "../../../static/img/edmond-efficiency.png";
import ScreenImg from "../../../static/img/edmond-screen.png";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Get everyone's brains and voices in the game",
    imgSrc: ScreenImg,
    description: (
      <>
        Establishing a culture of psychological safety can help your team
        members feel safe to address the elephant in the room. Getting
        everyone’s brains and voices in the game gives your teams the highest
        potential for creating value.
      </>
    ),
  },
  {
    title: "Psychological Safety makes teams efficient",
    imgSrc: EfficiencyImg,
    description: (
      <>
        Psychological Safety has been identified as the most important factor of
        Software Team Efficiency by Google in a{" "}
        <a href="https://rework.withgoogle.com/">2016 study</a>. But while
        Psychological Safety is clearly important, it can be very hard to
        achieve without actionable tools to make it happen.
      </>
    ),
  },
  {
    title: "Research-based tools tested with industry teams",
    imgSrc: ResearchImg,
    description: (
      <>
        This Tool Compendium presents actionable tools for working with
        psychological safety based on academic research and testing with
        industry software teams.{" "}
        <a href="https://link.springer.com/chapter/10.1007/978-3-031-08169-9_6">
          Read the research paper that started it all here
        </a>
        .
      </>
    ),
  },
];

function Feature({ title, description, imgSrc }: FeatureItem) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <img className={styles.featurePng} src={imgSrc} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
