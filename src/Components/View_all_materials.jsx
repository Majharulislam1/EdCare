import { useContext } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "./Authentication";
import { useQuery } from "@tanstack/react-query";



const View_all_materials = () => {



    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { isPending, data: All_Materials = [], refetch } = useQuery({
        queryKey: ['all_session', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_materials/${user.email}`);
            return res.data;
        }
    })

    if (isPending) return <p>Loading</p>;



    return (
        <div>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold"> View All Materials </h1>
            </div>

            <div className="py-10">
                <h2 className="text-xl font-bold">Total Materials: {All_Materials.length} </h2>
            </div>


            <div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">img</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Title</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Tutor Email</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                All_Materials.map(items =>
                                    <tr key={items._id}>
                                        <td className="py-4 px-6 border-b border-gray-200">

                                            <img className="h-10 w-10 rounded-full" src={items?.imgFile} alt="" />
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 truncate">{items?.title}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{items?.tutor_email}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">


                                            <span className="px-2 inline-flex text-xs mx-2 leading-5 font-semibold rounded-full bg-green-100 text-green-800">update</span>


                                            <span className="px-2 inline-flex mx-2 text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Delete</span>


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

export default View_all_materials;