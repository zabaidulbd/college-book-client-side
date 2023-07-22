
import { useLoaderData } from 'react-router-dom';
import CollegeNameDetails from './CollegeNameDetails';

const CollegeName = () => {

    const collegeNameData = useLoaderData();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {
                collegeNameData.map(singleCollege => <CollegeNameDetails key={singleCollege.id} singleCollege={singleCollege}></CollegeNameDetails>)
            }
        </div>
    );
};

export default CollegeName;