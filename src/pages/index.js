import React from 'react';

import ProjectCard from '../components/ProjectCard';

// import in all the logos.
import SpiritedFeet from '../layouts/images/client/spiritedfeet.png';
import cgos from '../layouts/images/client/CGOS.png';
import mcad from '../layouts/images/client/mcad.png';
import messagecab from '../layouts/images/client/messageCab.png';
import replan from '../layouts/images/client/replan.png';
import applebarn from '../layouts/images/client/applebarn.png';


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
      <ProjectCard logo={messagecab} bgColor="#221f20">
        <h2>Message Cab</h2>
        <p>Selling cards and posters were the dream for a client of mine as a side business. The client had the idea for the website and the inventory to sell. He needed my technical skills to reach a global audience with his product.</p>
      </ProjectCard>
      <ProjectCard logo={replan} bgColor="#a642fe">
        <h2>Replan</h2>
        <p>Bender, I didn't know you liked cooking. That's so cute. Then throw her in the laundry room, which will hereafter be referred to as "the brig". As an interesting side note, as a head without a body, I envy the dead. We can't compete with Mom! Her company is big and evil! Ours is small and neutral!</p>
      </ProjectCard>
    </div>
  </main>
);

export default IndexPage;
