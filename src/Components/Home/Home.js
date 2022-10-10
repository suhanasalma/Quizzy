import React from 'react';
import './Home.css';
import HomeRight from './HomeRight/HomeRight';


const Home = () => {

   return (
     <div className="flex h-screen home">
       <section className="flex-none w-96 side-section m-16 rounded-3xl">
         <HomeRight/>
       </section>
       <section className="flex-1 bg-amber-300 rounded-3xl my-16 mr-16 right-section">
         <h2>hello2</h2>
       </section>
     </div>
   );
};

export default Home;