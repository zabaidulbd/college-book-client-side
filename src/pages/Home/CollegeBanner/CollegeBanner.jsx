

const CollegeBanner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/closeup-shot-two-domed-towers-old-royal-naval-college-greenwich-london_181624-44376.jpg?w=1060&t=st=1690178547~exp=1690179147~hmac=883cb72bc5cd67448aea8d565796d5dd1c02893cb1b9c4c1946f937419d64351)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Choose Your Path to Success</h1>
                        <p className="mb-5">Welcome to Your Gateway to Top Colleges, Where Education Transforms Lives</p>
                        <div className="banner-buttons flex justify-center">
                            <button className="explore-button bg-blue-500 text-white px-6 py-3 rounded-md text-xl font-semibold mr-4">
                                Explore More
                            </button>
                            <button className="apply-button bg-red-500 text-white px-6 py-3 rounded-md text-xl font-semibold">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollegeBanner;
