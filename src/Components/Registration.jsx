import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authentication";
import { updateProfile } from "firebase/auth";
import auth from "./firebase.config";
import { toast, ToastContainer } from "react-toastify";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { BsGithub } from "react-icons/bs";
import Swal from 'sweetalert2'
import useAxiosPublic from "../Hooks/useAxiosPublic";






const Registration = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const { handleRegister, handleGoogle_Login,handleGithub_Login } = useContext(AuthContext);

    const [roleDes, setRoleDes] = useState('');

    const axiosPublic = useAxiosPublic();

    




    const handleGoogleLogin = () => {
        handleGoogle_Login()
            .then((result) => {

              



                const user={name:result.user?.displayName,email:result.user?.email,photo_url:result.user?.photoURL,role:'student',};
                    
                    axiosPublic.post('/user',user)
                    .then(res => {
                         if(res.data.insertedId){
                             
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Register",
                                showConfirmButton: false,
                                timer: 2000
                            });
                            navigate('/');
                         }
                    })

            }).catch((error) => {


                const errorMessage = error.message;
                toast.error(errorMessage);
            });

    }


    const handleGithubLogin =()=>{
          handleGithub_Login()
          .then((result) => {

            console.log(result);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Register",
                showConfirmButton: false,
                timer: 2000
            });

            navigate('/');

        }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    }


    const handleSignUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo_url = e.target.photo_url.value;
        const checkbox = e.target.checkbox.checked;
        const specialized = e.target.specialized?.value;
        const role  = e.target.role.value;

         

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }


        if (!checkbox) {
            toast.error("You must accept the terms and conditions.");
            return;
        }



        handleRegister(email, password)
            .then(() => {

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo_url
                }).then(() => {

                    const user={name,email,photo_url,role,specialized};
                    
                    axiosPublic.post('/user',user)
                    .then(res => {
                         if(res.data.insertedId){
                            e.target.reset();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Register",
                                showConfirmButton: false,
                                timer: 2000
                            });
                            navigate('/');
                         }
                    })





                    


                }).catch((error) => {
                    toast.error(error.errorMessage);
                });


            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });

    }


    return (
        <div>

            <div>
                <div className="min-h-screen flex items-center  justify-center w-full dark:bg-gray-950">
                    <div data-aos="flip-right" className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                        <h1 className="text-2xl font-bold text-center mb-4 text-primary">Sign Up</h1>
                        <form onSubmit={handleSignUp} >
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input type="text" id="name" name="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary" placeholder="Name" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="Photo_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Photo Url</label>
                                <input type="text" id="Photo_url" name="photo_url" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary" placeholder="Photo url" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400 ">
                                    Role
                                </label>

                                <select name="role" onChange={(e) => setRoleDes(e.target.value)} id="role" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary">
                                    <option value='' disabled>Select Role</option>
                                    <option value="student">Student</option>
                                    <option value="tutor">Tutor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            {
                                roleDes === 'tutor' && <div className="mb-4">
                                    <label htmlFor="specialized" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Specialized</label>
                                    <input type="text" id="specialized" name="specialized" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary" placeholder="Specialized" required />
                                </div>
                            }


                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary" placeholder="your@email.com" required />
                            </div>
                            <div className="mb-4 relative">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>

                                <input type={showPassword ? "text" : "password"} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary" placeholder="Enter your password" required />
                                <span className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye className="absolute top-[41px] right-[13px]" /> : <FaEyeSlash className="absolute top-[41px] right-[13px]" />
                                    }
                                </span>

                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input type="checkbox" name="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:outline-none"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Terms and Conditions</label>
                                </div>
                                <Link to={'/login'}
                                    className="text-xs text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">All Ready have an account</Link>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Registration</button>

                        </form>
                        <div className="w-full flex mt-4 justify-center">
                            <button onClick={handleGoogleLogin} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                <span>Continue with Google</span>
                            </button>
                        </div>
                        <div className="w-full flex mt-4 justify-center">
                            <button onClick={handleGithubLogin} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">

                                <BsGithub className="mr-3 text-xl" />
                                <span >Continue with GitHub</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;


