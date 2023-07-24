import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewDetails = ({ singleReview }) => {

    const { picture, name, date, review } = singleReview

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <div className="card card-side bg-base-100 shadow-xl py-3">
            <div data-aos="fade-left" className="review-image pe-2 ps-5">
                <img src={picture} alt="" className="w-16 h-16 rounded-full" />
            </div>
            <div>
                <div data-aos="fade-right">
                    <h2 className="card-title">{name}</h2>
                    <span className="text-yellow-500 mr-1">★★★★★</span>
                    <span className="text-gray-700">(2 Reviews)</span>
                    <p className="text-gray-500">{date}</p>
                    <p className="text-base">{review}</p>
                </div>

            </div>
        </div>

    );
};

export default ReviewDetails;