
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Admission = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);



    return (
        <div className='mt-20 mb-10'>
            <h1 data-aos="fade-down" className='text-5xl text-center font-bold mb-10'>Explore Colleges for Admission</h1>
            <div className='text-center text-3xl font-semibold'>
                <p data-aos="fade-left"><Link to='/oxford'>(i).Cambrige College </Link></p>
                <p data-aos="fade-right" className='py-2'><Link to='/oxford'>(ii).Oxford College </Link></p>
                <p data-aos="fade-left"><Link to='/oxford'>(iii).North South College</Link></p>
                <p data-aos="fade-right" className='py-2'><Link to='/oxford'>(iv).Dhaka College </Link></p>
                <p data-aos="fade-left"><Link to='/oxford'>(v).South East College </Link></p>
            </div>
        </div>
    );
};

export default Admission;