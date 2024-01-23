import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({singleToy}) => {

     console.log(singleToy)
     const { _id, name,photo,price,ratings} = singleToy

    return (
        <div>
               <div className="card w-90 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> Name: {name}</h2>
    <p> Price: $ {price}</p>
    <p>Ratings: {ratings}</p>
    <div className="card-actions justify-end">
      <Link to={`/singleToyDetails/${_id}`}  >  <button className="btn btn-primary">View Details</button>   </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleToy;