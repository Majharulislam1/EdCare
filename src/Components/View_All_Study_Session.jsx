import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "./Authentication";
import { useContext } from "react";
 


const View_All_Study_Session = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { isPending, data: All_session = [], } = useQuery({
        queryKey: ['all_booked_session2', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/view_all_study_session`);
            return res.data;
        }
    })

    if (isPending) return <p>Loading</p>;



    return (
        <div>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">All Study Session</h1>
            </div>


            <div className="grid my-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    All_session?.map((session) => (
                        <div key={session._id}
                            className=" p-4 bg-white max-w-sm rounded-2xl overflow-hidden shadow-sm shadow-primary transition duration-300">
                            <img className="rounded-xl w-full" src={session?.cover_img} alt="" />
                            <div className="flex flex-col ">
                                <div className="mb-4">
                                    <h1 className="mt-5 text-2xl font-semibold">{session?.session_title}</h1>
                                    <p className="my-4">Duration: {session?.session_duration}hr</p>
                                    <p>
                                        {
                                            session?.status === 'pending' && <span className="bg-yellow-100 font-bold text-yellow-900 py-1 px-2 rounded-full text-xs">pending</span>
                                        }
                                        {
                                            session?.status === 'approved' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">approved</span>
                                        }
                                        {
                                            session?.status === 'rejected' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">rejected</span>
                                        }
                                    </p>
                                </div>
                                <div>

                                    {session.status === 'approved' ?(
                                        <div className="flex space-x-2">
                                            <button
                                                className="text-white flex items-center text-md font-semibold bg-primary py-2 px-4 rounded-lg shadow-md hover:shadow-lg "
                                                  
                                            >
                                                Update
                                            </button>
                                            <button
                                               className="text-white flex items-center text-md font-semibold bg-primary py-2 px-4 rounded-lg shadow-md hover:shadow-lg "
                                                  
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ) : <button className="text-white flex items-center text-md font-semibold bg-primary py-2 px-4 rounded-lg shadow-md hover:shadow-lg ">Approved</button>
                                }

                                    

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>



        </div>
    );
};

export default View_All_Study_Session;