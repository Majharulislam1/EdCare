import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const View_All_Materials_admin = () => {

    const axiosPublic = useAxiosPublic();



    const { isPending, data: All_Materials = [], refetch } = useQuery({
        queryKey: ['all_materials_admin'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_materials`);
            return res.data;
        }
    })


    const handleDeleteSession = (_id) => {
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
                <h1 className="text-white text-3xl font-bold">All Materials</h1>
            </div>
            <div className="grid my-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    All_Materials?.map((session) => (
                        <div key={session._id}
                            className=" p-4 bg-white max-w-sm rounded-2xl overflow-hidden shadow-sm shadow-primary transition duration-300">
                            <img className="rounded-xl w-full" src={session?.imgFile} alt="" />
                            <div className="flex flex-col ">
                                <div className="mb-4">
                                    <h1 className="mt-5 text-2xl font-semibold">{session?.title}</h1>
                                </div>
                                <div>

                                    <button onClick={()=>handleDeleteSession(session?._id)} className="text-white flex items-center text-md font-semibold bg-primary py-2 px-4 rounded-lg shadow-md hover:shadow-lg ">Delete Materials</button>

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>



        </div>
    );
};

export default View_All_Materials_admin;