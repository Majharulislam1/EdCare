 
import {
    createBrowserRouter,
     
  } from "react-router-dom";
import Roots from "./Components/Roots";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Create_study_session from "./Components/Create_study_session";
import All_Study_Session from "./Components/All_Study_Session";

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
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'create-study-session',
          element:<Create_study_session></Create_study_session>
        },{
           path:'all_study_session',
           element:<All_Study_Session></All_Study_Session>
        },
        {
          path:'upload_materials',
          element:<p>upload Materials</p>
        },
        {
          path:'all_materials',
          element:<p>all materials</p>
        }
      ]
    }
  ]);


  export default router;