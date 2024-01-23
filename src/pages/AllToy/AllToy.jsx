   import React from 'react';
import { useLoaderData } from 'react-router-dom';
   
   const AllToy = () => {

    const allToys = useLoaderData();

    return (
        <div>
            <h2 className='text-center text-3xl mb-4 mt-3 bg-cyan-100' > Heres Our All Toy Collections: {allToys.length}  </h2>
        </div>
    );
   };
   
   export default AllToy;