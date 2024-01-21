import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {

    const [error,setError] = useState('');
  const [success, setSuccess] = useState ('');
  const [show, setShow] = useState(false);

  const {createUser, userProfileUpdate } = useContext(AuthContext)

  const handleSignUp= (event)=>{
    event.preventDefault();
    const name= event.target.name.value;
    const email= event.target.email.value;
    const password= event.target.password.value;
    const photo= event.target.photo.value;
    console.log(name,email,password)

    setError('')
    setSuccess('')

    if (password.length < 6) {
        setError('PassWord Must Be 6 Character or longer');
        return;
      }

      createUser (email,password)
      .then( (result) =>{

       const loggedUser= result.user;
       console.log(loggedUser);
       userProfileUpdate(name,photo);
       setSuccess('congratulations!! Registration Successfully Completed')
       setError('')
       event.target.reset()

      } )

      .catch( error =>{
          console.log(error)
          setError(error.message)
          setSuccess(' ')
      } )

  }




    return (
        <div>
            <h2>Please Register</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Please Register</h1>
    </div>

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form className="card-body"  onSubmit={handleSignUp}  >

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name'  placeholder="enter Your Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="enter your email" className="input input-bordered" required />
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="enter your password" className="input input-bordered" required />

          </div> */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="photo url" className="input input-bordered"  />
        </div>

        <p className='mt-2' onClick={()=> setShow(!show) } > 
         
         {
                 show ?  <h5>Hide Password</h5> : <h5>Show Password</h5>
             }
       </p>


        <div className="form-control mt-2">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

        <p className='mt-2 mb-3 text-red-700' >  {error} </p>
        <p className='mt-2 mb-3 text-red-700' > {success} </p>

           {/* link login */}
           <Link to='/login' >
      <button className="btn btn-link m-2">Already Have Account? Please Login  </button>
      </Link>

    </div>
  </div>
</div>
        </div>
    );
};

export default Register;