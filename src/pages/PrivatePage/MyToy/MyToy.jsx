import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';

const MyToy = () => {
   const {user} = useContext(AuthContext);
// const myToys = useLoaderData()
  const [bookings, setBookings ] = useState([])
    
  const url= `https://sports-toy-server.vercel.app/getSomeToy?email=${user.email}` ;
   useEffect( ()=> {
     fetch(url)
     .then(res=> res.json() )
     .then(  data => {
          setBookings(data)
     } )

   } ,[url] )

    const handleDelete=(_id) => {
        console.log('delete tomake kore dilam' , (_id) )

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
              console.log('delete confirm')
             
              fetch(`https://sports-toy-server.vercel.app/deleteToyItem/${_id}`, {
                method: 'DELETE'
              }  )
              .then(  res=> res.json() )
              .then(data=> {
                console.log(data)
                if(data.deletedCount >0 ){
                     Swal.fire({
                title: "Deleted!",
                text: "Your Toy Item has been deleted.",
                icon: "success"
              });
                  const remaining = bookings.filter ( bo => bo._id !== ! _id )
                  setBookings(remaining)
                }
              })
  
            }
          });


    }

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
           handleDelete={handleDelete}
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