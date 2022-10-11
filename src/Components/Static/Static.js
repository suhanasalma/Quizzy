import React, { PureComponent }  from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Static = () => {
   const datas = useLoaderData()
   const data = datas.data
   return (
     <div className="flex justify-center items-center h-screen">
       <ResponsiveContainer width="90%" height="80%">
         <LineChart
           width={700}
           height={600}
           data={data}
           margin={{
             top: 5,
             right: 30,
             left: 20,
             bottom: 5,
           }}
         >
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           <Line
             type="monotone"
             dataKey="total"
             stroke="#B40F30"
             activeDot={{ r: 8 }}
           />
           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
         </LineChart>
       </ResponsiveContainer>
     </div>
   );
};

export default Static;