import React, { useContext, useState } from 'react';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import logo from '../assets/logo-black.png';
import { AuthContext } from './Authentication';
import useUser from '../Hooks/useUser';
import { MdCreateNewFolder, MdOutlineManageHistory, MdPowerSettingsNew } from 'react-icons/md';
import { CiViewList } from 'react-icons/ci';
import { IoBookmarksOutline, IoBookOutline, IoCloudUploadOutline } from 'react-icons/io5';
import { ImCancelCircle } from 'react-icons/im';
import { LuNotebookPen } from 'react-icons/lu';
import { FiUsers } from 'react-icons/fi';
import { GoChecklist } from 'react-icons/go';

const Dashboard_2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const { user, handleLogOut } = useContext(AuthContext);
    const [isUser, isPending] = useUser();
    if (isPending)
        return (<div className="flex justify-center items-center h-screen py-8">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>);
    const userRole = isUser?.[0]?.role;



    return (
        <div>
            {/* mobile navbar  */}
            <div className='flex justify-between md:hidden blurNavbar w-4/5 mx-auto py-4 items-center'>
                <div>

                    <img src={logo} width={'40%'} alt="" />
                </div>
                <div>

                    <button onClick={toggleSidebar}>
                        {
                            isOpen ? <FaTimes size={24} /> : <FaBars size={24} />
                        }
                    </button>
                </div>
            </div>

            <div className="flex min-h-screen">



                {/* Sidebar */}
                <div
                    className={`fixed inset-y-0 left-0 z-50 w-64 shadow-lg  bg-white backdrop-blur-xl text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <h2 className="text-xl text-black font-bold">Dashboard</h2>
                        <button className="md:hidden text-black" onClick={toggleSidebar}>
                            <FaTimes size={24} />
                        </button>
                    </div>



                    {/* sidebar menu*/}
                    <nav className="py-4">
                        <ul className="space-y-2">
                            {
                                userRole === 'tutor' && <>
                                    <NavLink to={'create-study-session'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50  text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <MdCreateNewFolder className="text-2xl mx-2" />
                                        Create Study session

                                    </NavLink>
                                    <NavLink to={'all_study_session'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <CiViewList className="text-2xl mx-2" />
                                        View all Study session

                                    </NavLink>
                                    <NavLink to={'upload_materials'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <IoCloudUploadOutline className="text-2xl mx-2" />
                                        Upload Materials

                                    </NavLink>
                                    <NavLink to={'all_materials'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <CiViewList className="text-2xl mx-2" />
                                        View all Materials

                                    </NavLink>
                                    <NavLink to={'reject_reason'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <ImCancelCircle className="text-2xl mx-2" />
                                        Rejected  Reason

                                    </NavLink>
                                </>
                            }

                            {
                                userRole === 'student' && <>

                                    <NavLink to={'view_booked_session'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <IoBookmarksOutline className="text-2xl mx-2" />
                                        View booked session
                                    </NavLink>

                                    <NavLink to={'create_note'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <LuNotebookPen className="text-2xl mx-2" />
                                        Create Note
                                    </NavLink>



                                    <NavLink to={'manage_notes'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50  text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <MdOutlineManageHistory className="text-2xl mx-2" />
                                        Manage notes
                                    </NavLink>

                                    <NavLink to={'study_materials'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black  active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <IoBookOutline className="text-2xl mx-2" />
                                        Study Materials
                                    </NavLink>

                                </>
                            }

                            {
                                userRole === 'admin' && <>

                                    <NavLink to={'view_all_user'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >


                                        <FiUsers className="text-2xl mx-2" />
                                        View All User
                                    </NavLink>

                                    <NavLink to={'view_all_study_session'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <LuNotebookPen className="text-2xl mx-2" />
                                        View all study session
                                    </NavLink>



                                    <NavLink to={'view_all_materials'}
                                        className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 text-black    active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                        <GoChecklist className="text-2xl mx-2" />
                                        View all materials


                                    </NavLink>



                                </>
                            }



                            <hr />

                            <NavLink to={'/'}
                                className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 text-black  hover:text-blue-900 focus:text-blue-900 outline-none'} >
                                <FaHome className="text-2xl mx-2" />
                                Home

                            </NavLink>

                            {
                                user?.email && <Link onClick={handleLogOut}
                                    className={'flex items-center w-full p-3 rounded-lg text-start text-black  leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80    '} >
                                    <MdPowerSettingsNew className="text-2xl mx-2" />
                                    LogOut
                                </Link>
                            }


                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Overlay for mobile when sidebar is open */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                            onClick={toggleSidebar}
                        ></div>
                    )}

                    {/* Main content */}
                    <div className="p-4 md:ml-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard_2;