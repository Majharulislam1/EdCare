import Faq_section from "./Faq_section";
import Hero from "./Hero";
import Newsletter_card from "./Newsletter_card";
import Study_session_home from "./Study_session_home";
import Tutor_home_section from "./Tutor_home_section";

 

const Home = () => {
    return (
        <div>
             <Hero></Hero>
             <Study_session_home></Study_session_home>
             <Tutor_home_section></Tutor_home_section>
             <Newsletter_card></Newsletter_card>
             <Faq_section></Faq_section>
        </div>
    );
};

export default Home;