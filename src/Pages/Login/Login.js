import React, { useContext, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
// import Login-img from '../../Assat/Register/login.jpg';
import loginImg from '../../Assat/Register/login.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
  const [error, setError] = useState('');
  const { logIn, googleSignIn } = useContext(AuthContext)
  const provider = new GoogleAuthProvider();
  // console.log(logIn);

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset('')
        setError('')
        Swal.fire(
          'Login Successfully!',
          'You clicked the button!',
          'success'
        )

      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })

  }


  const handleGoogleSignIn = () =>{
    googleSignIn(provider)
    .then(result => {
      console.log(result.user);
      Swal.fire(
        'Login Successfully!',
        'You clicked the button!',
        'success'
      )
    })
    .catch(error =>{
      console.error(error)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className='common-w'>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2 m-auto">
            <img className='' src={loginImg} alt="" />
          </div>
          <div className="card w-full m-auto lg:w-1/2 max-w-sm  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className='text-center text-4xl py-2 font-bold text-primary'>Login Now</h2>
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
              <div className="form-control mt-6">
                <input className='btn btn-primary' type='submit' value='Login'></input>
                {/* <button type='submit' className="btn btn-primary">Login</button> */}
              </div>
              <div className='text-center'>
                <p className='text-center'>Or sign up with</p>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning m-2">Google</button>
        <button className="btn btn-outline btn-info m-2">Facebook</button>
        </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;