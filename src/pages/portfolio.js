import React from 'react';

import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

// import in all the logos.
import SpiritedFeet from '../layouts/images/client/spiritedfeet.png';
import messagecab from '../layouts/images/client/messageCab.png';
import applebarn from '../layouts/images/client/applebarn.png';

const Portfolio = () => (
  <div>
    <div className="background--black">
      <Header />
    </div>
    <main className="fullwidth">
      <h2 className="title">All Projects</h2>
      <div className="ProjectCard__wrapper">
        <ProjectCard
          logo={applebarn}
          bgColor="#981B38"
          link="project/applebarn"
        >
          <h2>Apple Barn Orchard and Winery</h2>
          <p>
            Apple Barn is a family owned farm located in Elkhorn, Wisconsin.
            They specialize in fresh Strawberries, Pumpkins and many different
            varieties of apples. Families can come to the farm and expect a fun
            experience of picking up the freshest fruit.
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
        <ProjectCard
          logo={SpiritedFeet}
          bgColor="#142440"
          link="project/spiritedfeet"
        >
          <h2>Spirited Feet</h2>
          <p>
            Spirited Feet is a Christian dance company based in Woodbury,
            Minnesota. I was approached by them with the challenge of
            redesigning their old website using WordPress as the management
            system.
          </p>
        </ProjectCard>
      </div>
    </main>
    <Footer />
  </div>
);

export default Portfolio;
