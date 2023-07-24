import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Oxford = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
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
        const candidateDetails = {

            picture,
            name,
            email,
            subject,
            phone,
            address,
            date,
            detail

        }

        fetch('https://college-book-server-beta.vercel.app/candidates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(candidateDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Application Submit successfully');
                    form.reset();

                }
            })

    }

    return (
        <>
            <h1 className="font-bold text-center text-5xl mt-20 mb-10">Admission Application Form</h1>
            <form onSubmit={handleSubmit} className="m-16 me-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Picture Url Of the Candidate</span>
                        </label>
                        <input type="text" placeholder="picture url" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Candidates Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />

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
                        <select className="input input-bordered font-bold" name="subject">
                            <option value="physics">Physics</option>
                            <option value="english">English</option>
                            <option value="math">Math</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Phone No.</span>
                        </label>
                        <input type="text" name="phone" placeholder="phone" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="address" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Date of birth</span>
                        </label>
                        <input type="date" name="date" placeholder="date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <input type="text" name="detail" placeholder="detail" className="input input-bordered" />

                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="bg-gray-300 font-bold p-4 btn btn-block" type="submit" value="Submit" />
                </div>
            </form>
        </>
    );
};

export default Oxford;