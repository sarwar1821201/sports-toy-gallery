import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyToy = () => {

   const updateToyPage = useLoaderData();
     console.log(updateToyPage)
     const { _id, name,photo,price,ratings,sellerName,sellerEmail,quantity,details} = updateToyPage;

    const handleUpdate = (event) => {
        event.preventDefault();
        const name= event.target.name.value;
        const quantity= event.target.quantity.value;
        const sellerName= event.target.sellerName.value;
        const price= event.target.price.value;
        const sellerEmail= event.target.sellerEmail.value;
        const details= event.target.details.value;
        const ratings=event.target.ratings.value;
        
    
        console.log(name,quantity,sellerName,price,sellerEmail,details,ratings)
        const updateToy ={
            toyName:name,
            toyQuantity:quantity,
            toySellerName:sellerName,
            toySellerEmail:sellerEmail ,
            toyDetails:details,
            toyPrice:price,
            toyRatings:ratings
        }
        console.log(updateToy);

        fetch(`https://sports-toy-server.vercel.app/updateSingleToy/${_id}`, {

        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updateToy)
    })
    .then(res=> res.json() )
    .then(data =>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Success!',
                text: 'Toy Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              event.target.reset();
        }
    } )

    }


    return (
        <div>
            <h2 className='text-center text-3xl mt-3 mb-3'  >Update our {name}'s Toy </h2>

            <form onSubmit={handleUpdate} >
    {/* form name and quantity row */}
       <div className="md:flex">

     <div className="form-control md:w-1/2 "  >
        <label className="label">
       <span className="label-text" > Toy Name </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Toy Name" name="name" defaultValue={name}  className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" > Avaliable Quantity </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Quantity" name='quantity' defaultValue={quantity} className="input input-bordered w-full " />
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
         <input type="text" placeholder="seller Name" name="sellerName" defaultValue={sellerName}  className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" > Price </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Price" name='price' defaultValue= {price} className="input input-bordered w-full " />
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
    <input type="text" placeholder="ratings" name="ratings" defaultValue={ratings} className="input input-bordered w-full " />
  </label>

</div>

<div className="form-control md:w-1/2 ml-4"  >
   <label className="label">
  <span className="label-text" >Details </span>
   </label>
  
  <label className="input-group" >
    {/* <span>Name</span> */}
    <input type="text" placeholder="Details" name='details' defaultValue={details} className="input input-bordered w-full " />
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
    <input type="text" placeholder='Seller Email' name='sellerEmail'  defaultValue={sellerEmail}  className="input input-bordered w-full " />
  </label>

</div>

{/* <div className="form-control md:w-1/2 ml-4"  >
   <label className="label">
  <span className="label-text" > Sub Category </span>
   </label>
  
   <select name="subCategory" className="select select-primary w-full max-w-xs">
  <option disabled selected>Select Sub Category</option>
  <option value='cricketToy' >Cricket Toy</option>
  <option value='footballToy' >Football Toy</option>
  <option value='hockeyToy' >Hockey Toy</option>
</select>

</div> */}

  </div>


       {/* form photo row */}
      
       {/* <div className="md:flex">

     <div className="form-control md:w-full "  >
        <label className="label">
       <span className="label-text" > Photo Url </span>
        </label>
       
       <label className="input-group" >
         
         <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered w-full " />
       </label>

     </div>

   

       </div> */}

       <input type="submit" value="Update Toy" className="btn btn-block mt-4 bg-indigo-600 " />

      </form>

        </div>
    );
};

export default UpdateMyToy;