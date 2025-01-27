

const Tutor_home_card = ({ tutors }) => {
    const {name,photo_url,specialized} = tutors;

    
 
    return (
        <div>
            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-primary">
                <div className="relative">
                    <img className="w-full h-48 object-cover" src={photo_url} alt="Profile Image" />
                </div>
                <div className="px-6 py-4">
                    <div className="text-xl font-semibold text-gray-800">{name}</div>
                    <p className="text-gray-600">{specialized}</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">Web</span>
                    <span className="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">UI/UX</span>
                    <span className="inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">Design</span>
                </div>
                <div className="px-6 py-4">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
                </div>
            </div>
        </div>
    );
};

export default Tutor_home_card;