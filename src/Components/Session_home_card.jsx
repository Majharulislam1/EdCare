import { Link } from "react-router-dom";


const Session_home_card = ({ sessions }) => {

    const { _id, cover_img, session_title, description, status, reg_start_date, reg_end_date } = sessions;


    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const startDate = new Date(reg_start_date);
    const endDate = new Date(reg_end_date);

    const isRegistrationOpen = currentDate >= startDate && currentDate <= endDate;








    return (


        <div className="h-full flex flex-col">
            <div className="bg-white relative shadow-lg rounded-xl justify-between flex flex-col h-full overflow-hidden">
                
             
                <img className="rounded-t-lg w-full" src={sessions.cover_img} alt="" />

              
                <div className="py-6 px-8 bg-white flex flex-col flex-grow">
                    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                        {sessions.session_title}
                    </h1>
                    <p className="text-gray-700 tracking-wide flex-grow">
                        {sessions.description.slice(0, 100)}
                    </p>

                   
                    <div className="flex justify-between mt-auto">
                        {isRegistrationOpen ? (
                            <>
                                <button className="py-2 px-4 my-4 bg-primary text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    On Going
                                </button> 
                                <Link to={`/session_details/${sessions._id}`}>
                                    <button className="py-2 px-4 my-4 bg-primary text-white font-bold rounded-lg transition duration-300">
                                        Read More
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <button className="py-2 px-4 my-4 bg-primary text-white font-bold rounded-lg transition duration-300">
                                Closed
                            </button>
                        )}
                    </div>
                </div>

                
                <div className="absolute top-2 right-2 py-2 px-4 bg-primary text-white rounded-lg">
                    <span className="text-md">{sessions.status}</span>
                </div>
            </div>
        </div>

    );
};

export default Session_home_card;