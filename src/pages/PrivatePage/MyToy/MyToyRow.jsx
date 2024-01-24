import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({booking , handleDelete }) => {
     
    console.log(booking)
    const { _id, name,photo,price,ratings,sellerName,sellerEmail,quantity,details} = booking;


    return (
        
            
            <tr>
        <th>

       <Link to={`/updateMyToy/${_id}`} >  <button  className="btn btn-ghost btn-xs">Update </button>  </Link>
       
        </th>

        <td>
          
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {
                    photo && <img src={photo} alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            
          
        </td>
        <td>
          {sellerEmail}
        
        </td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td>{details}</td>

        <th>
          
            
             <button onClick={ ()=> handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
          
        </th>
      </tr>


        
    );
};

export default MyToyRow;