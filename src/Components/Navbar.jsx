import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from '../assets/logo-black.png'



import {  useState } from "react";
// import { AuthContext } from "./Authentication";
import { Tooltip } from "react-tooltip";





const Navbar = () => {

    // const { handleLogOut } = useContext(AuthContext);

    // const { user } = useContext(AuthContext);

    const user ={name:'mahadi hasan'}
    const [menu, setMenu] = useState(true);

   const handleLogOut = ()=>{
       console.log('hello world');
   }


    return (
        <div className="sm:-mb-1">
            <div className="bg-[#ffffff] sm:-mb-1">
                <div className="w-4/5 mx-auto">
                    <h1 className="text-center py-2 text-primary font-bold">majharul2022islam@gmail.com</h1>
                </div>
            </div>


            <div className="bg-secondary">
                <div className="w-4/5 mx-auto">
                    <div className="flex justify-between items-center lg:py-6 md:py-6 sm:py-4">

                        <div>
                            <Link to={'/'}>
                                <img className="  h-[50px]" src={logo} alt="" />
                            </Link>
                        </div>

                        {/* menu section start */}

                        <div className={`sm:absolute md:absolute z-50 bg-white border lg:hidden sm:right-[25%]  md:right-[38%] lg:right-1/2 w-[200px] rounded-lg ${menu ? '-top-3/4' : 'top-[6rem]'}  duration-150`}>
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

                            <p className="text-[#131313b3] flex justify-center items-center mb-3 cursor-pointer font-bold text-center">

                                <NavLink
                                    to='/all_volunteer'
                                    className={({ isActive }) =>
                                        isActive ? 'text-[1rem] mx-6 font-semibold text-[#1b206b]' : 'text-[1rem] mx-6 font-semibold text-black'
                                    }
                                >
                                    All Volunteer Need post
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

                                                <div className="dropdown dropdown-bottom py-1">
                                                    <div tabIndex={0} role="button" className="bg-white text-secondary px-4 rounded-lg mx-4 py-1">My Profile</div>
                                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                        <li><Link to={'/add_volunteer_need'}>Add Volunteer need Post</Link></li>
                                                        <li><Link to={'/manage_my_post'}>Manage My Posts</Link></li>
                                                    </ul>
                                                </div>

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
                                    isActive ? 'text-[1rem] flex items-center mr-6 font-semibold text-[#1b206b] bg-white px-4 py-1 rounded-lg' : 'text-[1rem] flex items-center mr-6 font-semibold text-white'
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to='/all_volunteer'
                                className={({ isActive }) =>
                                    isActive ? 'text-[1rem] flex items-center mr-6 font-semibold text-[#1b206b] bg-white px-4 py-1 rounded-lg' : 'text-[1rem] flex items-center mr-6 font-semibold text-white'
                                }
                            >
                                All volunteer Need posts
                            </NavLink>







                        </div>

                        <div className="lg:flex  md:flex items-center sm:hidden  ">



                            {
                                user && user?.email ? (
                                    <>
                                        <div className="dropdown dropdown-bottom py-1">
                                            <div tabIndex={0} role="button" className="bg-white text-secondary px-4 rounded-lg mx-4 py-1">My Profile</div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li><Link to={'/add_volunteer_need'}>Add Volunteer need Post</Link></li>
                                                <li><Link to={'/manage_my_post'}>Manage My Posts</Link></li>
                                            </ul>
                                        </div>




                                        <div className="dropdown dropdown-hover">
                                            <div tabIndex={0} role="button" className=" m-1">
                                                <Link data-tooltip-id="my-tooltip" data-tooltip-content={user && user?.displayName}>
                                                    <div className="bg-white border w-[60px] h-[60px] p-1 rounded-full mr-4">
                                                        <img className="object-cover h-full w-full rounded-full" src={user?.photoURL} alt="" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li><a> <button onClick={handleLogOut}>

                                                    Log Out

                                                </button></a></li>

                                            </ul>
                                        </div>








                                    </>

                                ) :

                                    (
                                        <>
                                            <Link to={'/login'}>
                                                <div className="bg-white border p-2 px-4 rounded-full mr-4 relative">
                                                    <p>Login</p>
                                                </div>
                                            </Link>
                                        </>

                                    )

                            }


                        </div>





                        <div className='mx-4 lg:hidden sm:block md:block'>
                            <button onClick={() => setMenu(!menu)}>
                                {
                                    menu ? <IoMenu className="text-3xl text-[#f75d1b]" /> : <RxCross2 className="text-3xl text-[#f75d1b]" />
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