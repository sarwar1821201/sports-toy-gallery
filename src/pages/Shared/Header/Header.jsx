import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {


    const navItems = <>
    <li><NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Home
        </NavLink></li>
   <li> <NavLink
          to='/blog'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Blog
        </NavLink> </li>
   {/* {
     user?.email ? <>  
      <li> <Link to='/bookings' >Bookings</Link> </li>
     <li> <button onClick={handleLogout}  > Logout</button> </li>    </>   : 
     <li> <Link to='/login' >Login</Link> </li>


   } */}
</>


    return (
        <div>

<div className="navbar bg-base-100 h-28 mb-4 ">


  <div className="navbar-start">
    
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>

    
       
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {navItems}
      
      </ul>
    </div>
    {/* <Link to='/' className="btn btn-ghost text-xl">  <img src='' alt="hello" srcset="" /> </Link> */}
    

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to='/'> <button className="btn btn-outline btn-warning">Login</button>  </Link>

  </div>
</div>
            
        </div>
    );
};

export default Header;