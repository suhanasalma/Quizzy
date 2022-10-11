import React from 'react';
// import logo1 from "../Images/1.png";
// import logo2 from "../Images/2.png";
// import logo3 from "../Images/3.png";
import logo1 from '../../Images/1.png';
import logo2 from '../../Images/2.png';
import logo3 from '../../Images/3.png';

const HomeLeft = () => {

   return (
     <div className="p-5 sm:flex sm:flex-row lg:flex-col sm:justify-center">
       <section className="flex items-center justify-around sm:flex-col lg:flex-row md:mt-20">
         <img
           className="w-36 h-36 object-cover rounded-full mr-5 sm:hidden  md:block"
           src={logo1}
           alt=""
         />
         <div className="mr-5">
           <h1 className="text-2xl font-bold left-title">Welcome</h1>
           <p className="">quizzy</p>
         </div>
       </section>
       <section className="flex items-center justify-around md:mt-20 sm:flex-col lg:flex-row">
         <img
           className="w-36 h-36 object-cover rounded-full mr-5 sm:hidden md:block"
           src={logo2}
           alt=""
         />
         <div className="mr-5">
           <h1 className="text-2xl font-bold left-title">Send Answer</h1>
           <p>judge yourself</p>
         </div>
       </section>
       <section className="flex items-center justify-around md:mt-20 sm:flex-col lg:flex-row">
         <img
           className="w-36 h-36 object-cover rounded-full mr-5 sm:hidden md:block"
           src={logo3}
           alt=""
         />
         <div className="mr-5">
           <h1 className="text-2xl font-bold left-title">Thank You</h1>
           <p>for participating</p>
         </div>
       </section>
     </div>
   );
};

export default HomeLeft;