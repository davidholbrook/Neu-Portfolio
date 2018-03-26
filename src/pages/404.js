import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => (
  <div>
    <div className="background--black">
      <Header />
    </div>
    <main className="fourohfour">
      <h2>404 NOT FOUND</h2>
      <p>
        Sorry, I cannot find the page you are looking for, try finding it from
        the <Link to="/">homepage</Link>.
      </p>
    </main>
    <Footer />
  </div>
);

export default NotFoundPage;
