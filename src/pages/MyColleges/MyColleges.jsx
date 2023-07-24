import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyCollegesRow from "./MyCollegesRow";


const MyColleges = () => {

    const { user } = useContext(AuthContext);
    const [myCandidates, setMyCandidates] = useState([]);


    useEffect(() => {
        fetch(`https://college-book-server-beta.vercel.app/myCollege/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyCandidates(data);
            });
    }, [user]);



    return (
        <div className="my-28">
            <h1 className="text-center font-bold text-5xl mt-20 mb-10">List of My Total Colleges</h1>
            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full p-4">
                    {/* head */}
                    <thead className="text-xl bg-gray-200">
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        {
                            myCandidates.map(singleCandidate => <MyCollegesRow key={singleCandidate._id} singleCandidate={singleCandidate}></MyCollegesRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyColleges;