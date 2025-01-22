 
import {
    createBrowserRouter,
     
  } from "react-router-dom";
import Roots from "./Components/Roots";
import Home from "./Components/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Roots></Roots>,
      children:[{
         path:'/',
         element:<Home></Home>
      }
    
    ]
    },
  ]);


  export default router;