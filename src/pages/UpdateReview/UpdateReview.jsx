import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateReview = () => {

    const singleUser = useLoaderData();

    const { user } = useContext(AuthContext);

    const { _id, picture, name, subject, phone, address, date, detail } = singleUser;


    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const email = user?.email;
        const subject = form.subject.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const date = form.date.value;
        const detail = form.detail.value;
        const updatedUser = {

            picture,
            name,
            email,
            subject,
            phone,
            address,
            date,
            detail

        }

        fetch(`http://localhost:5000/candidates/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('User Edit Successfully');

                }
            })

    }




    return (
        <>
            <h1 className="font-bold text-center text-5xl mt-20 mb-10">Edit User</h1>
            <form onSubmit={handleUpdateUser} className="m-16 me-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Picture Url Of the Candidate</span>
                        </label>
                        <input type="text" placeholder="picture url" name="picture" defaultValue={picture} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Candidates Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Subjects</span>
                        </label>
                        <select className="input input-bordered font-bold" name="subject" defaultValue={subject}>
                            <option value="physics">Physics</option>
                            <option value="english">English</option>
                            <option value="math">Math</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Phone No.</span>
                        </label>
                        <input type="text" name="phone" defaultValue={phone} placeholder="phone" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Address</span>
                        </label>
                        <input type="text" name="address" defaultValue={address} placeholder="address" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Date of birth</span>
                        </label>
                        <input type="date" name="date" defaultValue={date} placeholder="date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <input type="text" name="detail" defaultValue={detail} placeholder="detail" className="input input-bordered" />

                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="bg-gray-400 font-bold p-4 btn btn-block" type="submit" value="Edit" />
                </div>
            </form>
        </>
    );
};

export default UpdateReview;