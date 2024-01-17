import React from 'react';

const Blog = () => {
    return (
        <div>
             <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-700 text-4xl font-bold mb-6">
          What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h5>
          <p className="text-justify">
           <h2 className='text-3xl'>Access Token:</h2>
           <ol>
            <li>Credential representing authorization.</li>
            <li>Allows client access to protected resources.</li>
            <li>Short-lived, obtained after authentication.</li>
           </ol>
            <br></br>
          <h2 className='text-3xl'>Refresh Token:</h2>
          <ol>
          <li>Credential used to get a new access token.</li>
          <li> Long-lived, reduces user re-authentication. </li>
          <li> Stored securely on the client side.  </li>
          </ol>
       <br></br>
       <h2 className='text-3xl'>Storage on Client-Side:</h2>
       <p>Access Token: Often in memory, included in requests.</p>
       <p> Refresh Token: Secure storage (e.g., HTTP-only cookie). Prevent unauthorized access. Use HTTPS.</p>
          </p>
        </div>



        <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-600 text-4xl font-bold mb-6">
          Compare SQL and NoSQL databases?
          </h5>
          <p className="text-justify">
          <h2 className='text-3xl'>SQL Databases:</h2>
          <ol>
            <li>Relational, structured data.</li>
            <li>Fixed schema.</li>
            <li>ACID properties.</li>
            <li>Examples: MySQL, PostgreSQL.</li>
          </ol>
          <br />
          <h2 className='text-3xl'>NoSQL Databases:</h2>
          <ol>
            <li>Non-relational, unstructured data.</li>
            <li>Dynamic schema.</li>
            <li>Often better for horizontal scaling.</li>
            <li>Examples: MongoDB, Cassandra.</li>
          </ol>
          </p>
         
         </div>

         <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-600 text-4xl font-bold mb-6">
          What is express js? What is Nest JS ?
          </h5>
          <p className="text-justify">
            <h3 className='text-yellow-700 text-3xl'>Express js:</h3>
            
            <ol > 
                <li>Express.js is a minimal and flexible Node.js web application framework.</li>
                <li>It simplifies the process of building robust and scalable web applications and APIs</li>
                <li>It provides a set of features for web and mobile application development.</li>
            </ol>
              <br />
            <h3 className='text-yellow-700 text-3xl'>Nest js:</h3>
           

            <ol > 
            <li>NestJS is a full-featured, extensible Node.js framework for building scalable and maintainable server-side applications.</li>
            <li>It is built on top of Express.js and adds an additional layer of abstraction using TypeScript.</li>
            <li>NestJS is designed with a modular architecture, making it suitable for building complex and scalable applications.</li>

            </ol>

          </p>
         
         </div>

         
       
        </div>
    );
};

export default Blog;