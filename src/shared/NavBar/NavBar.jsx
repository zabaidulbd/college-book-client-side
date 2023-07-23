
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }




    return (
        <div data-aos="fade-up" className="navbar bg-slate-500">
            <div className="flex-1">
                <div>
                    <img className="w-32 rounded-full mx-5" src="https://img.freepik.com/free-vector/gradient-book-logo-with-slogan_23-2148832096.jpg?w=740&t=st=1690001800~exp=1690002400~hmac=0efbfe86bd920d5c5168705bddb47c92622bc680adc815c8e1f17d3403253a4e" alt="" />
                </div>
                <div><h1 className="text-5xl font-bold text-blue-50 mr-5">Book-Club</h1></div>
                <div>

                    <p className="text-xl font-bold text-blue-50">
                        <ActiveLink to={'/'}>Home</ActiveLink>
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold text-blue-50 mx-5"><ActiveLink to={'/colleges'}>Colleges</ActiveLink></p>
                </div>
                <div>
                    <span className="text-xl font-bold text-blue-50"><ActiveLink to={'/admission'}>Admission</ActiveLink></span>
                </div>
                <div className="ms-3">
                    <span className="text-xl font-bold text-blue-50"><ActiveLink to={'/myColleges'}>My Colleges</ActiveLink></span>
                </div>
            </div>

            <div className="flex-none gap-2">
                {
                    user?.email ?
                        <>
                            <span className="text-xl font-semibold text-blue-50 mx-4"><Link to={'/users'}>{user?.displayName ? user.displayName : <FaUserAlt></FaUserAlt>}</Link></span>
                            <button className="btn btn-outline btn-accent me-10" onClick={handleSignOut}><span className="text-white">Log-Out</span></button>
                        </> :
                        <Link to={'/login'}><button className="btn btn-outline btn-accent me-10"><span className="text-white">Login</span></button></Link>
                }

            </div>
        </div>

    );
};

export default Navbar;