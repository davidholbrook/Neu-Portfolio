import React from 'react';

import Contact from '../components/contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => (
  <div>
    <div className="background--black">
      <Header />
    </div>
    <Contact />
    <Footer />
  </div>
);
