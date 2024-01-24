import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   
    const {error, status}= useRouteError()


    return (
        <div className='mt-8 flex flex-col items-center justify-center' >
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src="https://i.ibb.co/zNQ9M7W/photo-1633078654544-61b3455b9161-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">OOPS!</h2>
<p>Error From : {error.message} </p>
<div className="card-actions justify-end">
  <Link to='/'> <button className="btn btn-primary">Back To Home</button>  </Link>
</div>
</div>
</div>
    </div>
    );
};

export default ErrorPage;