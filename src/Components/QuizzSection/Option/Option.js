import React from 'react';
 import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, item }) => {

  const rightAns = (e) => {
   console.log(item.correctAnswer)
    if(e.target.innerText === item.correctAnswer){
      toast("Correct Ans");
      
    }else{
      toast("Wrong Ans");
    }
  };

  return (
    <div className="p-3 ">
      <div className="form-control">
        <label className="label cursor-pointer border option sm:h-fit lg:h-32">
          <span
            onClick={rightAns}
            className="label-text m-auto font-medium xl:text-lg"
          >
            {option}
          </span>
          <ToastContainer />
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default Option;