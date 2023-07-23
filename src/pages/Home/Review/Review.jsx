import { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";


const Review = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setReviews(data);
            });
    }, []);

    return (
        <div className="my-20 ps-10 pe-10">
            <h1 className="text-5xl text-center font-bold underline mb-10">College Reviews and Feedback</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    reviews.map(singleReview => <ReviewDetails key={singleReview._id} singleReview={singleReview}></ReviewDetails>)
                }
            </div>

        </div>
    );
};

export default Review;