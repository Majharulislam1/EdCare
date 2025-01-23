import hero from '../assets/hero.svg';

const Hero = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="lg:text-5xl md:text-5xl font-bold leading-none sm:text-[2.1rem]">Start learning from the world
                        <span className="text-primary"> best Institutions</span>
                    </h1>
                    <p className="mt-6 mb-8 lg:text-lg md:text-lg sm:text-[16px] sm:mb-12"> Embark on a transformative journey by accessing courses and programs from top institutions globally. Whether you&apos;re advancing your career, gaining expertise, or pursuing a passion,  .
                         
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded-full bg-primary text-gray-50">Get Started</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded-full border-gray-800">watch the  video</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Hero;