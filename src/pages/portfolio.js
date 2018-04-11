import React from 'react';

import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

// import in all the logos.
import SpiritedFeet from '../layouts/images/client/spiritedfeet.png';
import messagecab from '../layouts/images/client/messageCab.png';
import applebarn from '../layouts/images/client/applebarn.png';
import MCAD from '../layouts/images/client/mcad.png';

const Portfolio = () => (
  <div>
    <div className="background--black">
      <Header />
    </div>
    <main className="fullwidth">
      <h2 className="title">All Projects</h2>
      <div className="ProjectCard__wrapper">
        <ProjectCard logo={MCAD} bgColor="#6f8f9d" link="project/mcad">
          <h2>Minneapolis College of Art and Design</h2>
          <p>
            Minneapolis College of Art and Design (MCAD) is a renown art college
            based in Minnesota. Since 1886, it has taught students from all
            around the world.  MCAD's degrees fall in fine arts, design,
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
        <ProjectCard
          logo={applebarn}
          bgColor="#981B38"
          link="project/applebarn"
        >
          <h2>Apple Barn Orchard and Winery</h2>
          <p>
            Apple Barn is a family-owned farm located in Elkhorn, Wisconsin.
            They specialize in fresh Strawberries, Pumpkins, many different
            varieties of Apples, and wine. Families of all kinds can come to the
            farm and expect a fun experience of picking up the freshest fruit
            and sample great wine at the winery.
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
            non-competitive environment. They teach grades 3 through 12 and
            offer classes many nights a week.
          </p>
        </ProjectCard>
      </div>
    </main>
    <Footer />
  </div>
);

export default Portfolio;
