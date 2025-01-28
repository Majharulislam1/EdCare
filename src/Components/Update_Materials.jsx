import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const image_hosting_api_key = '2a2798f5a9d1b7701d09a0b40cf8021d';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;
const Update_Materials = () => {
    const { id } = useParams();

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { isPending, data: Materials = [], refetch } = useQuery({
        queryKey: ['update_materials', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/materials/${id}`);
            return res.data;
        }
    })

     



    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const session_id = e.target.session_id.value;
        const tutor_email = e.target.email.value;
        const links = e.target.link.value;
        const imgFile = e.target.img.files[0];

        // 
        const formData = new FormData();
        formData.append('image', imgFile);

        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const data = { title, session_id, tutor_email, links, imgFile: res.data.data.display_url };

            const upload_materials = await axiosPublic.put(`/update_materials/${id}`, data);
            if (upload_materials.data.modifiedCount===1) {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Updated Materials",
                    showConfirmButton: false,
                    timer: 2000
                });
                e.target.reset();
                refetch();
            }
        }







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
                <h1 className="text-white text-3xl font-bold">Update Materials </h1>
            </div>

            <div className="lg:w-4/5 sm:w-full mx-auto">
                <div className="bg-white   border-4 rounded-lg shadow relative m-10">



                    <div className="p-6 space-y-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-6 gap-6">

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">Title:</label>
                                    <input type="text" defaultValue={Materials.title} name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Title" required="" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="session_id" className="text-sm font-medium text-gray-900 block mb-2">Session Id:</label>
                                    <input type="text" readOnly defaultValue={id} name="session_id" id="session_id" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="post tile" required="" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Tutor E-mail:</label>
                                    <input type="email" defaultValue={user?.email} name="email" readOnly id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User E-mail" required="" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="link" className="text-sm font-medium text-gray-900 block mb-2">
                                        Links:</label>
                                    <input type="text" name="link" id="link" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Links" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="link" className="text-sm font-medium text-gray-900 block mb-2">
                                        image upload:</label>
                                    <input type="file" name="img"
                                        className=" p-1 w-full outline-none border-none text-slate-500 text-sm rounded-lg leading-6 file:bg-primary file:text-white file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full   border border-gray-300" />
                                </div>



                            </div>
                            <div className="p-6  border-gray-200 rounded-b">
                                <button className="text-white bg-primary   focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update Materials</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Update_Materials;