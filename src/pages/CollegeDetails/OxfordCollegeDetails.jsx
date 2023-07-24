

const OxfordCollegeDetails = ({ college }) => {

    const { image, name, process, details, work, category } = college;

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={image} alt="" className="w-full h-60 object-cover object-center" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base mb-4">Admission Process: {process}</p>
                    <p className="text-gray-700 text-base mb-4">Events Details: {details}</p>
                    <p className="text-gray-700 text-base mb-4">Research Works: {work}</p>
                    <p className="text-gray-700 text-base mb-4">Sports Categories:{category}</p>
                </div>
            </div>
        </div>
    );
};

export default OxfordCollegeDetails;