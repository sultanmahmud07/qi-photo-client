import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';

const Details = () => {
  const {title, img, price, reting, description, item_details} =useLoaderData();
  const itemImage = {item_details}
  console.log(itemImage);
  return (
    <div className='mb-40'>
      <div className='w-4/5 m-auto'>
      <div>
      <h1 className='text-4xl py-4 text-center font-bold capitalize'>{title}</h1>
        <img className='w-full' src={img} alt="" />
      </div>
      <div>
        <h2 className='text-3xl py-3 font-bold capitalize mt-5'>Some more collection</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 py-4'>
        {
          item_details.map(item => <ItemCard
          key={item.id}
          item ={item}
          ></ItemCard>)
        }
      </div>
      <p>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Details;