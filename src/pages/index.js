import React from "react";
import Link from "gatsby-link";

import ProjectCard from "../components/ProjectCard/featured";
import Contact from "../components/contact";

// import in all the logos.
import messagecab from "../layouts/images/client/messageCab.png";
import MCAD from "../layouts/images/client/mcad.png";

const IndexPage = () => (
  <main className="fullwidth">
    <h2 className="title">Featured Projects</h2>
    <div className="ProjectCard__wrapper">
      <ProjectCard logo={MCAD} bgColor="#6f8f9d" link="project/mcad">
        <h2>Minneapolis College of Art and Design</h2>
        <p>
          Minneapolis College of Art and Design (MCAD) is a renown art college
          based in Minnesota. Since 1886, it has taught students from all around
          the world.  MCAD's degrees fall in fine arts, design,
          entrepreneurship, and sustainability education.
        </p>
      </ProjectCard>
      <ProjectCard
        logo={messagecab}
        bgColor="#333333"
        link="project/messagecab"
      >
        <h2>Message Cab</h2>
        <p>
          Selling cards and posters were the dream for a client of mine as a
          side business. The client had the idea for the website and the
          inventory to sell. He needed my technical skills to reach a global
          audience with his product.
        </p>
      </ProjectCard>
    </div>
    <Link to="/portfolio" className="portfolioLink">
      View all Case Studies
    </Link>
    <h2 className="title">Let's Chat</h2>
    <p>
      Did you find something that you want to hire me to do, or just want to
      know more information about me. Lets chat using the form below.
    </p>
    <Contact />
  </main>
);

export default IndexPage;
