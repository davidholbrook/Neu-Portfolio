import React from "react";
import Link from "gatsby-link";

import ProjectCard from "../components/ProjectCard/featured";
import Contact from "../components/contact";

// import in all the logos.
import SpiritedFeet from "../layouts/images/client/spiritedfeet.png";
import applebarn from "../layouts/images/client/applebarn.png";

const IndexPage = () => (
  <main className="fullwidth">
    <h2 className="title">Featured Projects</h2>
    <div className="ProjectCard__wrapper">
      <ProjectCard logo={applebarn} bgColor="#981B38" link="project/applebarn">
        <h2>Apple Barn Orchard and Winery</h2>
        <p>
          Apple Barn is a family-owned farm located in Elkhorn, Wisconsin. They
          specialize in fresh Strawberries, Pumpkins, many different varieties
          of Apples, and wine. Families of all kinds can come to the farm and
          expect a fun experience of picking up the freshest fruit and sample
          great wine at the winery.
        </p>
      </ProjectCard>
      <ProjectCard
        logo={SpiritedFeet}
        bgColor="#142440"
        link="project/spiritedfeet"
      >
        <h2>Spirited Feet</h2>
        <p>
          Spirited Feet is a dance organization based in Woodbury, Minnesota.
          Their mission is to teach dance and christian teaching in a
          non-competitive environment. They teach grades 3 through 12 and offer
          classes many nights a week.
        </p>
      </ProjectCard>
    </div>
    {/* <Link to="/portfolio" className="portfolioLink">
      View all Case Studies
    </Link> */}
    <h2 className="title">Let's Chat</h2>
    <p>
      Did you find something that you want to hire me to do, or just want to
      know more information about me. Lets chat using the form below.
    </p>
    <Contact />
  </main>
);

export default IndexPage;
