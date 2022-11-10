import React from 'react';
import About from '../../About/About';
import HomeServices from '../../homeServices/HomeServices';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import EditSoftware from '../../EditSoftware/EditSoftware';


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
      <EditSoftware></EditSoftware>
    </div>
  </HelmetProvider>
  );
};

export default Home;