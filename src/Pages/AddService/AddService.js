import React from 'react';

const AddService = () => {
  return (
    <div className='common-w'>
      <div>
        <form className='max-w-2xl mx-auto my-11 py-10 p-6 shadow-xl'>
          <h1 className='text-center text-4xl py-10'>Add your product</h1>
          <span className='p-3 text-xl mt-4'>Service Name</span>
          <input type="text" name='title' placeholder="enter service title" className="input input-bordered input-primary w-full" />
          <span className='p-3 text-xl'>Service Description</span>
          <input type="text" name='Desc' placeholder="enter service description" className="input input-bordered input-primary w-full" />
          <span className='p-3 text-xl'>Price</span>
          <input type="text" name='price' placeholder="enter service price" className="input input-bordered input-primary w-full" />
          <span className='p-2 text-xl mt-4'>Rating</span>
          <input type="text" name='rating' placeholder="Type here" className="input input-bordered input-primary w-full" />
          <span className='p-2 text-xl mt-4'>Title</span>
          <input type="file" className="file-input file-input-bordered file-input-primary w-full " />
          <input type="submit" value='Add Product' className='my-5 w-full bg-primary text-white font-bold text-xl p-3' />
        </form>
      </div>
    </div>
  );
};

export default AddService;