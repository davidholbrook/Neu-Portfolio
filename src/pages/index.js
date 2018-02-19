import React from 'react';
import Link from 'gatsby-link';

import ProjectCard from '../components/ProjectCard';

const IndexPage = () => (
  <main className="fullwidth">
    <h2 className="title">Recent Projects</h2>
    <div className="ProjectCard__wrapper">
      <ProjectCard />
    </div>
  </main>
);

export default IndexPage;
