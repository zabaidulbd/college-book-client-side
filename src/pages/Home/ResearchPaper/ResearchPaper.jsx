import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ResearchPaper = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);


    return (
        <div className="my-20">
            <h1 data-aos="fade-right" className="text-5xl text-center font-bold mb-10 underline">The Art Of Reading Research Paper</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/business-women-signature-document_1388-90.jpg?w=900&t=st=1690021530~exp=1690022130~hmac=ab17af7225e0daa00e26913944aaca711eb3d741f65ff73ebf623577a0a205e4" alt="paper" className="rounded-xl w-full h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">First Research Paper</h2>
                        <p>If a dog chews first whose paper does he choose?</p>
                        <Link data-aos="fade-right" className="w-full bg-blue-400 text-white font-semibold p-4" to="https://sci-hub.se/10.1016/j.compstruct.2006.11.008">Link</Link>
                    </div>
                </div>
                <div data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-vector/research-background-design_1300-249.jpg?w=740&t=st=1690021544~exp=1690022144~hmac=dc66b34abc1b9468cd550e8a8359b01cdb82ce8a2a0a1f9975a76fedc219e3bb" alt="paper" className="rounded-xl w-full h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Second Research Paper</h2>
                        <p>If a dog chews first whose paper does he choose?</p>
                        <Link data-aos="fade-right" className="w-full bg-blue-400 text-white font-semibold p-4" to="https://sci-hub.se/10.1016/j.compstruct.2006.11.008">Link</Link>
                    </div>
                </div>
                <div data-aos="fade-right" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-vector/file-searching-concept-landing-page_23-2148298808.jpg?w=740&t=st=1690021547~exp=1690022147~hmac=2b40757114c91f0de073d9286e521d19fa613f3b5b6ac31484292608aa20f5c9" alt="paper" className="rounded-xl w-full h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Third Research Paper</h2>
                        <p>If a dog chews first whose paper does he choose?</p>
                        <Link data-aos="fade-right" className="w-full bg-blue-400 text-white font-semibold p-4" to="https://sci-hub.se/10.1016/j.compstruct.2006.11.008">Link</Link>
                    </div>
                </div>
                <div data-aos="fade-down" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept-with-documents_23-2149154259.jpg?w=740&t=st=1690021554~exp=1690022154~hmac=939d09410e67a01a3187aedfbc84ee55a4b6b2a8acf691b1dd21aba56290fb7d" alt="paper" className="rounded-xl w-full h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fourth Research Paper</h2>
                        <p>If a dog chews first whose paper does he choose?</p>
                        <Link data-aos="fade-right" className="w-full bg-blue-400 text-white font-semibold p-4" to="https://sci-hub.se/10.1016/j.compstruct.2006.11.008">Link</Link>
                    </div>
                </div>
                <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/office-equipment-put-table_23-2147651022.jpg?w=900&t=st=1690021569~exp=1690022169~hmac=89bb04e8585bfbb6923609552a36fc003d227d302345aeb448c95c8395417a94" alt="paper" className="rounded-xl w-full h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fifth Research Paper</h2>
                        <p>If a dog chews first whose paper does he choose?</p>
                        <Link data-aos="fade-right" className="w-full bg-blue-400 text-white font-semibold p-4" to="https://sci-hub.se/10.1016/j.compstruct.2006.11.008">Link</Link>
                    </div>
                </div>
                <div data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/top-view-back-school-supplies-with-notebook-magnifying-glass_23-2148587151.jpg?w=740&t=st=1690021572~exp=1690022172~hmac=3f370d9efbf4fee9707a73f0b782591153b235dae4b00746579f4871a56bdff3" alt="paper" className="rounded-xl w-full h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sixth Research Paper</h2>
                        <p>If a dog chews first whose paper does he choose?</p>
                        <Link data-aos="fade-right" className="w-full bg-blue-400 text-white font-semibold p-4" to="https://sci-hub.se/10.1016/j.compstruct.2006.11.008">Link</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchPaper;