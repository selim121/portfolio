import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import img from '../assets/bg-body.svg';

const Home = () => {
    return (
        <div className="flex justify-end md:me-5" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}}>
            <div className="xl:w-3/4 md:w-2/3 text-center px-5">
                <Header></Header>
                <AboutMe></AboutMe>
            </div>
        </div>
    );
};

export default Home;