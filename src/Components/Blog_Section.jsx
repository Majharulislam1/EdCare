import React from 'react';

const Blog_Section = () => {
    return (
        <div>
            <div className="lg:py-20 md:py-16 sm:py-10 bg-[#f2f3f5]">
                <h1 className="text-center mb-4  lg:text-4xl md:text-4xl sm:text-2xl font-bold">Latest Articles and Learning Resources </h1>
                <div>
                    <p className="lg:w-2/4 md:w-2/4 sm:w-4/5 text-paragraph text-justify mx-auto">
                        Stay up-to-date with the latest educational trends, tips, and insights from experts in various fields. Our blog is packed with valuable content designed to help you grow, improve your skills, and stay motivated throughout your learning journey.
                    </p>
                </div>
            </div>


            <div className="relative bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">

                <div className="relative mx-auto w-4/5">

                    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">

                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-primary">
                                        <a href="#" className="hover:underline">Web Development</a>
                                    </p>
                                    <a href="#" className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">10 Essential Web Development Skills Every Developer Should Master</p>
                                        <p className="mt-3 text-base text-gray-500">Web development is constantly evolving, and staying ahead of the curve requires mastering a diverse set of skills. From HTML and CSS to modern JavaScript frameworks, discover the essential skills every web developer should focus on to stay relevant in the industry.</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Roel Aufderehar</span>
                                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href="#" className="hover:underline">Roel Aufderehar</a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime="2020-03-16">Mar 16, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-primary">
                                        <a href="#" className="hover:underline">Python</a>
                                    </p>
                                    <a href="#" className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">Why Python is the Most Popular Language for Beginners?</p>
                                        <p className="mt-3 text-base text-gray-500"> Python is widely known for its simplicity and readability, making it the ideal language for beginners. Learn why Python is a top choice for new programmers and how it can be applied across various industries, from web development to data science.</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Brenna Goyette</span>
                                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href="#" className="hover:underline">Brenna Goyette</a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime="2020-03-10">Mar 10, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>4 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-primary">
                                        <a href="#" className="hover:underline">Machine Learning</a>
                                    </p>
                                    <a href="#" className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">Supervised vs. Unsupervised Learning: Key Differences and Use Cases</p>
                                        <p className="mt-3 text-base text-gray-500">Understanding the difference between supervised and unsupervised learning is crucial for any aspiring machine learning practitioner. This article compares both techniques, explaining their differences and when to use each approach.</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Daniela Metz</span>
                                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href="#" className="hover:underline">Daniela Metz</a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime="2020-02-12">Feb 12, 2020</time>
                                            <span aria-hidden="true">·</span>
                                            <span>11 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://img-c.udemycdn.com/course/240x135/1467808_f8c0.jpg" alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-primary">
                                        <a href="#" className="hover:underline">C/C++</a>
                                    </p>
                                    <a href="#" className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">Understanding Memory Management in C and C++</p>
                                        <p className="mt-3 text-base text-gray-500">Memory management is one of the most important aspects of programming in C and C++. This article explains how memory is allocated and deallocated in C/C++ and the best practices to avoid common errors such as memory leaks</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">Rachel G.</span>
                                            <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/kqMzRpQ/usman-yousaf-q2q5-Cd-Lu-Wn-I-unsplash.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href="#" className="hover:underline">Rachel G.</a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime="2020-02-12">Feb 12, 2024</time>
                                            <span aria-hidden="true">·</span>
                                            <span>15 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    );
};

export default Blog_Section;