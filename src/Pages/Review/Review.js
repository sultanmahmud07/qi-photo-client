import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import TableRow from './TebleRow/TableRow';

const Review = () => {
  const {user} =useContext(AuthContext);
  const [reviews, setReviews] =useState([]);



  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [user?.email])


  return (
    <div className='common-w'>
      <h1 className='text-4xl'>You have {reviews.length}</h1>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

    {
      reviews.map(review => <TableRow
      key={review._id}
      review={review}
      ></TableRow>)
    }
    </tbody>
  
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </div>
  );
};

export default Review;