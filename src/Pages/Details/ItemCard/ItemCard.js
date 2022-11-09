import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ItemCard = ({item}) => {
  const {url, date} =item
  // console.log(item);
  return (
    <div>
      <div className="card card-compact cursor-pointer bg-base-100 shadow-xl">
  <PhotoProvider>
    <PhotoView src={url}>
    <figure><img src={url} alt="Shoes" /></figure>
    </PhotoView>
  </PhotoProvider>
  <div className="card-body">
    <p>Date: {date}</p>
  </div>
</div>
    </div>
  );
};

export default ItemCard;