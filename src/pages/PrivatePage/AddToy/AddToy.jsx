import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
 
  const {user} = useContext(AuthContext);

   const handleAddToy = (event) =>{
    event.preventDefault();
    const name= event.target.name.value;
    const quantity= event.target.quantity.value;
    const sellerName= event.target.sellerName.value;
    const price= event.target.price.value;
    const sellerEmail= event.target.sellerEmail.value;
    const details= event.target.details.value;
    const photo= event.target.photo.value;
    const ratings=event.target.ratings.value;
    const subCategory= event.target.subCategory.value;

    console.log(name,quantity,sellerName,price,sellerEmail,details,photo,ratings,subCategory)

    const newToyDetails= {
        name:name, quantity:quantity,
        sellerName:sellerName,
        sellerEmail:sellerEmail,
        price:price,
        details:details,
        photo:photo,
        ratings:ratings,
        subCategory:subCategory
    }
      fetch('https://sports-toy-server.vercel.app/toyItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newToyDetails)
      }  )

      .then(res=> res.json() )
      .then(data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Your Toy Has Been Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              event.target.reset();
        }
      } )
   
   }

    return (
        <div>
            <h2 className='text-center text-3xl mb-4 ' >Add Your Toys</h2>
            <form onSubmit={handleAddToy} >
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
         <input type="text" placeholder="seller Name" name="sellerName" defaultValue={user?.displayName}  className="input input-bordered w-full " />
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
    <input type="text" placeholder='Seller Email' name='sellerEmail'  defaultValue={user?.email}  className="input input-bordered w-full " />
  </label>

</div>

<div className="form-control md:w-1/2 ml-4"  >
   <label className="label">
  <span className="label-text" > Sub Category </span>
   </label>
  
   <select name="subCategory" className="select select-primary w-full max-w-xs">
  <option disabled selected>Select Sub Category</option>
  <option value='cricketToy' >Cricket Toy</option>
  <option value='footballToy' >Football Toy</option>
  <option value='hockeyToy' >Hockey Toy</option>
</select>

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