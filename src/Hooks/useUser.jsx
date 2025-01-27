import { useQuery } from "@tanstack/react-query";
 
 
import { useContext } from "react";
import { AuthContext } from "../Components/Authentication";
import useAxiosPublic from "./useAxiosPublic";


const useUser= () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic() ;
    const { data: isUser, isPending } = useQuery({
        queryKey: ['userRole',user?.email ],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users_role/${user.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    })

    return [isUser, isPending]
};

export default useUser;