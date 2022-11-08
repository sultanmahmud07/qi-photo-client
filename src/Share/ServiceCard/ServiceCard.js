import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const {title, description, img, reting, item_details} =service;
  console.log(item_details);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{
            description.length > 100? <span>{description.slice(0, 100) + '...'} <Link>Read more</Link></span> : <span>{description}</span>
            }</p>
          <div className="card-actions justify-end">
            <span>{reting}</span>
            <button className="btn btn-primary">Buy Now</button>
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