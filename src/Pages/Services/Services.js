import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Share/ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] =useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
  .then(data => setServices(data))
  }, [])
  return (
    <div className='common-w py-6'>
      <div>
      <h1 className='text-6xl text-primary text-center'>Out Services !!</h1>
      <p className='lg:w-2/4 text-center m-auto py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quasi eos id cum illo tenetur magnam deleniti. Tenetur, necessitatibus reprehenderit.</p>

      </div>
      {/* service containers */}


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {
        services.map(service => <ServiceCard
          key={service._id}
          service ={service}
        ></ServiceCard>)
      }
      </div>
      <div className='text-center py-7'>
        <button className="btn btn-primary"><Link to='/services'>See All</Link></button>
      </div>
    </div>
  );
};

export default Services;