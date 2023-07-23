import img1 from '../../../assets/college-graduation/img1.jpg'
import img2 from '../../../assets/college-graduation/img2.jpg'
import img3 from '../../../assets/college-graduation/img3.png'
import img4 from '../../../assets/college-graduation/img4.png'
import img5 from '../../../assets/college-graduation/img5.png'
import img6 from '../../../assets/college-graduation/img7.jpg'

const Gallery = () => {
    return (
        <div className='my-20'>
            <div className="container mx-auto py-6">
                <h1 className="text-5xl font-bold text-center mb-10 underline">Book-Club Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img1} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img2} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img3} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img4} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img5} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img6} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img3} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img2} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={img1} className='w-full h-80 object-cover object-center transition-transform duration-300 transform hover:scale-110' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;