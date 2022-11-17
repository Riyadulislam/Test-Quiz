import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Course = ({course}) => {
  
    const {id,name,logo}=course
    return (
        <div class="border border-gray-900 m-12 p-7 bg-gray-900">
            <img src={logo} alt="" />
            <div class="flex justify-between mt-2">
            <h1 class="text-gray-100 font-bold">{name}</h1>
            <button class="border p-1  bg-blue-500 font-bold">
                <Link to={`/course/${id}`}>Start Prectise   <FontAwesomeIcon icon={faArrowRight} /></Link>
            </button>
            </div>
           
       
        </div>
    );
};

export default Course;