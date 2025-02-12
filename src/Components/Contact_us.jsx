import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
const Contact_us = () => {
    return (
        <div className='mt-[120px]'>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">Contact us</h1>
            </div>




            <div>

                {/* contact container  */}

                <section className="mb-32">
                    <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                        <iframe className='border-none'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                            width="100%" height="480"   allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="container px-6 md:px-12 mx-auto ">
                        <div
                            className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                    <form>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <input type="text"
                                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                                id="exampleInput90" />
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                                htmlFor="exampleInput90">Name
                                            </label>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <input type="email"
                                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                                id="exampleInput91" />
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                                htmlFor="exampleInput91">Email address
                                            </label>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <textarea
                                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                                id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <label htmlFor="exampleFormControlTextarea1"
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
                                        </div>
                                        <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                            <input
                                                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                                                type="checkbox" value="" id="exampleCheck96"/>
                                            <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
                                                Send me a copy of this message
                                            </label>
                                        </div>
                                        <button type="button"
                                            className="mb-6 w-full rounded bg-primary text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                                            Send
                                        </button>
                                    </form>
                                </div>
                                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                    <div className="flex flex-wrap">
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="flex items-start">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                   
                                                    <CiMail className="text-lg text-primary"/>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold ">
                                                        Technical support
                                                    </p>
                                                    <p className="text-sm text-neutral-500">
                                                        majharul2022islam@gmail.com
                                                    </p>
                                                     
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="flex items-start">
                                                <div className="srink-0">
                                                    <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                            stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold ">
                                                        Address
                                                    </p>
                                                    <p className="text-sm text-neutral-500">
                                                        Cumilla, , <br />
                                                        Bangladesh<br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                   
                                                    <FiPhoneCall  className='text-lg text-primary'/>

                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold ">Land Line</p>
                                                    <p className="text-neutral-500"> (0421) 431 2030
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                            stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold ">Mobile</p>
                                                    <p className="text-neutral-500"> +880 1780790836
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>



                {/* contact  container  */}




            </div>





        </div>
    );
};

export default Contact_us;