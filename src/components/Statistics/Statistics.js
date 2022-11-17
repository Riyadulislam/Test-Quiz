import { useLoaderData } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';



const Statistics = () => {
   
     const loaders=useLoaderData()
     
     const data=loaders.data
   
    
    return (
        <div>
          <h1 class="text-center font-bold text-2xl md:mt-10 mt-64 text-blue-500">Showing total Question Statistics</h1>
                 <div class=" md:mt-20" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="total" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
        
        </div>
    );
};

export default Statistics;