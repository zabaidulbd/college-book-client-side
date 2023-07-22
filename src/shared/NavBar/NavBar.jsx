
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";



const Navbar = () => {
    return (
        <div data-aos="fade-up" className="navbar bg-slate-400">
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
                    <p className="text-xl font-bold text-blue-50 mx-5"><ActiveLink to={'/college'}>Colleges</ActiveLink></p>
                </div>
                <div>
                    <span className="text-xl font-bold text-blue-50"><ActiveLink to={'/admission'}>Admission</ActiveLink></span> </div>
            </div>

            <div className="flex-none gap-2">
                {/* <span className="text-xl font-bold text-blue-50">
                    <ActiveLink to={'/addToy'}>Add a Toy</ActiveLink>
                </span>
                <span className="text-xl font-bold text-blue-50 mx-4"><ActiveLink to={'/toys'}>My Colleges</ActiveLink></span>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full mx-2">
                        <img src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-red-folder_1298-179.jpg?w=740&t=st=1683177286~exp=1683177886~hmac=c440209e285a379ced974449f84436bdcc297217e39170b08f534dfe769c131d" title="Zabaidul Islam" />
                    </div>
                </label>

                <button className="btn btn-outline btn-accent me-10"><span className="text-white">Log-Out</span></button> */}

                <Link to={'/login'}><button className="btn btn-outline btn-accent me-10"><span className="text-white">Login</span></button></Link>

            </div>
        </div>

    );
};

export default Navbar;