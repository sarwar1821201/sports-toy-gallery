import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {

   const {user, logOut }= useContext(AuthContext);

   const handleLogout= () =>{

    logOut()
    .then( (result) => {} )
    .catch( error => {
       console.log (error)
    } )

  }


    const navItems = <>
    <li><NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Home
        </NavLink></li>
         <li> <NavLink
         to='/allToy'
         className={({ isActive }) => (isActive ? 'active' : 'default')}
       >
         All Toy
       </NavLink> </li>
   <li> <NavLink
          to='/blog'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Blog
        </NavLink> </li>
   
       {
          user &&  <li> <NavLink
          to='/myToy'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          My Toys
        </NavLink> </li>
       }

        {
          user &&  
          
          <li> <NavLink
          to='/addToy'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Add Toy
        </NavLink> </li>
       
        }
   {/* {
     user?.email ? <>  
      <li> <Link to='/bookings' >Bookings</Link> </li>
     <li> <button onClick={handleLogout}  > Logout</button> </li>    </>   : 
     <li> <Link to='/login' >Login</Link> </li>


   } */}
</>


    return (
        <div>

<div className="navbar bg-cyan-100 h-28 mb-4 ">


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
    <Link to='/' className='inline-flex items-center'>
            <img className='h-12 w-12 rounded-full'  src="https://i.ibb.co/MMYZdMq/photo-1540747913346-19e32dc3e97e-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
             {/* <BoltIcon className='h-7 w-7 text-blue-500'></BoltIcon> */}
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'> <Link to='/' >Sports Gallery</Link>  </span>
        </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navItems}
    </ul>
  </div>
  <div className="navbar-end">
 {
  user ? (  <div className="flex gap-2 items-center ">
  <img
    className="h-12 w-12 lg:h-20 lg:w-20 rounded-full "
    src={user.photoURL ? user.photoURL : "can not loaded"}
    data-tooltip-content={user.displayName ? user.displayName : ""}
   
  />
   <button onClick={handleLogout}  className="btn bg-yellow-700" >Logout</button>
  
</div> )   : ( <Link to='/login'> <button className="btn btn-outline btn-warning">Login</button>  </Link>)
 }

  </div>
</div>
            
        </div>
    );
};

export default Header;