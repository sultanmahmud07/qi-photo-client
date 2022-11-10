import React from 'react';
import About from '../../About/About';
import HomeServices from '../../homeServices/HomeServices';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
  return (
  <HelmetProvider>
    <Helmet>
      <title>Qi-Photo</title>
    </Helmet>
      <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <About></About>
    </div>
  </HelmetProvider>
  );
};

export default Home;