import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import img from '../../Assat/photos/my-photo2.jpg';

const About = () => {
  return (
    <div className='my-20'>
      <div className="common-w">
       
        <div className="flex flex-col lg:flex-row justify-between">
          <div className='w-full lg:w-1/2'>
           <PhotoProvider>
            <PhotoView className="w-full" src="https://placeimg.com/260/400/arch">
            <img src={img} className=" w-full shadow-2xl" />
            </PhotoView>
           </PhotoProvider>
          </div>
          <div className='w-full bg-slate-200 p-3 lg:p-5 lg:w-1/2'>
            <h1 className="text-4xl text-blue-900 font-bold">About me !!</h1>
            <p className="py-6">Hello sir, my name is Sultan Mahmud. I am a professional photographer. I am working in the same department for last 6 years. I have done a lot of freelance work at home and abroad. Click the button below if you want to take my service. Thank you!</p>
            <div className='lg:pt-4'>
              <Link to='/services'><button className="btn btn-primary">My Services</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;