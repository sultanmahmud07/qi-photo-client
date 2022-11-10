import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerImg from '../../Assat/Register/register.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/';
  const {createUser} =useContext(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault();
    const form =event.target;
    const name =form.name.value;
    const email =form.email.value;
    const password =form.password.value;

    createUser(email, password)
    .then(result => {
      const user =result.user;
      console.log(user);
      navigate(from, {replace: true})
      setError('')
      Swal.fire(
        'Login Successfully!',
        'You clicked the button!',
        'success'
      )

    })
    .catch(error =>{
      console.error(error);
      setError(error.message)
    })
    // console.log(name, email, password);
  }
  return (
   <HelmetProvider>
    <Helmet>
      <title>Register-Qi-Photo</title>
    </Helmet>
     <div className="hero min-h-screen ">
      <div className='common-w'>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2 m-auto">
            <img className='rounded-3xl' src={registerImg} alt="" />
          </div>
          <div className="card w-full m-auto lg:w-1/2 max-w-sm  shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
           
             
            <h2 className='text-center text-4xl py-2 font-bold text-primary'>Register Now</h2>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <span className='text-red-600'>{error}</span>
                </label>
              </div>
              <div className="form-control mt-6 pb-5">
                <input className='btn btn-primary' type='submit' value='Register'></input>
                {/* <button type='submit' className="btn btn-primary">Login</button> */}
              </div>
              <div>
          <span>Already have an accout? <Link to='/login' className='text-blue-700 font-semibold'>Login</Link></span>
        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </HelmetProvider>
  );
};

export default Register;