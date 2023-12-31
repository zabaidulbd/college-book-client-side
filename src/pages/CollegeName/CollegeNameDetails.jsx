
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CollegeNameDetails = ({ singleCollege }) => {


    const { _id, image, name, date, research, rating, } = singleCollege

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);


    return (

        <>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
                    <img src={image} alt="" className="w-full h-72 object-cover object-center" />
                    <div data-aos="fade-up" className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base mb-4">Admission Dates: {date}</p>
                        <p className="text-gray-700 text-base mb-4">Research History: {research}</p>
                        <p className="text-gray-700 text-base mb-4">Sports: {rating}</p>
                    </div>
                    <div data-aos="fade-left" className="flex justify-end">
                        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 me-3 mb-3" to={`/colleges/${_id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollegeNameDetails;