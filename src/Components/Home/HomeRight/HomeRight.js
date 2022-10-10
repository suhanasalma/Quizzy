import React from 'react';
// import logo1 from "../Images/1.png";
// import logo2 from "../Images/2.png";
// import logo3 from "../Images/3.png";
import logo1 from '../../Images/1.png';
import logo2 from '../../Images/2.png';
import logo3 from '../../Images/3.png';

const HomeRight = () => {

   return (
     <div className="p-5">
       <section className="flex items-center justify-around mt-20">
         <img
           className="w-40 h-40 object-fill rounded-full"
           src={logo1}
           alt=""
         />
         <div>
           <h1 className="text-2xl font-bold right-title">Welcome</h1>
           <p className="">to the quizzy</p>
         </div>
       </section>
       <section className="flex items-center justify-around mt-20">
         <img
           className="w-40 h-40 object-fill rounded-full"
           src={logo2}
           alt=""
         />
         <div>
           <h1 className="text-2xl font-bold right-title">Send Answer</h1>
           <p>judge yourself</p>
         </div>
       </section>
       <section className="flex items-center justify-around mt-20">
         <img
           className="w-40 h-40 object-fill rounded-full"
           src={logo3}
           alt=""
         />
         <div>
           <h1 className="text-2xl font-bold right-title">Thank You</h1>
           <p>for participating</p>
         </div>
       </section>
     </div>
   );
};

export default HomeRight;