import React from 'react';

const UserReview = ({ review }) => {
  const { name, r_img, r_des } = review
  return (
    <div>
      <div className="card my-5 card-side bg-base-100 shadow-xl">
        <figure><img src={r_img} alt="Movie" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{r_des}</p>
          
        </div>
      </div>
    </div>
  );
};

export default UserReview;