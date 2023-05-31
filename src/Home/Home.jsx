import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
// import img from '../assets/bg-body.svg';

const Home = () => {
    return (
        <div className="flex justify-center lg:justify-end bg-[#1e1546]" >
            <div className=" lg:w-2/3 text-center">
                <Header></Header>
                <AboutMe></AboutMe>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;