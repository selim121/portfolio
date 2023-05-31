import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import './Home.css';

const Home = () => {
    return (
        <div className="flex justify-center lg:justify-end bg-color" >
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