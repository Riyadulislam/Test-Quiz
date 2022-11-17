import React, { useState } from 'react';
import Option from '../Option/Option';
import toast from  'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Startquiz = ({quiz,idx}) => {

   
     const {question,options,correctAnswer,id}=quiz
     const showingAnswer=(correctAnswer)=>{
        toast.success(`Correct Answer::${correctAnswer}`);
     }
  
    return (
        
       
        <div class="border border-blue-600 p-12 lg:w-2/4 flex flex-col justify-center mx-auto m-10 ">
            <div class="ml-auto"> 
            <button class=' hover:bg-violet-600 rounded-full' onClick={()=>showingAnswer(correctAnswer)}><FontAwesomeIcon icon={faEye} /></button>
            
            </div>
            
          <div>
            <div class="flex flex-col lg:flex-row justify-between font-bold text-blue-500">
           <h1 class="text-2xl">Quiz :{idx} {question.slice(3,-4)}</h1>  
           
           </div>
         
       
           {
            options.map((option,idx)=><Option  key={idx}option={option} correctAnswer={correctAnswer}></Option>)
           }
           </div>
        
        </div>
    );
};

export default Startquiz;