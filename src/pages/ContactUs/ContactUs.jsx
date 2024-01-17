import React from 'react';

const ContactUs = () => {

  


    return (
        <div className='bg-green-100 mt-2 mb-4'  >
            <h2 className='text-center text-3xl mt-2'>Any Query? Please Send Message</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Write Message</span>
          </label>
          <input type="text" placeholder="message" className="input input-bordered"  />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactUs;