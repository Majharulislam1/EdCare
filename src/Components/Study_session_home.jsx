
import Session_home_card from "./Session_home_card";


import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Study_session_home = () => {

    const axiosPublic = useAxiosPublic();


    const { isPending, data: approved_Session = [] } = useQuery({
        queryKey: ['all_session_all',],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_session_home`);
            return res.data;
        }
    })

    if (isPending) return
    {

        <div className="flex justify-center py-8">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>

    }

   


     


    return (
        <div>
            <div className="lg:py-20 md:py-16 sm:py-10">
                <h1 className="text-center mb-4  lg:text-4xl md:text-4xl sm:text-2xl font-bold">Explore Featured Courses</h1>
                <div>
                    <p className="lg:w-2/4 md:w-2/4 sm:w-4/5 text-paragraph text-justify mx-auto">
                        Explore our world’s best courses, designed to enhance your skills and knowledge across various fields. These free, expert-led programs cater to learners of all levels. Dive into &quot;Introduction to Programming&quot; for a beginner-friendly foundation with hands-on practice, or challenge
                    </p>
                </div>
            </div>

            <div className="w-4/5 mx-auto ">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:grid-cols-1 mb-16">
                    {
                        approved_Session && approved_Session?.length > 7 ? approved_Session?.slice(0, 6)?.map(items => <Session_home_card key={items._id} sessions={items}></Session_home_card>) :
                            approved_Session?.map(items => <Session_home_card key={items._id} sessions={items}></Session_home_card>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Study_session_home;