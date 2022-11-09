import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';
import UserReview from './UserReview';

const Details = () => {
  const { title, img, price, reting, description, reveiw_details, item_details } = useLoaderData();
  const itemImage = { item_details }
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
                item={item}
              ></ItemCard>)
            }
          </div>
          <div className='pb-9 border-b-2'>
            <h4 className='text-xl font-semibold'>Discriptions</h4>
            <p>{description}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className=' p-4'>
              <h2 className='text-2xl font-semibold'>People Review</h2>
              {
                reveiw_details.map(review => <UserReview
                  key={review.id}
                  review={review}
                ></UserReview>)
              }
            </div>

            <div>
              <h2 className='text-2xl py-3 inline-block font-semibold'>Add Your Review</h2>
              <form>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                <div>
                  <p>Name</p>
                <input type="text" placeholder="your name" className="input input-bordered input-primary w-full md:max-w-xs" />
                </div>
                <div>
                  <p>Email</p>
                <input type="email" placeholder="email" className="input input-bordered input-primary w-full md:max-w-xs" />
                </div>
                <div>
                  <p>PhotoURL</p>
                <input type="url" placeholder="your photoURL" className="input input-bordered input-primary w-full md:max-w-xs" />
                </div>
                <div>
                  <p>Rating of 5</p>
                <input type="text" placeholder="give your rating" className="input input-bordered input-primary w-full md:max-w-xs" />
                </div>
                </div>
                <textarea className="textarea w-full textarea-warning" placeholder=""></textarea>
                <div className='grid grid-cols-2 gap-5'>
                  <input className='reviw-btn w-full' type="submit" value="Clear all" />
                  <input className='reviw-btn w-full' type="submit" value="Add Review" />
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Details;