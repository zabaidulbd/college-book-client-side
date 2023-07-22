
import { useLoaderData } from 'react-router-dom';
import CollegeNameDetails from './CollegeNameDetails';

const CollegeName = () => {

    const collegeNameData = useLoaderData();

    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-5xl text-center font-bold underline'>Explore Our Colleges</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {
                    collegeNameData.map(singleCollege => <CollegeNameDetails key={singleCollege.id} singleCollege={singleCollege}></CollegeNameDetails>)
                }
            </div>
        </div>
    );
};

export default CollegeName;