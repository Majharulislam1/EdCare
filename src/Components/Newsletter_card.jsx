import React from 'react';

const Newsletter_card = () => {
    return (
        <div>
            <div className="mx-auto lg:my-28 md:my-28 sm:my-24 max-w-7xl px-6   lg:px-8">
                <div
                    className="relative isolate overflow-hidden bg-primary px-6 py-10 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-4 ">

                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Courses & News!
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl text-center text-lg   text-gray-200">
                        Join our newsletter and be the first to know about new courses, upcoming webinars, special discounts, and expert tips to enhance your learning journey. Whether you're looking to advance your skills or discover new topics, our updates will keep you informed and motivated.
                    </p>

                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">

                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address"  name="email" type="email" autoComplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-primary shadow-sm    outline-none   sm:text-sm sm:leading-6" placeholder="Enter your email" />

                        <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Send</button>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default Newsletter_card;