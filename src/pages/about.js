import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutDavid = () => (
  <div>
    <div className="background--black">
      <Header />
    </div>
    <main>
      <h2>About David Holbrook</h2>
      <p>
        Hi, I'm Dave, a front-end designer from Minneapolis, Minnesota. I have
        over fifteen years of experience in creating websites and front-end
        applications for small and medium-sized businesses. I recently graduated
        with a Bachelors in Entrepreneurship Studies as MCAD (Minneapolis
        College of Art and Design) and I love working with business and products
        of all kinds and helping them succeed online. Let me know what I can do
        for your next thing, email me at david@davidholbrook.info.
      </p>
    </main>
    <Footer />
  </div>
);

export default AboutDavid;
