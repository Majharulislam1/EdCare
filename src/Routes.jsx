 
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
import Session_details from "./Components/Session_details";
import View_booked_session from "./Components/View_booked_session";
import Booked_Session_details from "./Components/Booked_Session_details";
import Review_booked_session from "./Components/Review_booked_session";
import Study_Materials from "./Components/Study_Materials";
import Download_materials from "./Components/Download_materials";
import View_all_user from "./Components/View_all_user";
import View_All_Study_Session from "./Components/View_All_Study_Session";
import Update_Session from "./Components/Update_Session";
import View_All_Materials_admin from "./Components/View_All_Materials_admin";
import PrivateRoute from "./Components/PrivateRoute";
import Payment from "./Components/Payment";
import Reject_Reason from "./Components/Reject_Reason";
import ErrorPage from "./Components/ErrorPage";
import All_study_session_user from "./Components/All_study_session_user";
import About_us from "./Components/About_us";
import Contact_us from "./Components/Contact_us";
import OverView from "./Components/OverView";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Roots></Roots>,
      errorElement: <ErrorPage />,
      children:[{
         path:'/',
         element:<Home></Home>,
      },{
          path:'/all_session_user',
          element:<All_study_session_user></All_study_session_user>
      }
      ,{
         path:'/registration',
         element:<Registration></Registration>
      },{
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'session_details/:id',
        
        element: <PrivateRoute> <Session_details></Session_details></PrivateRoute>
      },
      {
        path:'payment/:id',
        element:<PrivateRoute>  <Payment></Payment> </PrivateRoute>
      },{
          path:'/about_us',
          element:<About_us></About_us>
      },{
          path:'/contact_us',
          element:<Contact_us></Contact_us>
      }
    ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute>  <Dashboard></Dashboard>  </PrivateRoute>,
      children:[
        {
         path:'',
         element:<OverView></OverView>
        },
        {
          path:'create-study-session',
          element:<PrivateRoute> <Create_study_session></Create_study_session> </PrivateRoute>
        },{
           path:'all_study_session',
           element: <PrivateRoute><All_Study_Session></All_Study_Session> </PrivateRoute> 
        },
        {
          path:'upload_materials',
          element: <PrivateRoute><Upload_Materials></Upload_Materials></PrivateRoute> 
        },
        {
          path:'upload_materials/:id',
          element:<PrivateRoute>   <Upload_Materials_info></Upload_Materials_info> </PrivateRoute>
        },
        {
          path:'all_materials',
          element: <PrivateRoute>  <View_all_materials></View_all_materials> </PrivateRoute> 
        },
        {
          path:'update_materials/:id',
          element:<PrivateRoute> <Update_Materials></Update_Materials> </PrivateRoute>
        },{
           path:'view_booked_session',
           element: <PrivateRoute> <View_booked_session></View_booked_session> </PrivateRoute>
        }
        ,
        {
           path:'create_note',
           element: <PrivateRoute> <Create_notes></Create_notes></PrivateRoute>
        },
        {
           path:'booked_Details/:id',
           element:    <PrivateRoute><Booked_Session_details></Booked_Session_details> </PrivateRoute>
        },
        {
           path:'review_session/:id',
           element:  <PrivateRoute><Review_booked_session></Review_booked_session> </PrivateRoute>
        }
        ,{
           path:'manage_notes',
           element: <PrivateRoute><Manage_notes></Manage_notes>  </PrivateRoute>
        },
        {
           path:'study_materials',
           element: <PrivateRoute><Study_Materials></Study_Materials>  </PrivateRoute>
        },
        {
          path:'download_materials/:id',
          element: <PrivateRoute><Download_materials></Download_materials>  </PrivateRoute>
        },
        {
           path:'update_note/:id',
           element: <PrivateRoute><Update_Notes></Update_Notes>  </PrivateRoute>
        },
        {

          path:'reject_reason',
          element: <PrivateRoute><Reject_Reason></Reject_Reason>  </PrivateRoute>

        },

        // admin routes 

        {
           path:'view_all_user',
           element: <PrivateRoute><View_all_user></View_all_user>  </PrivateRoute>
        },
        {
          path:'view_all_study_session',
          element: <PrivateRoute><View_All_Study_Session></View_All_Study_Session>  </PrivateRoute>
        },
        {
          path:'view_all_materials',
          element: <PrivateRoute><View_All_Materials_admin></View_All_Materials_admin>  </PrivateRoute>
        },
        {
          path:'update_session/:id',
          element: <PrivateRoute><Update_Session></Update_Session>  </PrivateRoute>
        }
        
      ]
    }
  ]);


  export default router;