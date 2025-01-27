import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import moment from 'moment';
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import Swal from "sweetalert2";
import useUser from "../Hooks/useUser";


const Session_details = () => {

    const { id } = useParams();

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);


    const { isPending, data: session_detail = [] } = useQuery({
        queryKey: ['all_session_home'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/session_details/${id}`);
            return res.data;
        }
    })

    const [isUser] = useUser();
     
    


    const handleBookedSession = () => {

        const value = {
            student_email: user.email,
            session_id: session_detail._id,
            tutor_email: session_detail.tutor_email,
            tutor_name: session_detail.tutor_name,
            classEnd: session_detail.classEnd,
            classStart: session_detail.classStart,
            reg_end_date: session_detail.reg_end_date,
            reg_start_date: session_detail.reg_start_date,
            description: session_detail.description,
            reg_fee: session_detail.reg_fee,
            session_duration: session_detail.session_duration,
            session_title: session_detail.session_title,
            cover_img: session_detail.cover_img

        };



       

         

        axiosPublic.post('/booked_session', value)
            .then(res => {

                if (res.data.insertedId) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Booked Session",
                        showConfirmButton: false,
                        timer: 2000
                    });

                }
            })
    }


    if (isPending) return <p>Loading</p>;

    const userRole = isUser[0]?.role;



    const RegistrationStartDate = moment(session_detail?.reg_start_date).format("MMM Do YY");
    const RegistrationEndDate = moment(session_detail?.reg_end_date).format("MMM Do YY");
    const classStartDate = moment(session_detail?.classStart).format("MMM Do YY");
    const classEndDate = moment(session_detail?.classEnd).format("MMM Do YY");




    return (
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

                                <button onClick={handleBookedSession} disabled={userRole!=='student'} className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Session_details;