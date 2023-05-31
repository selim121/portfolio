import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
// import img from '../assets/bg-body.svg';

const Home = () => {
    return (
        <div className="flex justify-end md:me-5 bg-[#1e1546]" >
            <div className="xl:w-3/4 md:w-2/3 text-center px-5">
                <Header></Header>
                <AboutMe></AboutMe>
                <Projects></Projects>
            </div>
        </div>
    );
};

export default Home;