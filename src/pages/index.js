import React from 'react';
import Link from 'gatsby-link';

import ProjectCard from '../components/ProjectCard';

// import in all the logos.
import SpiritedFeet from '../layouts/images/client/spiritedfeet.png';
import cgos from '../layouts/images/client/CGOS.png';
import applebarn from '../layouts/images/client/applebarn.png';
import mcad from '../layouts/images/client/mcad.png';


const IndexPage = () => (
  <main className="fullwidth">
    <h2 className="title">Featured Projects</h2>
    <div className="ProjectCard__wrapper">
      <ProjectCard logo={SpiritedFeet} bgColor="#142440" link="project/spiritedfeet">
        <h2>Spirited Feet</h2>
        <p>Spirited Feet is a Christian dance company based in Woodbury, Minnesota. I was approached by them with the challenge of redesigning their old website using WordPress as the management system.</p>
      </ProjectCard>
      <ProjectCard logo={cgos} bgColor="#333333">
        <h2>Christian Gamer Outreach Society</h2>
        <p>Alderaan? I'm not going to Alderaan. I've got to go home. It's late, I'm in for it as it is. I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan.</p>
      </ProjectCard>
      <ProjectCard logo={applebarn} bgColor="#981b38">
        <h2>Apple Barn Orchard and Winery</h2>
        <p>Applebarn is an apple orchard based in Elkhorn, Wisconsin. I was brought in by a common friend to help refresh the design of the website.</p>
      </ProjectCard>
      <ProjectCard logo={mcad} bgColor="#6f8f9d">
        <h2>Minneapolis College of Art and Design</h2>
        <p>As I was completing my Bachelor's degree at Minneapolis College of Art and Design, I had the opportunity to work with the web communications department at my school. Working with this department, I was responsible for many different tasks and projects, including everything from researching new features, building new additions, and maintaining the current website for the school.</p>
      </ProjectCard>
    </div>
    <Link to="/portfolio" className="portfolioLink">View all Case Studies</Link>
    <h2 className="title">Contact Me</h2>
    <p>Insert form here</p>
  </main>
);

export default IndexPage;
