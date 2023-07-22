import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import SingleCollege from "../SingleCollege/SingleCollege";


const Home = () => {

    const collegeData = useLoaderData();

    return (
        <div>
            <Gallery></Gallery>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {
                        collegeData.slice(0, 3).map(single => <SingleCollege key={single.id} single={single} ></SingleCollege>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;