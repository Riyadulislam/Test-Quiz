import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast from  'react-hot-toast'

const Option = ({option,correctAnswer}) => {
    const submitAnswer=(correctAnswer)=>{
     
      const writeAns=option;
      if(writeAns==correctAnswer){
        toast.success('Your Answer is Correct !');
      }
      else{
        toast.success('Your Answer is Wrong !');
      }
    }
    return (
        <div class="border  hover:bg-violet-600 border-blue-600 m-4 p-4" onClick={()=>submitAnswer(correctAnswer)}>
         
          
           <button class=' hover:bg-violet-600'>  <li>{option}</li></button>
         
        </div>
    );
};

export default Option;