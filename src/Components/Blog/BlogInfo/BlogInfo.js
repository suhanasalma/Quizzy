import React from 'react';

const BlogInfo = ({ information }) => {
   const {img, name,details} = information
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full sm:m-auto md:m-0 blog-info">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
      </div>
    </div>
  );
};

export default BlogInfo;