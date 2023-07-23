import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import SingleCollege from "../SingleCollege/SingleCollege";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Review from "../Review/Review";


const Home = () => {

    const collegeData = useLoaderData();

    return (
        <div>
            <Gallery></Gallery>
            <section className="my-20">
                <h1 className="text-center text-5xl font-bold underline mb-10">Explore Our Colleges</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {
                        collegeData.slice(0, 3).map(single => <SingleCollege key={single.id} single={single} ></SingleCollege>)
                    }
                </div>
            </section>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Home;