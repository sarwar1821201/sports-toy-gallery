import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToy = () => {

   const updateToy = useLoaderData();
     console.log(updateToy)
     const { _id, name,photo,price,ratings,sellerName,sellerEmail,quantity,details} = updateToy;
    return (
        <div>
            <h2>Helloooooooopoo : {name} </h2>
        </div>
    );
};

export default UpdateMyToy;