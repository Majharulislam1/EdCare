import { Link } from "react-router-dom";


const Session_home_card = ({ sessions }) => {

    const { _id ,cover_img, session_title, description, status, reg_start_date, reg_end_date } = sessions;


    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const startDate = new Date(reg_start_date);
    const endDate = new Date(reg_end_date);

    const isRegistrationOpen = currentDate >= startDate && currentDate <= endDate;


      





    return (
        <div>


            <div className=" flex justify-center align-bottom">
                <div className="max-w-sm ">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <img className="rounded-t-lg w-full" src={cover_img} alt="" />
                        <div className="py-6 px-8 rounded-lg bg-white">
                            <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{session_title}</h1>
                            <p className="text-gray-700 tracking-wide">{description.slice(1, 100)}</p>
                            <div className="flex justify-between">
                            {
                                isRegistrationOpen ? <button className="mt-6 py-2 px-4 bg-primary text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">On Going</button>  : <button className="mt-6 py-2 px-4 bg-primary text-white font-bold rounded-lg  transition duration-300">Closed</button>
                            }
                            <Link to={`session_details/${_id}`}>
                            <button className="mt-6 py-2 px-4 bg-primary text-white font-bold rounded-lg  transition duration-300">Read More</button>
                            </Link>
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 py-2 px-4 bg-primary text-white rounded-lg">
                            <span className="text-md">{status}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Session_home_card;