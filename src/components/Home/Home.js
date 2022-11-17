import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const background='https://www.learningrevolution.net/wp-content/uploads/2017/06/online-course-failure-47805990_m.jpg'
     const loaderData =useLoaderData()
     const courses=loaderData.data
    
    
    return (
        <div class="mt-64 md:mt-8">
          
          <div class="flex" >
            <div class="mt-8 mx-4">
            <h1 class="font-bold text-2xl text-blue-500 text-center"> Learning Online Becomes Easier</h1>
            <h1 class="text-blue-500 text-center mt-4 text-xl">Academy is a perfect theme for selling and sharing your knowledge online.Try to Complete all Quiz.it's Build up your knowledge. </h1>      
            </div>
             
               <img class="w-1/2"
            src="https://tse1.mm.bing.net/th?id=OIP.ujjx79IwfDCp0QzBUBgD7AHaEs&pid=Api&P=0"
            alt="example"
          />
            </div>
               <div class="flex items-center flex-col md:flex-row justify-center">

               {
                courses.map(course=><Course key={course.id} course={course}></Course>)
              
               }
          </div>
         
        </div>
    );
};

export default Home;