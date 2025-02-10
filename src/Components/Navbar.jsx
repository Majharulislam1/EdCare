import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from '../assets/logo-black.png'



import { useContext, useState } from "react";

import { Tooltip } from "react-tooltip";
import { AuthContext } from "./Authentication";





const Navbar = () => {

    const { handleLogOut } = useContext(AuthContext);

    const { user } = useContext(AuthContext);

    const [menu, setMenu] = useState(true);




    return (
        <div className="sm:-mb-1 fixed top-0 z-10 w-full">



            <div className="bg-white">
                <div className="w-4/5 mx-auto">
                    <div className="flex justify-between items-center lg:py-6 md:py-6 sm:py-4">

                        <div>
                            <Link to={'/'}>
                                <img className="  h-[50px]" src={logo} alt="" />
                            </Link>
                        </div>

                        {/* menu section start */}

                        <div className={`sm:absolute md:absolute z-50 bg-white border lg:hidden sm:right-[25%]  md:right-[38%] lg:right-1/2 w-[200px] rounded-lg ${menu ? '-top-[150px]' : 'top-[90px]'}  duration-150`}>
                            <p className="text-[#131313b3] flex justify-center items-center my-3 cursor-pointer font-bold text-center">

                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[1rem] mr-6 font-semibold text-[#1b206b]' : 'text-[1rem] mr-6 font-semibold text-black'
                                    }
                                >
                                    Home
                                </NavLink>


                            </p>
                            <p className="text-[#131313b3] flex justify-center items-center my-3 cursor-pointer font-bold text-center">

                                <NavLink
                                    to="/all_session_user"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[1rem] mr-6 font-semibold text-[#1b206b]' : 'text-[1rem] mr-6 font-semibold text-black'
                                    }
                                >
                                    All Session
                                </NavLink>


                            </p>

                             









                            <p>
                                {
                                    user && user?.email ? (
                                        <>
                                            <div className="flex justify-center flex-col-reverse items-center">



                                                <button onClick={handleLogOut} className="bg-white border mb-4 p-2 px-4 rounded-full mr-4 relative">

                                                    Log Out

                                                </button>
                                                <Link data-tooltip-id="my-tooltip" data-tooltip-content={user && user?.displayName}>
                                                    <div className="bg-white border w-[60px] h-[60px] p-1 rounded-full mr-4">
                                                        <img className="object-cover h-full w-full rounded-full" src={user?.photoURL} alt="" />
                                                    </div>
                                                </Link>
                                                <p className="text-[#131313b3] flex justify-center items-center mb-3 cursor-pointer font-bold text-center">

                                                    <NavLink
                                                        to='/dashboard'
                                                        className={({ isActive }) =>
                                                            isActive ? 'text-[1rem] mx-6 font-semibold text-[#1b206b]' : 'text-[1rem] mx-6 font-semibold text-black'
                                                        }
                                                    >
                                                        Dashboard
                                                    </NavLink>

                                                </p>


                                            </div>
                                        </>

                                    ) :

                                        (
                                            <>
                                                <Link to={'/login'} className="flex justify-center mb-3">
                                                    <button className="bg-white border p-2 px-4 rounded-full mr-4 relative">
                                                        <p>Login</p>
                                                    </button>
                                                </Link>
                                            </>

                                        )

                                }
                            </p>
                        </div>

                        {/* menu section end */}



                        <div className='lg:flex items-center justify-between md:hidden sm:hidden'>

                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'text-[1rem] flex items-center mr-6 font-semibold text-white bg-primary px-4 py-1 rounded-lg' : 'text-[1rem] flex items-center mr-6 font-semibold text-black'
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/all_session_user"
                                className={({ isActive }) =>
                                    isActive ? 'text-[1rem] flex items-center mr-6 font-semibold text-white bg-primary px-4 py-1 rounded-lg' : 'text-[1rem] flex items-center mr-6 font-semibold text-black'
                                }
                            >
                                All session
                            </NavLink>









                        </div>

                        <div className="lg:flex  md:flex items-center sm:hidden  ">



                            {
                                user && user?.email ? (
                                    <>
                                        <Link to={'/dashboard'}>
                                            <div className="bg-primary text-white border p-2 px-4 rounded-full mr-4 relative">
                                                <p>Dashboard</p>
                                            </div>
                                        </Link>

                                        <Link data-tooltip-id="my-tooltip" data-tooltip-content={user && user?.displayName}>
                                            <div className="bg-white border w-[60px] h-[60px] p-1 rounded-full mr-4">
                                                <img className="object-cover h-full w-full rounded-full" src={user?.photoURL} alt="" />
                                            </div>
                                        </Link>

                                        <Link onClick={handleLogOut}>
                                            <div className="bg-primary text-white border p-2 px-4 rounded-full mr-4 relative">
                                                <p>LogOut</p>
                                            </div>
                                        </Link>






                                    </>

                                ) :

                                    (
                                        <>
                                            <Link to={'/login'}>
                                                <div className="bg-primary sm md:hidden lg:block text-white border p-2 px-4 rounded-full mr-4 relative">
                                                    <p>sign-up</p>
                                                </div>
                                            </Link>
                                        </>

                                    )

                            }


                        </div>





                        <div className='mx-4 lg:hidden sm:block md:block'>
                            <button onClick={() => setMenu(!menu)}>
                                {
                                    menu ? <IoMenu className="text-3xl text-primary" /> : <RxCross2 className="text-3xl text-primary" />
                                }
                            </button>
                        </div>


                    </div>
                </div>
            </div>



            <Tooltip id="my-tooltip" style={{ backgroundColor: "#ffffff", color: "#222" }} />
        </div>
    );
};

export default Navbar;