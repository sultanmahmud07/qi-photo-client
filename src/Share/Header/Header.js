import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../CommonStyles/Common.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Header = () => {
  const {logOut, user} =useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
    .then(() =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout !'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logout!',
            'Your account has been logouted.',
            'success'
          )
        }
      })
    })
   
  }


  const menuItems = <>
  <li className='font-semibold'><Link to='/'>Home</Link></li>
  <li className='font-semibold'><Link to='/services'>Services</Link></li>
  <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
  <>
  {
    user?.email ?
     <>
      <li className='font-semibold'><Link to='/review'>Review</Link></li>
     <li className='font-semibold'><button onClick={handleLogOut} className="btn btn-primary">Log Out</button></li>
     </> 
     : 
     <>
     <li className='font-semibold'><Link to='/login'>Login</Link></li>
     <li className='font-semibold'><Link to='/register'>Register</Link></li>
     </>
  }
  </>
 
  
</>
  return (
    <div className='border-b-2 mb-3'>
      <div className="navbar bg-base-100 common-w">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {
            menuItems
          }

            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {
            menuItems
          }
          </ul>
        </div>
        <div className="navbar-end">
        
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;