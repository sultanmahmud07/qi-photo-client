import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import TableRow from './TebleRow/TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
  // const [noReview, setNoReview] = useState('no reviw add');
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);


  // if(!reviews){
  //   setNoReview('no review added')
  // }
  // console.log(noReview);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user?.email])

  const handleDeleted = id => {
   
    const proceed = window.confirm('Are you sure, you want to delete this review ?');
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {

            // alert component 
            toast.success('🦄 Your delete is successfully!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            const remaining = reviews.filter(odr => odr._id !== id);
            setReviews(remaining);

          }
        })
    }
  }



  return (
    <div className='common-w pb-12'>
      <h1 className='text-4xl'>Your reviews</h1>
      <div className="overflow-x-auto w-full">
       {
        reviews.length > 0 ?  <table className="table w-full">

        <thead>
          <tr>
            
            <th>Service details</th>
            <th>Your info</th>
            <th>Profile</th>
            <th>Edit review</th>
            <th>Detele</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         

          <>
          {
            reviews.map(review => <TableRow
              key={review._id}
              review={review}
              handleDeleted={handleDeleted}
            ></TableRow>)
          }
          </>
        </tbody>

        

      </table> : <p className='text-xl md:text-6xl text-center text-gray-300 font-semibold md:py-40'>No reviews were added</p>
       }
      </div>
      <ToastContainer />
    </div>
  );
};

export default Review;