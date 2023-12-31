
const Footer = () => {


    return (
        <>
            <footer data-aos="fade-up" className="footer px-10 py-4 border-t bg-slate-500 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className="w-36 rounded-full" src="https://img.freepik.com/free-vector/gradient-book-logo-with-slogan_23-2148832096.jpg?w=740&t=st=1690001800~exp=1690002400~hmac=0efbfe86bd920d5c5168705bddb47c92622bc680adc815c8e1f17d3403253a4e" alt="" />
                    <p className="ms-3"><span className="font-bold text-xl">Book-Club</span><br /><span className="text-blue-50">Gulshan, Dhaka-1212</span></p>

                </div>
                <div className="mt-3">
                    <h2 className="font-bold text-3xl mb-1">Contact Information</h2>
                    <p className="text-xl text-blue-50">Phone: 002-6598562</p>
                    <p className="text-xl text-blue-50">email: book@gmail.com</p>
                    <p className="mt-3">Copyright © 2023 - All right reserved</p>
                </div>

                <div className="md:place-self-center md:justify-self-end">
                    <div>
                        <h1 className="font-bold text-3xl mb-5">Connect</h1>
                    </div>
                    <div className="grid grid-flow-col gap-4 me-10">
                        <a className="text-blue-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a className="text-blue-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a className="text-blue-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        <a className="text-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M12 3c-1.77 0-3.384.493-4.773 1.343l-1.509-1.51-1.414 1.415 1.509 1.51c-.85 1.389-1.342 3.003-1.342 4.773 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c3.313 0 6 2.687 6 6 0 1.393-.51 2.665-1.344 3.656l-.313.343 1.414 1.414.343-.313c.99-.834 2.263-1.344 3.656-1.344 3.313 0 6 2.687 6 6 0 3.312-2.687 6-6 6-1.393 0-2.665-.51-3.656-1.344l-.343-.313-1.414 1.414.313.343c.834.99 1.344 2.263 1.344 3.656 0 3.313-2.687 6-6 6-3.312 0-6-2.687-6-6 0-1.393.51-2.665 1.344-3.656l.313-.343-1.414-1.414-.343.313c-.99.834-2.263 1.344-3.656 1.344-3.312 0-6-2.687-6-6 0-3.312 2.687-6 6-6zm5 10l5-5-5-5v10z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;