import { Link } from "react-router-dom";


const MyCollegesRow = ({ singleCandidate }) => {

    const { picture, name, email, subject, phone, address, date, detail } = singleCandidate;


    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const reviewDetails = {

            picture,
            name,
            date,
            review

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Add successfully');
                    form.reset();

                }
            })

    }



    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <form onSubmit={handleReviewSubmit} method="dialog" className="modal-box">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Add Review</span>
                        </label>
                        <input type="text" name="review" placeholder="review" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-2">
                        <input className="btn btn-info" type="submit" value="Submit" />
                    </div>
                </form>
            </dialog>
            <tr>
                <th>
                    <div>
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                picture && <img src={picture} alt="" />
                            }
                        </div>
                    </div>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="font-bold">{name}</div>
                    </div>
                </td>
                <td>{email}</td>
                <td>{subject}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>{date}</td>
                <td>{detail}</td>
                <td>
                    <button className="bg-gray-400 p-3 font-bold mr-2" onClick={() => window.my_modal_1.showModal()}>Add Review</button>
                    <Link to='http://localhost:5179/colleges/1'>
                        <button className="bg-gray-400 p-3 font-bold">College Details</button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default MyCollegesRow;