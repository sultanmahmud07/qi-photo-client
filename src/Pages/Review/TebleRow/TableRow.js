import React, { useEffect, useState } from 'react';
import { FaBeer } from 'react-icons/fa';

const TableRow = ({ review, handleDeleted }) => {
  const { photoURL, email, img, rating, reviewName, service, textAria, _id } = review;
  const [reviewService, setReviewService] = useState({});


  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
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
            <div className="font-bold">{reviewName}</div>
            <div className="text-sm opacity-50">{rating}</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
      </td>
      <td>Purple</td>
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