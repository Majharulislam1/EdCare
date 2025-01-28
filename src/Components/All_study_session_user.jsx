import React from 'react';
 
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Session_home_card from './Session_home_card';

const All_study_session_user = () => {


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
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">All Study Session</h1>
            </div>

            <div className="w-4/5 mx-auto my-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:grid-cols-1 mb-16">
                    {
                        approved_Session?.map(items => <Session_home_card key={items._id} sessions={items}></Session_home_card>)
                    }
                </div>
            </div>


        </div>
    );
};

export default All_study_session_user;