import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';



const Topics = () => {
    const loader=useLoaderData()
    const datas=loader.data
    return (
        <div>
            <h1 class="text-center font-bold text-2xl  md:mt-4 mt-64 text-blue-500"> Prectise Quiz</h1>
            <div class="flex items-center flex-col md:flex-row justify-center">
            {
                datas.map(data=><Topic key={data.id}data={data}></Topic>)
            }
            </div>
         
        </div>
    );
};

export default Topics;