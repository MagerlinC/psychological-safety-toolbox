import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Psychological Safety makes Teams efficient",
    Svg: require("@site/static/img/efficiency.svg").default,
    description: (
      <>
        Psychological Safety has been identified as the most important factor of
        Software Team Efficiency by Google in a{" "}
        <a href="https://rework.withgoogle.com/">2016 study</a>. But while
        Psychological Safety is clearly important, it can be very hard to
        achieve.
      </>
    ),
  },
  {
    title: "Get everyone's brains and voices in the game",
    Svg: require("@site/static/img/elephant-screen.svg").default,
    description: (
      <>
        Establishing a culture of psychological safety can help your team
        members feel safe to address the elephant in the room, and get
        everyone’s brains and voices in the game. We’ve designed actionable
        tools for working with psychological safety based on research and
        testing with industry software teams.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
