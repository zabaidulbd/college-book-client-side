import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleCollegeNameDetails = () => {


    const [singleDetails, setSingleDetails] = useState({})
    const dynamicCollegeName = useParams();
    const dynamicCollegeId = dynamicCollegeName.collegesId;
    const collegeNameDetails = useLoaderData();
    useEffect(() => {
        if (collegeNameDetails) {
            const uniqueCollegeName = collegeNameDetails.find(data => data._id == dynamicCollegeId);
            setSingleDetails(uniqueCollegeName)

        }
    }, [])


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={singleDetails.image} alt="" className="w-full h-60 object-cover object-center" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{singleDetails.name}</div>
                    <p className="text-gray-700 text-base mb-4">Admission Process: {singleDetails.process}</p>
                    <p className="text-gray-700 text-base mb-4">Events Details: {singleDetails.details}</p>
                    <p className="text-gray-700 text-base mb-4">Research Works: {singleDetails.work}</p>
                    <p className="text-gray-700 text-base mb-4">Sports Categories:{singleDetails.category}</p>
                    <p className="text-gray-700 text-base mb-4">Research Works: {singleDetails.events}</p>
                    <p className="text-gray-700 text-base mb-4">Sports Categories:{singleDetails.sports}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCollegeNameDetails;