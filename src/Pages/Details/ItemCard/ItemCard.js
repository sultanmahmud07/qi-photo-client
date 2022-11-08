import React from 'react';

const ItemCard = ({item}) => {
  const {url, date} =item
  console.log(item);
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={url} alt="Shoes" /></figure>
  <div className="card-body">
    <p>Date: {date}</p>
  </div>
</div>
    </div>
  );
};

export default ItemCard;