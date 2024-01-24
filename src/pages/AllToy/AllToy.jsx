   import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../SingleToy/SingleToy';
import useTitle from '../../hooks/useTitle';

   
   const AllToy = () => {

    const allToys = useLoaderData();
   // console.log(allToys)
    useTitle('AllToys')

    return (
        <div>
            <h2 className='text-center text-3xl mb-4 mt-3 bg-cyan-100' > Heres Our All Toy Collections: {allToys.length}  </h2>

            <div className='mt-4 mb-4 gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >

                {
                    allToys.map ( (singleToy) => <SingleToy  
                      key={singleToy._id}
                      singleToy={singleToy}
                    >

                    </SingleToy>  )
                }

            </div>

        </div>
    );
   };
   
   export default AllToy;