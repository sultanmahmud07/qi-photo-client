import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';


const TableRow = ({ review, handleDeleted }) => {
  const { photoURL, email, img, rating, reviewName, service, textAria, _id, name } = review;
  const [reviewService, setReviewService] = useState({});


  useEffect(() => {
    fetch(`https://assignment-server-iota.vercel.app/services/${service}`)
      .then(res => res.json())
      .then(data => setReviewService(data));
  }, [service])





  return (

    <tr>
      
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-36 h-36">

              {
                reviewService?.img && <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
              }
            </div>
          </div>
          <div>
            <div className="font-bold pb-5">{reviewName}</div>
            <div className="text-2xl flex ">Rating: <span className='text-3xl mr-2 text-warning'><FaStar></FaStar></span>{rating}</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{textAria}</span>
      </td>
      <td>
      <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
      </td>
      <th>
        <button className="btn">Edit</button>
      </th>
      <th>
      <button onClick={() => handleDeleted(_id)} className="btn btn-square btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
      </th>
    </tr>


  );
};

export default TableRow;