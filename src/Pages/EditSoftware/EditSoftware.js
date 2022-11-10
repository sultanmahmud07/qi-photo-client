import React from 'react';

const EditSoftware = () => {
  return (
    <div className='common-w pb-36'>
      <div>
      <h1 className='text-5xl common-c text-center font-semibold py-20'>My Assistive softwares</h1>
      
      </div>
      <div className='grid grid-cols-1, md:grid-cols-2 lg:grid-cols-3 gap-10'>
       
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Adobe Photoshop CC</h2>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure><img src="https://2.bp.blogspot.com/-RI7xL-Sbm4w/X5WgRUAErXI/AAAAAAAAaPA/tsxoRzyTxgQ96siV5W6mlgOxVAdABHDCACLcBGAsYHQ/s395/Corel%2BPaintShop%2BPro%2BUltimate%2BFull%2Bversion.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Corel PaintShop Pro</h2>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/640px-Adobe_Photoshop_Lightroom_CC_logo.svg.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Adobe Photoshop Lightroom</h2>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure><img src="https://www.wizcase.com/wp-content/uploads/2021/12/Photolab-logo.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">DxO Photolab</h2>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/800px-The_GIMP_icon_-_gnome.svg.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">GIMP</h2>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure><img src="https://pbs.twimg.com/profile_images/1328304623111827456/208liG2c_400x400.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Pixelmator Pro</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSoftware;