import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const {title} =useLoaderData();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Details;