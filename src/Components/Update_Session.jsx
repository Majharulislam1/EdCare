import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import DatePicker from 'react-datepicker';
import { AuthContext } from './Authentication';
import Swal from 'sweetalert2';

const Update_Session = () => {
    const { id } = useParams();

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();



    const { isPending, data: session_detail = [],refetch } = useQuery({
        queryKey: ['session_update', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/session_details/${id}`);
            return res.data;
        }

    })
    const [reg_start_date, setRegStart] = useState(new Date( ));
    const [reg_end_date, setRegEnd] = useState(new Date( ));
    const [classStart, setClassStart] = useState(new Date( ));
    const [classEnd, setClassEnd] = useState(new Date( ));

    const handleUpdate = (e) => {
        e.preventDefault();

        const cover_img = e.target.img_url.value;
        const session_title = e.target.session_title.value;
         
        const description = e.target.description.value;
        const session_duration = e.target.session_duration.value;
        const reg_fee = e.target.fee.value;





        const value = { cover_img, session_title,   session_duration, reg_fee, description, reg_start_date, reg_end_date, classStart, classEnd }



        axiosPublic.put(`/update_session/${id}`, value)
            .then(res => {

                if (res.data.modifiedCount === 1) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Update Note",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    e.target.reset();
                    refetch();
                    navigate('/dashboard/view_all_study_session');
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
                <h1 className="text-white text-3xl font-bold">Update Study Session</h1>
            </div>


            <div className="lg:w-4/5 sm:w-full mx-auto">
                <div className="bg-white   border-4 rounded-lg shadow relative m-10">



                    <div className="p-6 space-y-6">
                        <form onSubmit={handleUpdate}>
                            <div className="grid grid-cols-6 gap-6">

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Session Thumbnail:</label>
                                    <input type="text" name="img_url" defaultValue={session_detail?.cover_img} id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Thumbnail:" required="" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="session_title" className="text-sm font-medium text-gray-900 block mb-2">Session Title:</label>
                                    <input type="text" name="session_title" defaultValue={session_detail?.session_title} id="session_title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="post tile" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Tutor Name:</label>
                                    <input type="text" defaultValue={session_detail?.tutor_name} name="name" id="brand" readOnly className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User Name" required="" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Tutor E-mail:</label>
                                    <input type="email" defaultValue={session_detail?.tutor_email} name="email" readOnly id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User E-mail" required="" />
                                </div>

                                <div className="col-span-6 sm:col-span-3 ">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">
                                        Registration Start Date:
                                        <DatePicker

                                            className="shadow-sm mx-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            selected={reg_start_date}
                                            onChange={(date) => setRegStart(date)}
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3 ">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">
                                        Registration End Date:
                                        <DatePicker

                                            className="shadow-sm mx-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            selected={reg_end_date}
                                            onChange={(date) => setRegEnd(date)}
                                            required
                                        />
                                    </label>
                                </div>


                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="session-duration" className="text-sm font-medium text-gray-900 block mb-2">Session duration:</label>
                                    <input type="number" name="session_duration" defaultValue={session_detail?.session_duration} id="session-duration" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Session Duration" required="" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="fee" className="text-sm font-medium text-gray-900 block mb-2">Registration fee:</label>
                                    <input type="number" defaultValue={session_detail?.reg_fee} name="fee" id="fee" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Registration fee" required="" />
                                </div>

                                <div className="col-span-6 sm:col-span-3 ">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">
                                        Class Start:
                                        <DatePicker

                                            className="shadow-sm mx-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            selected={classStart}
                                            onChange={(date) => setClassStart(date)}
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3 ">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">
                                        Class End:
                                        <DatePicker

                                            className="shadow-sm mx-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            selected={classEnd}
                                            onChange={(date) => setClassEnd(date)}
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Session description:</label>
                                    <textarea name="description" defaultValue={session_detail?.description} id="description" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description"></textarea>
                                </div>

                            </div>
                            <div className="p-6 border-t border-gray-200 rounded-b">
                                <button className="text-white bg-primary   focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update Session</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Update_Session;