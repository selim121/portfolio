import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiOutlineHome, AiOutlineProject, AiOutlineUser } from 'react-icons/ai'
import { BiMessageSquareDetail, BiWorld } from 'react-icons/bi'
import './Navbar.css';
import Typed from 'react-typed';
import avatar from '../../../src/assets/avatar.jpeg';

const Navbar = () => {

    const [active, setActive] = useState('#');
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <nav>
            <div className='bg-[#54FFBB] inline-flex gap-8 px-24 py-5 z-2 fixed left-1/2 transform -translate-x-1/2 bottom-8 rounded-full shadow-lg lg:top-2 lg:bottom-auto lg:left-2/3'>
                <a
                    className={active === '#' ? 'active icon-color' : ''}
                    href='#'
                    onClick={() => setActive('#')}
                >
                    <AiOutlineHome />
                </a>
                <a
                    href='#about'
                    onClick={() => setActive('#about')}
                    className={active === '#about' ? 'active icon-color' : ''}
                >
                    <AiOutlineUser />
                </a>
                <a
                    href='#projects'
                    onClick={() => setActive('#projects')}
                    className={active === '#projects' ? 'active icon-color' : ''}
                >
                    <AiOutlineProject />
                </a>
                <a
                    href='#contact'
                    onClick={() => setActive('#contact')}
                    className={active === '#contact' ? 'active icon-color' : ''}
                >
                    <BiMessageSquareDetail />
                </a>
            </div>

            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="lg:fixed lg:w-[350px] ">
                <div className="border card lg:h-screen lg:ms-3">
                    <div className="flex flex-col items-center lg:my-auto">
                        <div>
                            <div className="text-white mt-5">
                                <Typed
                                    className='text-3xl bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text'
                                    typeSpeed={70}
                                    backSpeed={40}
                                    loop
                                    strings={[
                                        'Frontend Developer ',
                                        'MERN Stack Developer '
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <img className='h-full rounded-3xl' src={avatar} alt="" />
                        </div>
                        <h2 className='text-xl text-white'>Dhaka, Bangladesh</h2>
                        <h3 className='text-white'>selimhossain.sh1@gmail.com</h3>

                        <button className='hire-btn my-5 py-3 rounded-3xl uppercase hover:text-[#54FFBB] hover:bg-inherit border border-[#54FFBB]'>Hire me!</button>

                        <div className="border-t-4 border-b-4 md:w-1/3 w-1/2 py-1 mx-auto mt-2 text-center">
                            <span className="text-xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Academic</span>
                        </div>
                        <p className="text-white mt-4">B.Sc. in Computer Science & Engineering</p>
                        <p className="text-white font-light text-sm">City University of Bangladesh</p>
                        <p className="text-white font-light text-sm">( 2018 - 2022 )</p>

                        <div className="border-t-4 border-b-4 md:w-1/3 w-1/2 py-1 mx-auto text-center mt-4">
                            <span className="text-xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Training</span>
                        </div>
                        <p className="text-white mt-4">Complete Web Development Course</p>
                        <p className="text-white font-light text-sm pb-3">Programming Hero</p>
                    </div>
                    <div className="text-center">
                        <div className="flex gap-4 p-link justify-center">
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><AiFillGithub /></a>
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><AiFillLinkedin /></a>
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><AiFillTwitterSquare /></a>
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><BiWorld /></a>
                        </div>
                        <p className="text-gray-400 text-sm py-5 d-none lg:block"><p>&copy; {currentYear} Selim. All Right Reserved</p></p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;