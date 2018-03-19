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
