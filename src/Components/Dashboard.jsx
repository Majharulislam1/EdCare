import { MdCreateNewFolder } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";
import useUser from "../Hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import { MdPowerSettingsNew } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";


const Dashboard = () => {

    const { user, handleLogOut } = useContext(AuthContext);
    const [isUser, isPending] = useUser();
    if (isPending) return <p>Loading</p>;
    const userRole = isUser?.[0]?.role;


    return (
        <div>
            <div className="flex">


                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <div className="mb-2 p-4">
                        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dashboard</h5>
                    </div>
                    <div className="mb-2 p-4">
                        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">{userRole}</h5>
                    </div>
                    <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">

                        {
                            userRole === 'tutor' && <>
                                <NavLink to={'create-study-session'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <MdCreateNewFolder className="text-2xl mx-2" />
                                    Create Study session

                                </NavLink>
                                <NavLink to={'all_study_session'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <CiViewList className="text-2xl mx-2" />
                                    View all Study session

                                </NavLink>
                                <NavLink to={'upload_materials'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <IoCloudUploadOutline className="text-2xl mx-2" />
                                    Upload Materials

                                </NavLink>
                                <NavLink to={'all_materials'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <CiViewList className="text-2xl mx-2" />
                                    View all Materials

                                </NavLink>
                                <NavLink to={'reject_reason'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <ImCancelCircle className="text-2xl mx-2" />
                                    Rejected  Reason

                                </NavLink>
                            </>
                        }

                        {
                            userRole === 'student' && <>

                                <NavLink to={'view_booked_session'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <IoBookmarksOutline className="text-2xl mx-2" />
                                    View booked session
                                </NavLink>

                                <NavLink to={'create_note'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <LuNotebookPen className="text-2xl mx-2" />
                                    Create Note
                                </NavLink>



                                <NavLink to={'manage_notes'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <MdOutlineManageHistory className="text-2xl mx-2" />
                                    Manage notes
                                </NavLink>

                                <NavLink to={'study_materials'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <IoBookOutline className="text-2xl mx-2" />
                                    Study Materials
                                </NavLink>

                            </>
                        }

                        {
                            userRole === 'admin' && <>

                                <NavLink to={'view_all_user'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >


                                    <FiUsers className="text-2xl mx-2" />
                                    View All User
                                </NavLink>

                                <NavLink to={'view_all_study_session'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <LuNotebookPen className="text-2xl mx-2" />
                                    View all study session
                                </NavLink>



                                <NavLink to={'view_all_materials'}
                                    className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                    <GoChecklist className="text-2xl mx-2" />
                                    View all materials


                                </NavLink>



                            </>
                        }



                        <hr />

                        <NavLink to={'/'}
                            className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                            <FaHome className="text-2xl mx-2" />
                            Home

                        </NavLink>

                        {
                            user?.email && <Link onClick={handleLogOut}
                                className={'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80    '} >
                                <MdPowerSettingsNew className="text-2xl mx-2" />
                                LogOut
                            </Link>
                        }



                    </nav>
                </div>

                <div className="w-full">
                    <div className="p-6">
                        <Outlet></Outlet>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;