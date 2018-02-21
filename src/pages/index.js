import React from 'react';
import Link from 'gatsby-link';

import ProjectCard from '../components/ProjectCard';
import Contact from '../components/contact';

// import in all the logos.
import SpiritedFeet from '../layouts/images/client/spiritedfeet.png';
import messagecab from '../layouts/images/client/messageCab.png';


const IndexPage = () => (
  <main className="fullwidth">
    <h2 className="title">Featured Projects</h2>
    <div className="ProjectCard__wrapper">
      <ProjectCard logo={SpiritedFeet} bgColor="#142440" link="project/spiritedfeet">
        <h2>Spirited Feet</h2>
        <p>Spirited Feet is a Christian dance company based in Woodbury, Minnesota. I was approached by them with the challenge of redesigning their old website using WordPress as the management system.</p>
      </ProjectCard>
      <ProjectCard logo={messagecab} bgColor="#221f20" link="project/messagecab">
        <h2>Message Cab</h2>
        <p>Selling cards and posters were the dream for a client of mine as a side business. The client had the idea for the website and the inventory to sell. He needed my technical skills to reach a global audience with his product.</p>
      </ProjectCard>
    </div>
    <Link to="/portfolio" className="portfolioLink">View all Case Studies</Link>
    <h2 className="title">Contact Me</h2>
    <p>This is where a paragraph about me and how my services work will go. Right now this form goes nowhere, sorry.</p>
    <Contact />
  </main>
);

export default IndexPage;
