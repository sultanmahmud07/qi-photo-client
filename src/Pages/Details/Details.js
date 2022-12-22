import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ItemCard from './ItemCard/ItemCard';
import UserReview from './UserReview';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Details = () => {
  const { user } = useContext(AuthContext)
  const { _id, title, img, price, reting, description, reveiw_details, item_details } = useLoaderData();
  const itemImage = { item_details }

  // console.log(_id);

  // Review handle setup >>
  const handleReview = (event) => {
    if (user?.uid) {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const rating = form.rating.value;
      const textAria = form.textAria.value;

      const review = {
        service: _id,
        reviewName: title,
        email,
        name,
        photoURL,
        textAria,
        rating,
        img
      }

      fetch('https://assignment-server-iota.vercel.app/reviews', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(review)

      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.acknowledged) {
            toast.success('Wow your review add successfully!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            form.reset();
          }
        })
        .catch(er => console.error(er));



    }

    else {
      event.preventDefault();
      Swal.fire(
        'Please Login to add a review!',
        'click btn go to back!',
        'warning'
      )
    }

  }

  //Form all data cleared >>
  const handleClearAll = (event) => {
    event.preventDefault();
    const form = event.target;

  }

  // const handleClear = event => {
  //   event.preventDefault();
  //   const form = event;
  //   const name = form.name.value;
  //   const photoURL = form.photoURL.value;
  //   // const rating = form.rating.value;
  //   const textAria = form.textAria.value;
  //   console.log(name, photoURL, textAria);


  // }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Services-details-Qi-Photo</title>
      </Helmet>
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
                <form onSubmit={handleReview}>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                    <div>
                      <p className='font-semibold mb-1'>Name</p>
                      <input name='name' type="text" placeholder="your name" defaultValue={user?.displayName} className="input input-bordered input-primary w-full md:max-w-xs" required />
                    </div>
                    <div>
                      <p className='font-semibold mb-1'>Email</p>
                      <input name='email' type="email" placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered input-primary w-full md:max-w-xs" required />
                    </div>
                    <div>
                      <p className='font-semibold mb-1'>Your PhotoURL</p>
                      <input name='photoURL' type="url" placeholder="your photoURL" className="input input-bordered input-primary w-full md:max-w-xs" required />
                    </div>
                    <div>
                      <p className='font-semibold mb-1'>Rating of 5</p>
                      <select  name='rating' className="select select-primary w-full md:max-w-xs" required>
                        {/* <option disabled selected>Select Rating</option> */}
                        <option >5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                        <option>0</option>
                      </select>
                      {/* <input name='rating' type="text" placeholder="give your rating" className="input input-bordered input-primary w-full md:max-w-xs" required /> */}
                    </div>
                  </div>
                  <textarea name='textAria' className="textarea w-full textarea-warning" placeholder="Review Details text" required></textarea>
                  <div className='grid grid-cols-2 gap-5 py-5'>
                    <span className='reviw-btn w-full text-center'>Clear all</span>
                    <input className='reviw-btn w-full' type="submit" value="Add Review" />
                  </div>
                </form>
              </div>
            </div>


          </div>
        </div>
        <ToastContainer />
      </div>
    </HelmetProvider>
  );
};

export default Details;