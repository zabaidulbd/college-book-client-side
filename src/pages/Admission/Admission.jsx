
import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-5xl text-center font-bold mb-10'>Explore Colleges for Admission</h1>
            <div className='text-center text-3xl font-semibold'>
                <p><Link to='/oxford'>(i).Cambrige College </Link></p>
                <p className='py-2'><Link to='/oxford'>(ii).Oxford College </Link></p>
                <p><Link to='/oxford'>(iii).North South College</Link></p>
                <p className='py-2'><Link to='/oxford'>(iv).Dhaka College </Link></p>
                <p><Link to='/oxford'>(v).South East College </Link></p>
            </div>
        </div>
    );
};

export default Admission;