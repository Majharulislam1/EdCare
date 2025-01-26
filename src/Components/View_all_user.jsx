import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
 
import Swal from "sweetalert2";



const View_all_user = () => {

    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState('');



    const { isPending, data: user = [],refetch } = useQuery({
        queryKey: ['searchUsers', search],
        queryFn: async () => {
            if (search) {
                const res = await axiosPublic.get(`/users/search?searchUser=${search}`);
                return res.data
            }
            else {
                const res = await axiosPublic.get(`/all_users`);
                return res.data
            }

        },
        enabled: true,
    })


    const handleRoleChange = (id, newRole) => {

        const value = {role:newRole};

        axiosPublic.put(`/update_user_role/${id}`, value)
            .then(res => {

                if (res.data.modifiedCount === 1) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Update User",
                        showConfirmButton: false,
                        timer: 2000
                    });
                     
                    refetch();
                     
                }
            })

    };

    // if (isPending) return <p>Loading</p>;


    return (
        <div>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">View All User</h1>
            </div>

            <div className="relative w-full max-w-xl my-10 mx-auto bg-white rounded-full">
                <input onChange={(e) => setSearch(e.target.value)} placeholder="search user" className="rounded-full w-full h-14 bg-transparent py-1 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200" type="text" name="query" id="query" />
                <button type="submit" className="absolute inline-flex items-center h-9 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    Search
                </button>
            </div>


            <div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">img</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Role</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                user.map(items =>
                                    <tr key={items._id}>
                                        <td className="py-4 px-6 border-b border-gray-200">

                                            <img className="h-10 w-10 rounded-full" src={items?.photo_url} alt="" />
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 truncate">{items?.
                                            name}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{items?.email}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">
                                            {
                                                items?.role === 'tutor' && <span className="bg-yellow-100 font-bold text-yellow-900 py-1 px-2 rounded-full text-xs">Tutor</span>
                                            }
                                            {
                                                items?.role === 'student' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Student</span>
                                            }
                                            {
                                                items?.role === 'admin' && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Admin</span>
                                            }
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200">

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor={`genres-${items._id}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                    Change Role
                                                </label>

                                                <select name="genres" onChange={(e) => handleRoleChange(items._id, e.target.value)} id={`genres-${items._id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option defaultValue={''} disabled>Select Role</option>
                                                    <option value="tutor">Totor</option>
                                                    <option value="student">Student</option>
                                                </select>
                                            </div>

                                            

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

export default View_all_user;