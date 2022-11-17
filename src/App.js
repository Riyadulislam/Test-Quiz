
import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';




function App() {
   const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>

        },
        {
        path:'/topics',
        loader:()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Topics></Topics>
      },
      {
        path:'/course/:courseId',
        loader: ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`);
        },
        element:<Quiz></Quiz>
      },
      {
        path:'/statistics',
        loader:()=>{
        return  fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Statistics></Statistics>
      },
      {
         path:'/blog',
         element:<Blog></Blog>
      }
    ]
    },
    {
      path:'*',
      element:<div class="text-center mt-8 font-bold">
        <h1 >Not Found 404</h1>
        <h1>Oops! You're lost.
          The page you are looking for was not found</h1>
      </div>
    }
   ])
    
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
   
     
    </div>
  );
}

export default App;
