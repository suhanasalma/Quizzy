import React from 'react';

const Option = ({ option }) => {
  return (
    <div className="p-3  ">
      {/* <h1 className='border option h-28'>{option}</h1> */}
      {/* <div className="form-control border option h-28 ">
        <label className="label cursor-pointer">
          <span className="label-text  m-auto ">{option}</span>
          <input
            type="radio"
            name="radio-6"
            className="radio checked:bg-red-500"
            checked
          />
        </label>
      </div> */}
      <div className="form-control">
        <label className="label cursor-pointer border option h-28">
          <span className="label-text m-auto">{option}</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default Option;