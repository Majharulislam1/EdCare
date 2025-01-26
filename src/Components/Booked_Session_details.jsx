import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
 
import { useQuery } from "@tanstack/react-query";
import { GoArrowLeft } from "react-icons/go";
import moment from "moment";



const Booked_Session_details = () => {
    const { id } = useParams();

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    


    const { isPending, data: session_detail = [] } = useQuery({
        queryKey: ['all_session_home'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booked_details/${id}`);
            return res.data;
        }
    })

    const RegistrationStartDate = moment(session_detail?.reg_start_date).format("MMM Do YY");
    const RegistrationEndDate = moment(session_detail?.reg_end_date).format("MMM Do YY");
    const classStartDate = moment(session_detail?.classStart).format("MMM Do YY");
    const classEndDate = moment(session_detail?.classEnd).format("MMM Do YY");

    if(isPending) return <p>Loading..</p>

    return (
        <div>
            <div>
                <div className="lg:w-2/4 md:w-2/4 sm:w-4/5 mx-auto">
                    <div className="flex justify-center items-center min-h-screen w-full p-4">
                        <div
                            className="  w-full bg-white rounded-xl shadow-2xl overflow-hidden ">
                            <div className="relative">
                                <img className="w-full h-64 object-cover" src={session_detail?.cover_img} alt="Nature scene" />
                                
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
                                    
                                </div>
                                <div className="flex justify-between items-center">

                                    <button onClick={()=> navigate(-1)} className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md">
                                  
                                    <GoArrowLeft className="text-2xl" />
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

export default Booked_Session_details;