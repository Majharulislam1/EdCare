import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const Manage_notes = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { isPending, data: All_Notes = [], refetch } = useQuery({
        queryKey: ['all_notes', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_notes/${user.email}`);
            return res.data;
        }
    })


    
     


 

    const handleDelete = (_id) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
    
                    fetch(`https://ed-care-backend.vercel.app/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount === 1) {
                                Swal.fire({
                                    title: "Successfully Deleted!",
                                    text: "Note has been deleted.",
                                    icon: "success"
                                });
                                refetch();
    
    
                            }
                        });
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
                <h1 className="text-white text-3xl font-bold"> All Notes </h1>
            </div>

            <div className="py-10">
                <h2 className="text-xl font-bold">Total Notes:  </h2>
            </div>

            <div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Title</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Tutor Email</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                All_Notes.map(items =>
                                    <tr key={items._id}>
                                        
                                        <td className="py-4 px-6 border-b border-gray-200 truncate">{items?.title}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{items?.email}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">


                                            <Link to={`/dashboard/update_note/${items?._id}`}>
                                                <button className="px-2 inline-flex text-xs mx-2 leading-5 font-semibold rounded-full bg-green-100 text-green-800">update</button> </Link>


                                            <button onClick={() => handleDelete(items._id)} className="px-2 inline-flex mx-2 text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Delete</button>


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

export default Manage_notes;