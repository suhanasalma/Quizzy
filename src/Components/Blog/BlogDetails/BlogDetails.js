import React from 'react';

const BlogDetails = ({ information }) => {
      const { img, name, details } = information;
  return (
    <div className='mb-20 w-9/12 m-auto blog-details'>
      <img src={img} className='w-80 ' alt="" />
      <h1 className='text-2xl font-bold my-5'>{name}</h1>
      <p>{details}</p>
    </div>
  );
};


export default BlogDetails;