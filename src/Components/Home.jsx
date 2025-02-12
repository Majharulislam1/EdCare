import Blog_Section from "./Blog_Section";
import Faq_section from "./Faq_section";
import Hero from "./Hero";
import Newsletter_card from "./Newsletter_card";
import Review_section from "./Review_section";
import Study_session_home from "./Study_session_home";
import Tutor_home_section from "./Tutor_home_section";

 

const Home = () => {
    return (
        <div>
             <Hero></Hero>
             <Study_session_home></Study_session_home>
             <Tutor_home_section></Tutor_home_section>
             <Review_section></Review_section>
             <Blog_Section></Blog_Section>
             <Faq_section></Faq_section>
             <Newsletter_card></Newsletter_card>
        </div>
    );
};

export default Home;

