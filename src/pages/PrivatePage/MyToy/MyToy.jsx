import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import MyToyRow from './MyToyRow';

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

   } ,[url] )

    return (
        <div>
            <h2 className='mt-3 mb-4 text-center text-3xl' >Here Are Yours Toys Collections : {bookings.length} </h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Seller Email</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Details</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      
      {
         bookings.map ( (booking ) => <MyToyRow  
           key={booking._id}
           booking={booking}
         > 


         </MyToyRow>   )
      }
     
    </tbody>
    
   
    
  </table>
</div>


        </div>
    );
};

export default MyToy;