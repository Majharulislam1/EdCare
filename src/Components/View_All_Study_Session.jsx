import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "./Authentication";
import { useContext, useState } from "react";
import Swal from "sweetalert2";



const View_All_Study_Session = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);
    const [paid_btn, setPaid_btn] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null);


    const openModal = (session) => {
        setSelectedSession(session);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedSession(null);
        setPaid_btn(false);
    };

    const { isPending, data: All_session = [],refetch } = useQuery({
        queryKey: ['all_booked_session2', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/view_all_study_session`);
            return res.data;
        }
    })


    const handleAddRegistration = (e, id) => {
        e.preventDefault();

        const fee = e.target.registration_fee.value;
        const value = {reg_fee:fee,status:'approved'};

        axiosPublic.put(`/update_registration_fee/${id}`, value)
            .then(res => {

                if (res.data.modifiedCount === 1) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Approved",
                        showConfirmButton: false,
                        timer: 2000
                    });

                    refetch();
                    closeModal();

                }
            })

    }

    const handleAddRegistration_Free = (id)=>{
        const value = {reg_fee:0,status:'approved'};

        axiosPublic.put(`/update_registration_fee/${id}`, value)
            .then(res => {

                if (res.data.modifiedCount === 1) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Approved",
                        showConfirmButton: false,
                        timer: 2000
                    });

                    refetch();
                    closeModal();

                }
            })
    }



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

                                    {session.status === 'approved' ? (
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
                                    ) : (
                                        <div className="flex space-x-2">
                                            <button onClick={() => openModal(session)} className="text-white flex items-center text-md font-semibold bg-primary py-2 px-4 rounded-lg shadow-md hover:shadow-lg ">Approved</button>
                                            <button className="text-white flex items-center text-md font-semibold bg-primary py-2 px-4 rounded-lg shadow-md hover:shadow-lg ">Rejected</button>
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                            {/* modal body  */}
                            {isOpen && selectedSession?._id === session._id && (
                                <dialog open className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Is the session free or paid?</h3>
                                        <div className="py-4 flex">

                                            <button onClick={()=>handleAddRegistration_Free(selectedSession._id)}
                                                className="text-white mx-4 flex items-center text-md font-semibold bg-primary py-1 px-4 rounded-lg shadow-md hover:shadow-lg"
                                            >
                                                Free
                                            </button>

                                            <button
                                                onClick={() => setPaid_btn(true)}
                                                className="text-white flex items-center text-md font-semibold bg-primary py-1 px-4 rounded-lg shadow-md hover:shadow-lg"
                                            >
                                                Paid
                                            </button>
                                        </div>
                                        {paid_btn && (
                                            <form onSubmit={(e) => handleAddRegistration(e, selectedSession._id)}>
                                                <div>
                                                    <label
                                                        htmlFor="registration_fee"
                                                        className="text-sm font-medium text-gray-900 block mb-2"
                                                    >
                                                        Registration Fee:
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="registration_fee"
                                                        id="registration_fee"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                        placeholder="Registration Fee"
                                                        required
                                                    />
                                                </div>

                                                <button className="text-white my-4 flex items-center text-md font-semibold bg-primary py-1 px-4 rounded-lg shadow-md hover:shadow-lg">
                                                    Submit
                                                </button>
                                            </form>
                                        )}

                                        <div className="modal-action">
                                            <button
                                                className="btn btn-sm bg-red-600 text-white"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </dialog>
                            )}
                        </div>
                    ))
                }

            </div>



        </div>
    );
};

export default View_All_Study_Session;