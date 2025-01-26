import { MdCreateNewFolder } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";


const Dashboard = () => {

    const userRole = 'student';

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


                        <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                            <div className="grid place-items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z" clipRule="evenodd"></path>
                                </svg>
                            </div>Example Pages

                            <div className="grid place-items-center ml-auto justify-self-end">
                                <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full">
                                    <span className="">14</span>
                                </div>
                            </div>
                        </div>

                        <NavLink to={'/'}
                            className={({ isActive }) => isActive ? "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all   bg-primary text-white  outline-none" : 'flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50   active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 outline-none'} >
                            <FaHome className="text-2xl mx-2" />
                            Home

                        </NavLink>

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