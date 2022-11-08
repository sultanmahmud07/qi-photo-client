import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const ServiceCard = ({service}) => {
  const {title, description, img, _id, reveiw, item_details, price} =service;
  // console.log(_id);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{
            description.length > 100? <span>{description.slice(0, 100) + '...'} <Link>Read more</Link></span> : <span>{description}</span>
            }</p>
            <div className='flex justify-between items-center py-3'>
              <span className='text-3xl font-bold'>Price: <span className='text-blue-600 text-3xl font-bold'>{price}</span></span>
              <span className='text-warning flex items-center'>
                
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt></FaStarHalfAlt>
                <FaRegStar></FaRegStar>
                   <span className='font-bold text-black px-2'>{reveiw}</span>
              </span>

            </div>
          <div className="card-actions justify-end">
            
            <Link to={`details/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        {
          item_details.map(item => <div key={item.id}>
            
            <img src={item.url} alt="" />
            <p>{item.date}</p>
          </div>)
        }
      </div> */}
    </div>
  );
};

export default ServiceCard;