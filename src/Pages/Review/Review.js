import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import TableRow from './TebleRow/TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);



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
                handleDeleted={handleDeleted}
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
      <ToastContainer />
    </div>
  );
};

export default Review;