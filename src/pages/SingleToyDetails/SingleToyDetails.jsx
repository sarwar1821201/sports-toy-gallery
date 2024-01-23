import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {

    const singleToyDetails = useLoaderData();
    console.log(singleToyDetails)
    const {  name,photo,price,ratings,sellerName,sellerEmail,quantity,details} = singleToyDetails


    return (
        <div>
            <h2 className='text-center text-3xl mb-3 ' > Heres the Details Of Our {name} Toy Products </h2>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='w-96' src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Name: {name}  
    </h2>
    <h4>Seller Name: {sellerName} </h4>
    <h5>Seller Email: {sellerEmail} </h5>
    <p>Price: ${price}</p>
    <p>Avaliable Quantity: {quantity} </p>
    <p>Ratings: {ratings} </p>
    <p>Details: {details} </p>
  </div>
</div>
        </div>
    );
};

export default SingleToyDetails;