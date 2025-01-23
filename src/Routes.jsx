 
import {
    createBrowserRouter,
     
  } from "react-router-dom";
import Roots from "./Components/Roots";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Roots></Roots>,
      children:[{
         path:'/',
         element:<Home></Home>,
      }
      ,{
         path:'/registration',
         element:<Registration></Registration>
      },{
          path:'/login',
          element:<Login></Login>
      }
    ]
    },
  ]);


  export default router;