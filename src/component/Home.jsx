import React from 'react';
import Header from './Header';
import MainGrid from './MainGrid';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="grid-container">
      <Header />
      <MainGrid />
      <Footer />
    </div>
  );
};

export default Home;
