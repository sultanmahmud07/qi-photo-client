import React from 'react';
import './Blog.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Blog = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blog-Qi-Photo</title>
      </Helmet>
      <div className='common-w'>
      <div className=" text-center d-block">
        <h1 className='blog-title topic-header text-5xl py-4 font-semibold my-5'>These are Blogs!!!</h1>
      </div>
      <div className="container mt-2">
        <div className="single-question">
          <div className="title-wrapper">
            <div >
              <h2 className="q-title">1. Difference between SQL and NoSQL</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">2. What Is JWT? How Does It Work? </h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
        </div>

        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">3. What is the difference between javascript and Node JS</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
          
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">4. how does Node JS handle multiple requests at the same time?</h2>
            </div>
          </div>
        
          <p className='q-p'><span className='ans'>Ans:</span>  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
          
        </div>
      </div>
      

    </div>
    </HelmetProvider>
  );
};

export default Blog;