import React from 'react';
import About from '../../About/About';
import HomeServices from '../../homeServices/HomeServices';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <About></About>
    </div>
  );
};

export default Home;