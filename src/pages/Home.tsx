import React from 'react';
import NavBar from '../components/upper/NavBar';
import HeroCarousel from '../components/lower/HeroCarousel';
import PhotoGrid from '../components/lower/PhotoGrid';

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Carousel */}
      <div className="container-fluid my-4">
        <HeroCarousel />
      </div>

      {/* Welcome Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <h1>Welcome to Pure Life</h1>
            <p>Specializing in pools, pavers, ponds, and hardscaping.</p>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="container my-5">
        <PhotoGrid />
      </div>
    </>
  );
};

export default Home;
