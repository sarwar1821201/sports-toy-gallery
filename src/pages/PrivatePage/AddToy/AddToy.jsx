import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const AddToy = () => {
 
  const {user} = useContext(AuthContext)

    return (
        <div>
            <h2 className='text-center text-3xl' >Add Your Toys</h2>
            <form  >
    {/* form name and quantity row */}
       <div className="md:flex">

     <div className="form-control md:w-1/2 "  >
        <label className="label">
       <span className="label-text" > Toy Name </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Toy Name" name="name" className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" > Avaliable Quantity </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered w-full " />
       </label>

     </div>

       </div>

       {/* form supplier and test row */}
       <div className="md:flex">

     <div className="form-control md:w-1/2 "  >
        <label className="label">
       <span className="label-text" > Seller Name </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" value={user?.displayName}  className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" > Price </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Price" name='price' className="input input-bordered w-full " />
       </label>

     </div>

       </div>

       {/* seller email and select sub  category */}

       <div className="md:flex">

<div className="form-control md:w-1/2 "  >
   <label className="label">
  <span className="label-text" > Seller Email </span>
   </label>
  
  <label className="input-group" >
    {/* <span>Name</span> */}
    <input type="text" value={user?.email}  className="input input-bordered w-full " />
  </label>

</div>

<div className="form-control md:w-1/2 ml-4"  >
   <label className="label">
  <span className="label-text" > Price </span>
   </label>
  
  <label className="input-group" >
    {/* <span>Name</span> */}
    <input type="text" placeholder="Price" name='price' className="input input-bordered w-full " />
  </label>

</div>

  </div>




       {/* form category and details row */}
       <div className="md:flex">

     <div className="form-control md:w-1/2 "  >
        <label className="label">
       <span className="label-text" >Ratings </span>
        </label> 
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="ratings" name="ratings" className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" >Details </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Details" name='details' className="input input-bordered w-full " />
       </label>

     </div>

       </div>


       {/* form photo row */}
       <div className="md:flex">

     <div className="form-control md:w-full "  >
        <label className="label">
       <span className="label-text" > Photo Url </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered w-full " />
       </label>

     </div>

   

       </div>

       <input type="submit" value="Add Coffee" className="btn btn-block mt-4 bg-indigo-600 " />

      </form>
        </div>
    );
};

export default AddToy;