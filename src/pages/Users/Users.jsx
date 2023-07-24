import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SingleUsers from "./SingleUsers";


const Users = () => {


    const { user } = useContext(AuthContext);
    const [myUsers, setMyUsers] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myCollege/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyUsers(data);
            });
    }, [user]);


    return (
        <div className="my-28">
            <h1 className="text-center font-bold text-5xl mt-20 mb-10">User Profile</h1>
            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full p-5">
                    {/* head */}
                    <thead className="bg-gray-200 text-xl">
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
                            myUsers.map(singleUser => <SingleUsers key={singleUser._id} singleUser={singleUser}></SingleUsers>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;