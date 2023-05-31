import toyImg from '../../assets/toy.png';
import zestfulImg from '../../assets/zestful.png';
import { FcApproval } from "react-icons/fc";

const Projects = () => {

    const handleToyLive = () => {
        window.location.href = 'https://toycratex.web.app';
    }
    const handleToyGitHub = () => {
        window.location.href = 'https://github.com/selim121/ToyCrateX';
    }
    const handleZestfulLive = () => {
        window.location.href = 'https://zestful-d961f.web.app';
    }
    const handleZestfulGitHub = () => {
        window.location.href = 'https://github.com/selim121/Zestful';
    }

    return (
        <div id='projects'>
            <div className="border-t-4 border-b-4 w-1/2 md:w-1/3 py-3 mx-auto mb-12">
                <span className="text-2xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Projects</span>
            </div>

            <div data-aos="fade-right" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB] hover:bg-[#1e1546] border-2 border-[#3a2888]">
                <div className="hover:text-white">
                    <img className='rounded-xl h-full' src={toyImg} alt="" />
                </div>
                <div className=" hover:text-white text-start">
                    <h1 className='text-xl'>ToyCrateX (<span className='text-sm font-light'> A Toy Marketplace </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>User-friendly interface</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Secure seller accounts</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Toy management</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Exclusive seller access</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Comprehensive toy gallery</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Enhance toy details</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Interactive category section</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Engaging FAQ section</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handleToyLive} className="text-white py-4 border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black px-8 rounded-md">Live Preview</button>
                <button onClick={handleToyGitHub} className="text-black py-4 bg-[#54FFBB] px-8 rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>

            <div data-aos="fade-left" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB] hover:bg-[#1e1546] border-2 border-[#3a2888]">
                <div className="">
                    <img className='rounded-xl w-full h-full' src={zestfulImg} alt="" />
                </div>
                <div className=" hover:text-white text-start">
                    <h1 className='text-xl'>Zestful (<span className='text-sm font-light'> Serve food by Master Chefs </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Culinary expertise</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Interactive engagement</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Visual delight</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>User-friendly interface</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Personalized experience</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Fresh and seasonal</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Social integration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={handleZestfulLive} className="text-white py-4 border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black px-8 rounded-md">Live Preview</button>
                <button onClick={handleZestfulGitHub} className="text-black py-4 bg-[#54FFBB] px-8 rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>

        </div>
    );
};

export default Projects;