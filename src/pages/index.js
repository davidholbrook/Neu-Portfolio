import React from 'react';
import Link from 'gatsby-link';

import ProjectCard from '../components/ProjectCard';
import Contact from '../components/contact';

// import in all the logos.
import SpiritedFeet from '../layouts/images/client/spiritedfeet.png';
import messagecab from '../layouts/images/client/messageCab.png';
import applebarn from '../layouts/images/client/applebarn.png';

const IndexPage = () => (
  <main className="fullwidth">
    <h2 className="title">Featured Projects</h2>
    <div className="ProjectCard__wrapper">
      <ProjectCard
        logo={SpiritedFeet}
        bgColor="#142440"
        link="project/spiritedfeet"
      >
        <h2>Spirited Feet</h2>
        <p>
          Spirited Feet is a dancing organization based in Woodbury, Minnesota.
          Their mission is to teach dance and Christ in a non-competitive dance
          environment. They teach dance and choreography to grades 3 through 12
          and offered many nights a week.
        </p>
      </ProjectCard>
      <ProjectCard
        logo={messagecab}
        bgColor="#221f20"
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
      <ProjectCard logo={applebarn} bgColor="#981B38" link="project/applebarn">
        <h2>Apple Barn Orchard and Winery</h2>
        <p>
          Apple Barn is a family owned farm located in Elkhorn, Wisconsin. They
          specialize in fresh Strawberries, Pumpkins and many different
          varieties of apples. Families can come to the farm and expect a fun
          experience of picking up the freshest fruit.
        </p>
      </ProjectCard>
    </div>
    {/* <Link to="/portfolio" className="portfolioLink">
      View all Case Studies
    </Link> */}
    <h2 className="title">Contact Me</h2>
    <p>
      This is where a paragraph about me and how my services work will go. Right
      now this form goes nowhere, sorry.
    </p>
    <Contact />
  </main>
);

export default IndexPage;
