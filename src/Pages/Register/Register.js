import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../../Assat/Register/register.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
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
      Swal.fire(
        'Login Successfully!',
        'You clicked the button!',
        'success'
      )

    })
    .catch(error =>{
      console.error(error);
    })
    // console.log(name, email, password);
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className='common-w'>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2 m-auto">
            <img className='' src={registerImg} alt="" />
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
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type='submit' value='Login'></input>
                {/* <button type='submit' className="btn btn-primary">Login</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;