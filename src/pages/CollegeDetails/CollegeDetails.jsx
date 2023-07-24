
import { useLoaderData } from 'react-router-dom';
import OxfordCollegeDetails from './OxfordCollegeDetails';

const CollegeDetails = () => {

    const details = useLoaderData();

    return (
        <>
            {
                details.slice(0, 1).map(college => <OxfordCollegeDetails key={college._id} college={college}></OxfordCollegeDetails>)
            }
        </>
    );
};

export default CollegeDetails;