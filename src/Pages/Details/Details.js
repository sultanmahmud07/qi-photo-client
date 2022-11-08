import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';
import UserReview from './UserReview';

const Details = () => {
  const {title, img, price, reting, description,reveiw_details, item_details} =useLoaderData();
  const itemImage = {item_details}
  console.log(reveiw_details);
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='bg-slate-300 p-4'>
            {
              reveiw_details.map(review => <UserReview
              key={review.id}
              review={review}
              ></UserReview>)
            }
          </div>
          <div>
            <form>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            </form>
          </div>
        </div>

      <p>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Details;