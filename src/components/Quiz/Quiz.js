import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Startquiz from '../Startquiz/Startquiz';

const Quiz = () => {
    const loader=useLoaderData()
   
    const quizs=loader.data.questions
   
       
    
    return (
        <div>
            <h1 class="text-blue-500 font-bold mt-12 text-center text-2xl">Quiz Of   {loader.data.name}</h1>
            <div>
               
            {
                quizs.map((quiz,idx)=><Startquiz  key={idx} idx={idx+1} quiz={quiz}></Startquiz>)
                
            }
          
            </div>
        </div>
    );
};

export default Quiz;