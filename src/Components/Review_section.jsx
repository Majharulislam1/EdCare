import React from 'react';
import Review_card from './Review_card';
import Marquee from "react-fast-marquee";

const Review_section = () => {
    return (
        <div>
            <div className="lg:py-20 md:py-16 sm:py-10 bg-[#f2f3f5]">
                <h1 className="text-center mb-4  lg:text-4xl md:text-4xl sm:text-2xl font-bold">What Our Students Are Saying ?</h1>
                <div>
                    <p className="lg:w-2/4 md:w-2/4 sm:w-4/5 text-paragraph text-justify mx-auto">
                        Our students’ success is our greatest achievement. Read the reviews and testimonials from learners who have benefited from our courses. Their experiences can give you insight into how our platform and courses have helped them advance their skills and achieve their goals.
                    </p>
                </div>
            </div>

            <div className='w-4/5 mx-auto sm:my-10 lg:my-20 md:my-20'>
                <Marquee>
                    <Review_card></Review_card>
                </Marquee>
            </div>
        </div>
    );
};

export default Review_section;