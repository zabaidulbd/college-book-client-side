

const SingleCollege = ({ single }) => {

    const { image, name, date, events, research, sports } = single;


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
                <img src={image} alt="" className="w-full h-72 object-cover object-center" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base mb-4">Admission Dates: {date}</p>
                    <p className="text-gray-700 text-base mb-4">Upcoming Events: {events}</p>
                    <p className="text-gray-700 text-base mb-4">Research History: {research}</p>
                    <p className="text-gray-700 text-base mb-4">Sports: {sports}</p>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCollege;