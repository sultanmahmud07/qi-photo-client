import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceCard from '../../Share/ServiceCard/ServiceCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Services = () => {
  const [services, setServices] =useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
  .then(data => setServices(data))
  }, [])
  return (
   <HelmetProvider>
     <Helmet>
      <title>Services-Qi-Photo</title>
    </Helmet>
     <div className='common-w py-6 pb-40 lg:pt-20'>
      <div>
      <h1 className='text-5xl common-c text-center font-semibold uppercase'>My Services</h1>
      <p className='lg:w-2/4 text-center m-auto py-4 text-xl lg:pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quasi eos id cum illo tenetur magnam deleniti. Tenetur, necessitatibus reprehenderit.</p>

      </div>
      {/* service containers */}


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        services.map(service => <ServiceCard
          key={service._id}
          service ={service}
        ></ServiceCard>)
      }
      </div>
      
    </div>
   </HelmetProvider>
  );
};

export default Services;