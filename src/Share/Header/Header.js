import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../CommonStyles/Common.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';


const Header = () => {
  const {logOut, user} =useContext(AuthContext);
  // console.log(user?.displayName);
  console.log(user?.photoURL);


  const handleLogOut = () => {
    logOut()
    .then(() =>{
      Swal.fire(
        'Logout Successfully!',
        'You clicked the button!',
        'success'
      )
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
      <li className='font-semibold'><Link to='/review'>My Review</Link></li>
      <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
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
    <div className='border-b-2 h-color mb-3'>
      <div className="navbar  common-w">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow h-color rounded-box w-52">
          {
            menuItems
          }

            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl"><span className='q'>Q</span><span className='i'>i</span>-Photo</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {
            menuItems
          }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.photoURL ?
             <>
                <span className='user-name mr-1 sm:block hidden'>{user?.displayName}</span>
          <img className='w-12 rounded-full' src={user?.photoURL} alt="" />
             </>
              :
               <>
               <span className='user-name mr-1'>User Name</span>
               <FaUserCircle className='text-5xl'></FaUserCircle>
               </>
          }
          
         
          
         
        </div>
      </div>
    </div>
  );
};

export default Header;