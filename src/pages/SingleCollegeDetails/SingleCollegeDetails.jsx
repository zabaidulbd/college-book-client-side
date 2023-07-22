import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleCollegeDetails = () => {
    const [details, setDetails] = useState({})
    const dynamicCollege = useParams();
    const dynamicCollegeId = dynamicCollege.collegeId;
    const collegeDetails = useLoaderData();
    useEffect(() => {
        if (collegeDetails) {
            const uniqueCollege = collegeDetails.find(data => data.id == dynamicCollegeId);
            setDetails(uniqueCollege)

        }
    }, [])

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={details.image} alt="" className="w-full h-60 object-cover object-center" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{details.name}</div>
                        <p className="text-gray-700 text-base mb-4">Admission Process: {details.process}</p>
                        <p className="text-gray-700 text-base mb-4">Events Details: {details.details}</p>
                        <p className="text-gray-700 text-base mb-4">Research Works: {details.work}</p>
                        <p className="text-gray-700 text-base mb-4">Sports Categories:{details.category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCollegeDetails;