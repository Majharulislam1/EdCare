import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";



const Download_materials = () => {
    const { id } = useParams();
      
    const axiosPublic = useAxiosPublic();
    
    

    const { isPending, data: session_detail = [] } = useQuery({
        queryKey: ['materials',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booked_details/${id}`);
            return res.data;
        }
    })

   
 
     
    const session_ids =  session_detail.session_id;
    const {  data: Materials = [] } = useQuery({
        queryKey: ['download_materials',session_ids],
        queryFn: async () => {
            const res = await axiosPublic.get(`/session_materials/${session_ids}`);
            return res.data;
        },
        enabled: !!session_ids,
    })

    if(isPending) return <p>Loading</p>;


    
        const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
        const url = urlRegex.test(Materials?.links);

        
       
    


    return (
        <div>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">Download Materials</h1>
            </div>


            <div>
                <div className="lg:w-2/4 md:w-2/4 sm:w-4/5 mx-auto">
                    <div className="flex justify-center items-center min-h-screen w-full p-4">
                        <div
                            className="  w-full bg-white rounded-xl shadow-2xl overflow-hidden ">
                            <div className="relative">
                                <img className="w-full h-64 object-cover" src={Materials?.imgFile} alt="Nature scene" />
                                
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{Materials?.title
                                }</h2>
                                <p className="text-gray-600 mb-4">{session_detail?.description} </p>
                                <div className=" mb-4">

                                   
                                </div>
                                <div className="flex justify-between items-center">

                                    <button   className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md">
                                        <a href={Materials?.imgFile} download target="_blank">Download</a>
                                    </button>
                                    <button   className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md">
                                        <a href={url ? Materials.links:'https://drive.google.com/'} target="_blank">Links</a>
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download_materials;