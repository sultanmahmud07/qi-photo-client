import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const About = () => {
  return (
    <div>
      <div className="common-w">
        <div className='py-5'>
          <h1 className='text-6xl text-primary text-center'>About Me !</h1>
          <p className='lg:w-2/4 text-center m-auto py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quasi eos id cum illo tenetur magnam deleniti. Tenetur, necessitatibus reprehenderit.</p>

        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className='w-full lg:w-1/2'>
           <PhotoProvider>
            <PhotoView className="w-full" src="https://placeimg.com/260/400/arch">
            <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
            </PhotoView>
           </PhotoProvider>
          </div>
          <div className='w-full lg:w-1/2'>
            <h1 className="text-2xl font-bold">About me !!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;