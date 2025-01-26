import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const Download_materials = () => {
    const { id } = useParams();
      
    const axiosPublic = useAxiosPublic();
    
    

    const { isPending, data: session_detail = [] } = useQuery({
        queryKey: ['materials',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booked_details/${id}`);
            return res.data;
        }
    })

    const session_ids =  session_detail.session_id;

    const {  data: Materials = [] } = useQuery({
        queryKey: ['download_materials',session_ids],
        queryFn: async () => {
            const res = await axiosPublic.get(`/session_materials/${session_ids}`);
            return res.data;
        }
    })

    if(isPending) return <p>Loading</p>;


   console.log(Materials);
    


    return (
        <div>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">Download Materials</h1>
            </div>


            <div>
                <div className="lg:w-2/4 md:w-2/4 sm:w-4/5 mx-auto">
                    <div className="flex justify-center items-center min-h-screen w-full p-4">
                        <div
                            className="  w-full bg-white rounded-xl shadow-2xl overflow-hidden ">
                            <div className="relative">
                                <img className="w-full h-64 object-cover" src={session_detail?.cover_img} alt="Nature scene" />
                                <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                                    {session_detail?.status}
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{session_detail?.session_title
                                }</h2>
                                <p className="text-gray-600 mb-4">{session_detail?.description} </p>
                                <div className=" mb-4">

                                    <p className="font-bold">Tutor Name: <span className="text-primary"> {session_detail?.tutor_name}</span>   </p>

                                    <p className="text-paragraph font-bold">Registration start date : {RegistrationStartDate}</p>
                                    <p className="text-paragraph font-bold">Registration end date : {RegistrationEndDate}</p>
                                    <p className="text-paragraph font-bold">Class start time : {classStartDate}</p>
                                    <p className="text-paragraph font-bold">Class end date : {classEndDate}</p>
                                    <p className="text-paragraph font-bold">Registration fee : {session_detail?.reg_fee}</p>
                                    <p className="text-paragraph font-bold">Session duration : <span className="bg-primary text-white px-3 rounded-full">{session_detail?.
                                        session_duration} hr</span></p>
                                    <p className="text-paragraph font-bold">Rating: </p>
                                </div>
                                <div className="flex justify-between items-center">

                                    <button onClick={handleBookedSession} className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download_materials;