import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const MyToy = () => {
   const {user} = useContext(AuthContext);
// const myToys = useLoaderData()
  const [bookings, setBookings ] = useState([])
    
  const url= `http://localhost:5000/getSomeToy?email=${user.email}` ;
   useEffect( ()=> {
     fetch(url)
     .then(res=> res.json() )
     .then(  data => {
          setBookings(data)
     } )

   } ,[] )

    return (
        <div>
            <h2 className='mt-3 mb-4 text-center text-3xl' >Here Are Yours Toys Collections : {bookings.length} </h2>
        </div>
    );
};

export default MyToy;