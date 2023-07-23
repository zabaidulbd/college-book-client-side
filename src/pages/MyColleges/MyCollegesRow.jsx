import { Link } from "react-router-dom";


const MyCollegesRow = ({ singleCandidate }) => {

    const { picture, name, email, subject, phone, address, date, detail } = singleCandidate



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
                    <Link><button className="btn btn-neutral me-2">Add Review</button></Link>
                </td>
            </tr>


        </>
    );
};

export default MyCollegesRow;