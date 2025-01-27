import { useEffect, useState } from "react";
import Tutor_home_card from "./Tutor_home_card";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

 

const Tutor_home_section = () => {


    const axiosPublic = useAxiosPublic();
     

    const { isPending, data: All_Tutor = [] } = useQuery({
        queryKey: ['all_tutor'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_tutor`);
            return res.data;
        }
    })

   if(isPending) return <p>Loading</p>;
        
    
         

    return (
        <div>
            <div className="lg:py-20 md:py-16 sm:py-10 bg-[#f2f3f5]">
                <h1 className="text-center mb-4  lg:text-4xl md:text-4xl sm:text-2xl font-bold">Explore Our World&apos;s Best Courses</h1>
                <div>
                    <p className="lg:w-2/4 md:w-2/4 sm:w-4/5 text-paragraph text-justify mx-auto">
                        Explore a range of free, expert-led courses designed to help you enhance your skills and knowledge in various fields. The &quot;Introduction to Programming&quot; course offers a strong foundation for beginners with hands-on examples over 20 sessions, starting on February 15, 2025
                    </p>
                </div>
            </div>

            <div className="w-4/5 mx-auto ">
                <div className="grid lg:grid-cols-4 mt-10 md:grid-cols-2 gap-6 sm:grid-cols-1 mb-16">
                    {
                       All_Tutor.slice(0,7)?.map(items => <Tutor_home_card key={items.name} tutors={items}></Tutor_home_card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tutor_home_section;