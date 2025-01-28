import { useContext } from "react";
import { AuthContext } from "./Authentication";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Update_Notes = () => {

    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    

    const { isPending, data: Notes = [], refetch } = useQuery({
        queryKey: ['notes', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/notes/${id}`);
            return res.data;
        }
    })


 
    const handleSubmit = (e) => {
          e.preventDefault();
  
  
          const title = e.target.note_title.value;
          const email = e.target.email.value;
          const description = e.target.description.value;
  
  
  
  
  
  
          const value = { title, email, description };
  
          axiosPublic.put(`/update_note/${id}`, value)
              .then(res => {
  
                  if (res.data.modifiedCount===1) {
  
                      Swal.fire({
                          position: "center",
                          icon: "success",
                          title: "Successfully Update Note",
                          showConfirmButton: false,
                          timer: 2000
                      });
                      e.target.reset();
                      refetch();
                      navigate('/dashboard/manage_notes');
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

            <div>
                <div className="relative w-full lg:h-60 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Update Note</h1>
                </div>

                <div className="lg:w-4/5 sm:w-full mx-auto">
                    <div className="bg-white   border-4 rounded-lg shadow relative m-10">



                        <div className="p-6 space-y-6">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-6 gap-6">

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="note_title" className="text-sm font-medium text-gray-900 block mb-2">Title:</label>
                                        <input type="text" defaultValue={Notes?.title} name="note_title" id="note_title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="post tile" required="" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Student E-mail:</label>
                                        <input type="email" defaultValue={user?.email} name="email" readOnly id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User E-mail" required="" />
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="description"  className="text-sm font-medium text-gray-900 block mb-2">  Description:</label>
                                        <textarea name="description" defaultValue={Notes?.description} id="description" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description"></textarea>
                                    </div>

                                </div>
                                <div className="p-6 border-t border-gray-200 rounded-b">
                                    <button className="text-white bg-primary   focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update Notes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update_Notes;