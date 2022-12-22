import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault()
    console.log('object');
    navigate('/')
    // form.reset()
  }
  return (
    <div className='common-w'>
      <div>
        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto my-11 py-10 p-6 shadow-xl'>
          <h1 className='text-center text-4xl uppercase py-8 font-semibold'>Add your Service</h1>
          <span className='p-3 text-xl mt-4'>Service Name</span>
          <input type="text" name='title' placeholder="enter service title" required className="input input-bordered input-primary w-full" />
          <span className='p-3 text-xl'>Service Description</span>
          <input type="text" name='Desc' placeholder="enter service description" required className="input input-bordered input-primary w-full" />
          <span className='p-3 text-xl'>Price</span>
          <input type="text" name='price' placeholder="enter service price" required className="input input-bordered input-primary w-full" />
          <span className='p-2 text-xl mt-4'>Category</span>
          <select className="select select-primary w-full" required>
            <option disabled selected>Select Category</option>
            <option>Sports Photography</option>
            <option>Wedding photography</option>
            <option>Portrait Photography</option>
            <option>Fashion Photography</option>
            <option>Architectural Photography</option>
            <option>Still Life Photography</option>
          </select>
          <span className='p-2 text-xl mt-4'>Photo</span>
          <input type="file" className="file-input file-input-bordered file-input-primary w-full " required />
          <input type="submit" value='Add Product' className='my-5 w-full bg-primary text-white font-bold text-xl p-3' />
        </form>
      </div>
    </div>
  );
};

export default AddService;