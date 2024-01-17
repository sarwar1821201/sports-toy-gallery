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
          Tell us the difference between nodejs and express js.
          </h5>
          <p className="text-justify">
            <h3 className='text-yellow-700 text-3xl'>Node.js:</h3>
            Description: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, outside of a web browser.
            <br />
            <ul > <span className='text-yellow-700 text-3xl'> Features:</span> 
                <li>Asynchronous and event-driven: Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and well-suited for handling concurrent connections.</li>
                <li>Single-threaded: Although Node.js is single-threaded, it can handle concurrent operations efficiently through events and callbacks.</li>
                <li>Large module ecosystem: Node.js has a vast ecosystem of open-source libraries and packages available through npm (Node Package Manager).</li>
            </ul>
              <br />
            <h3 className='text-yellow-700 text-3xl'>Express js:</h3>
            Description: Express.js is a web application framework for Node.js. It simplifies the process of building robust, scalable, and maintainable web applications by providing a set of features for web and mobile applications.

            <ul > <span className='text-yellow-700 text-3xl'> Features:</span> 
            <li>Middleware: Express.js uses middleware functions that have access to the request and response objects. Middleware functions can perform tasks such as authentication, logging, and more.</li>
            <li>Routing: Express.js provides a simple and effective way to define routes for handling HTTP requests.</li>
            <li>Template engines: Express.js supports various template engines, like EJS, Pug, and Handlebars, making it flexible for rendering dynamic content on the server side.</li>

            </ul>

          </p>
         
         </div>

         
        <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-600 text-4xl font-bold mb-6">
          What is a custom hook, and why will you create a custom hook?
          </h5>
          <p className="text-justify">
          A custom hook in React is a JavaScript function whose name starts with "use" and that may call other hooks. Custom hooks allow you to reuse stateful logic across multiple components in a React application. They are a way to extract component logic into a reusable function, enabling better code organization, sharing of logic, and creating more maintainable and modular components.
          </p>
         
         </div>
        </div>
    );
};

export default Blog;