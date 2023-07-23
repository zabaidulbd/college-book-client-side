import { Link } from "react-router-dom";


const SingleUsers = ({ singleUser }) => {
    const { _id, picture, name, email, subject, phone, address, date, detail } = singleUser;

    return (
        <>
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
                    <Link to={`/updateUser/${_id}`}><button className="btn btn-neutral">Edit</button></Link>
                </td>
            </tr>

        </>
    );
};

export default SingleUsers;