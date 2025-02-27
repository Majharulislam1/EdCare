
import { useNavigate } from "react-router-dom";
import useAllSession from "../Hooks/useAllSession";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const All_Study_Session = () => {

    const [isPending, All_session, refetch] = useAllSession();
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();





    const handleRequest = (_id) => {

        const value = { status: 'pending' };
        axiosPublic.put(`/session_request/${_id}`, value)
            .then(res => {

                if (res.data.modifiedCount === 1) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Update Note",
                        showConfirmButton: false,
                        timer: 2000
                    });

                    refetch();
                    navigate('/dashboard/all_study_session');
                }
            })



    }

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

            <div className="py-10">
                <h2 className="text-xl font-bold">Total Session: {All_session.length}</h2>
            </div>



            <div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Title</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Tutor Name</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Tutor Email</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                All_session.map(items =>
                                    <tr key={items._id}>
                                        <td className="py-4 px-6 border-b border-gray-200">{items?.session_title}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 truncate">{items?.tutor_name}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{items?.tutor_email}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">
                                            {
                                                items?.status === 'pending' && <span className="bg-yellow-100 font-bold text-yellow-900 py-1 px-2 rounded-full text-xs">Pending</span>
                                            }
                                            {
                                                items?.status === 'approved' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Approved</span>
                                            }
                                            {
                                                items?.status === 'rejected' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Rejected</span>
                                            }

                                        </td>

                                        <td>
                                            {
                                                items?.status === 'rejected' && <button onClick={() => handleRequest(items._id)} className="px-4 py-2 bg-primary text-white rounded-lg"> Request</button>
                                            }


                                        </td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default All_Study_Session;