import React from 'react';
import about_img from '../assets/about-img-2.jpg';
import { FaTools } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import Tutor_home_section from './Tutor_home_section';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Tutor_home_card from './Tutor_home_card';

const About_us = () => {

    const axiosPublic = useAxiosPublic();
     

    const { isPending, data: All_Tutor = [] } = useQuery({
        queryKey: ['all_tutor'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all_tutor`);
            return res.data;
        }
    })

    if (isPending) return
    {

        <div className="flex justify-center py-8">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>

    }

    return (
        <div className='mt-[120px]'>
            <div className="relative w-full lg:h-36 md:h-36 sm:h-36 bg-primary  flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">About us</h1>
            </div>

            <div className='w-4/5 mx-auto'>

                <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:my-12 xl:max-w-6xl">


                    <div className="w-full h-64 sm:my-2 lg:w-1/2 lg:h-auto">
                        <img className="h-full w-full object-cover rounded-tr-[100px] rounded-bl-[100px]" src={about_img} alt="Winding mountain road" />
                    </div>

                    <div
                        className="max-w-lg rounded-lg overflow-hidden bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

                        <div className="flex flex-col p-12 md:px-16 ">
                            <h2 className="text-2xl font-medium uppercase font-sans text-primary lg:text-4xl">Over 10 Years in Distant learning
                                for Skill Development</h2>
                            <p className="mt-4 font-sans">
                                Compellingly procrastinate equity invested markets with efficient process improvements. actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.
                            </p>

                            <div className="mt-8">
                                <a href="#"
                                    className=" text-center text-lg font-medium text-gray-100 bg-primary  py-3 px-10  rounded-full">Start Free Trial</a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>


            <div>

                <div className="bg-secondary my-8">

                    <section id="features"
                        className="relative block px-6 py-10 md:py-20 md:px-10  ">


                        <div className="relative mx-auto max-w-5xl text-center">
                            <span className="text-primary my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                                Our Features
                            </span>
                            <h2
                                className=" font-bold  text-black text-3xl sm:text-4xl">
                                Online Education That Improves You
                            </h2>
                            <p
                                className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-paragraph">
                                In today's fast-paced world, education is no longer confined to traditional classrooms. Online education has revolutionized the way we learn, making knowledge accessible to anyone, anywhere. Whether you're a student looking to enhance your skills
                            </p>
                        </div>


                        <div className="relative mx-auto max-w-7xl z-10 grid sm:grid-cols-1 gap-10 pt-14 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-md bg-white   p-8 text-center  ">
                                <div className="button-text mx-auto flex h-12 w-12 items-center bg-primary justify-center rounded-md border "
                                >

                                    <FaTools className='text-white' />
                                </div>
                                <h3 className="mt-6 text-black font-semibold">Interactive Learning Tools</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"> Incorporating features like quizzes,
                                    simulations, and multimedia content that
                                    actively engage students.
                                </p>
                            </div>


                            <div className="rounded-md   bg-white p-8 text-center  ">
                                <div className="button-text bg-primary mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                                >

                                    <FaBuffer  className='text-white'/>

                                </div>
                                <h3 className="mt-6 text-black font-semibold">Easy Flexible Access</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">


                                    In today's digital age, education
                                    should be accessible to everyone, regardless
                                    of location, schedule.

                                </p>
                            </div>


                            <div className="rounded-md   bg-white p-8 text-center ">
                                <div className="button-text mx-auto bg-primary flex h-12 w-12 items-center justify-center rounded-md border "
                                >

                                    <FaChalkboardTeacher className='text-white' />

                                </div>
                                <h3 className="mt-6 text-black font-semibold">Personalized Learning Paths</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">



                                    Every learner is unique, with different
                                    goals, skill levels, and learning preferences.
                                    Personalized learning paths
                                </p>
                            </div>


                        </div>



                    </section>
                </div>







            </div>



            <div>
            <div className="lg:py-20 md:py-16 sm:py-10 bg-white">
                <h1 className="text-center mb-4  lg:text-4xl md:text-4xl sm:text-2xl font-bold">Explore Our World&apos;s Best Courses</h1>
                <div>
                    <p className="lg:w-2/4 md:w-2/4 sm:w-4/5 text-paragraph text-justify mx-auto">
                        Explore a range of free, expert-led courses designed to help you enhance your skills and knowledge in various fields. The &quot;Introduction to Programming&quot; course offers a strong foundation for beginners with hands-on examples over 20 sessions, starting on February 15, 2025
                    </p>
                </div>
            </div>

            <div className="w-4/5 mx-auto ">
                <div className="grid lg:grid-cols-4 mt-10 md:grid-cols-2 gap-6 sm:grid-cols-1 mb-16">
                    {
                       All_Tutor.slice(0,4)?.map(items => <Tutor_home_card key={items.name} tutors={items}></Tutor_home_card>)
                    }
                </div>
            </div>
            </div>





        </div>
    );
};

export default About_us;