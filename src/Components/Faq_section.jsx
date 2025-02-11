import React from 'react';

const Faq_section = () => {
    return (
        <div>
            <div className="lg:py-20 md:py-16 sm:py-10 bg-[#f2f3f5]">
                <h1 className="text-center mb-4  lg:text-4xl md:text-4xl sm:text-2xl font-bold">FAQ</h1>
                <div>
                    <p className="lg:w-2/4 md:w-2/4 sm:w-4/5 text-paragraph text-justify mx-auto">
                        Have questions? You're not alone! Our FAQ section covers the most common queries from our users to help you get the most out of your learning experience. Whether you're curious about enrolling in a course, payment methods, or how to access your certificate, you'll find answers to all your questions here.  
                    </p>
                </div>
            </div>

            <div className="lg:w-2/4 md:w-2/4 sm:w-4/5 mx-auto ">
                <div className='my-10'>
                    <div className="collapse collapse-plus bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium font-sans">How do I sign up for a course?</div>
                        <div className="collapse-content">
                            <p className='font-sans'>To sign up for a course, simply create an account by clicking on the "Sign Up" button at the top of the page. After registering, you can browse courses, select one, and click "Enroll" to begin.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium font-sans">What payment methods do you accept?</div>
                        <div className="collapse-content">
                            <p  className='font-sans'>We accept a variety of payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment options.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium font-sans">Are the courses self-paced or instructor-led?</div>
                        <div className="collapse-content">
                            <p className='font-sans'>Our courses are primarily self-paced. However, some advanced courses may include live sessions or webinars. Each course page will specify whether live sessions are included.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium font-sans">Can I get a refund if I’m not satisfied with a course?</div>
                        <div className="collapse-content">
                            <p className='font-sans'>Yes! We offer a 30-day money-back guarantee for all courses. If you’re not satisfied with the course within the first 30 days, contact us, and we’ll process your refund.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200 ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium font-sans">Will I receive a certificate after completing a course?</div>
                        <div className="collapse-content">
                            <p className='font-sans'>Yes, upon successful completion of a course, you will receive a certificate that you can download or share with potential employers.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Faq_section;