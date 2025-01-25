 
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
import Upload_Materials from "./Components/Upload_Materials";
import Upload_Materials_info from "./Components/Upload_Materials_info";
import View_all_materials from "./Components/View_all_materials";
import Update_Materials from "./Components/Update_Materials";
import Create_notes from "./Components/Create_notes";
import Manage_notes from "./Components/Manage_notes";
import Update_Notes from "./Components/Update_Notes";

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
          element:<Upload_Materials></Upload_Materials>
        },
        {
          path:'upload_materials/:id',
          element:<Upload_Materials_info></Upload_Materials_info>
        },
        {
          path:'all_materials',
          element:<View_all_materials></View_all_materials>
        },
        {
          path:'update_materials/:id',
          element:<Update_Materials></Update_Materials>
        },{
           path:'view_booked_session',
           element:<p>view booked session</p>
        }
        ,
        {
           path:'create_note',
           element:<Create_notes></Create_notes>
        }
        ,{
           path:'manage_notes',
           element:<Manage_notes></Manage_notes>
        },
        {
           path:'study_materials',
           element:<p>Study Materials</p>
        },
        {
           path:'update_note/:id',
           element:<Update_Notes></Update_Notes>
        }
      ]
    }
  ]);


  export default router;