import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceCard from '../../Share/ServiceCard/ServiceCard';

const HomeServices = () => {
  const [services, setServices] =useState([]);
  useEffect(() => {
    fetch('https://assignment-server-iota.vercel.app/homeservices')
    .then(res => res.json())
  .then(data => setServices(data))
  }, [])
  return (
    <div className='common-w py-6 lg:pt-20'>
      <div>
      <h1 className='text-5xl common-c text-center font-semibold uppercase'>My Services</h1>
      <p className='lg:w-2/4 text-center m-auto py-4 text-xl lg:pb-10'>If you want to take pictures from any place you like, you can select any of my services. With my service you can take pictures of your heart for very less money.</p>

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
      <div className='text-center py-7'>
      <Link to='/services'><button className="btn btn-primary">Show all</button></Link>
        
      </div>
    </div>
  );
};

export default HomeServices;