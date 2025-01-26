import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";



const Review_booked_session = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const navigate= useNavigate();




    const { isPending, data: session_detail = [] } = useQuery({
        queryKey: ['session-details', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booked_details/${id}`);
            return res.data;
        }
    })



    const handleSubmit = (e) => {
        e.preventDefault();

        const rating = e.target.rating.value;
        const feedback = e.target.description.value;
        const value = { rating, feedback, session_id: session_detail?.session_id }

        axiosPublic.post('/session_review', value)
            .then(res => {

                if (res.data.insertedId) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thank You for your  review",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    e.target.reset();
                    navigate('/dashboard/view_booked_session')
                }
            })

    }
    if (isPending) return <p>Loading</p>;



    return (
        <div>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold"> Review Booked session </h1>
            </div>


            <div className="lg:w-4/5 sm:w-full mx-auto">
                <div className="bg-white   border-4 rounded-lg shadow relative m-10">
                    <div className="p-6 space-y-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-6 gap-6">

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                        Rating
                                    </label>

                                    <select name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option defaultValue={''} disabled>Select rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>



                                <div className="col-span-full">
                                    <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2"> Feedback:</label>
                                    <textarea name="description" id="description" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description"></textarea>
                                </div>

                            </div>
                            <div className="p-6 border-t border-gray-200 rounded-b">
                                <button className="text-white bg-primary   focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Create note</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review_booked_session;