import { useEffect } from "react";
import { useState } from "react";
import Session_home_card from "./Session_home_card";


const Study_session_home = () => {

    const [session,setSession] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
          fetch('/public/study_session.json')
          .then(res => res.json())
          .then(data => {
            setSession(data);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
        });
    },[])

     if(loading) return <p>Loading</p>
    
    

    return (
        <div>
            <div>
                <h1 className="text-center lg:py-20 md:py-16 sm:py-10 lg:text-4xl md:text-4xl sm:text-2xl font-bold">Explore Featured Courses</h1>
            </div>

            <div className="w-4/5 mx-auto py-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:grid-cols-1">
                      {
                        session?.map(items => <Session_home_card key={items.id} sessions={items}></Session_home_card>)
                      }
                </div>
            </div>



        </div>
    );
};

export default Study_session_home;