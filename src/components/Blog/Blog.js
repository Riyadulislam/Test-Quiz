import React from 'react';

const Blog = () => {
    return (
        <div class="mt-64 md:mt-5">
            <h1 class="font-bold text-2xl mt-5 mx-8 text-center text-blue-500"> Answering 3 question</h1>
            <div class="border-4 border-indigo-500/100 m-10 p-5">
            <h1 class="text-blue-600 font-bold"> What is the purpose of React Router?</h1>
            <p>React Router is a standard library system built on top of the React and used to
                 create routing in the React application using React Router Package. It
                  provides the synchronous URL on the browser with data that will be
                   displayed on the web page</p>
          </div>
          <div  class="border-4 border-indigo-500/100 m-10 p-5">
             <h1 class="text-blue-600 font-bold">How Does Context Api Work?</h1>
             <p>Context API is used to pass global variables anywhere in the code.
                 It helps when there is a need for sharing state between a lot of nested components. It is light in weight and 
                easier to use, to create a context just need to call React.createContext ().</p>
                </div>
                <div  class="border-4 border-indigo-500/100 m-10 p-5">
         <h1 class="text-blue-600 font-bold">What are useref hooks in react?</h1>
       <p>
        React hooks are JavaScript functions which helps 
        us to use the missing react features in functional 
       components. In react useRef hook helps us to access
        the dom nodes or html elements, 
        so that we can interact with that dom element like accessing the input element value or focussing the input element.</p>
        </div>
        </div>
    );
};

export default Blog;