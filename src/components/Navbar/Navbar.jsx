import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail, BiWorld } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri';
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
            <div className='bg-[#54FFBB] inline-flex gap-8 px-24 py-5 z-2 fixed left-1/2 transform -translate-x-1/2 bottom-8 rounded-full shadow-lg md:top-2 md:bottom-auto md:left-2/3'>
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
                    href='#experiences'
                    onClick={() => setActive('#experiences')}
                    className={active === '#experiences' ? 'active icon-color' : ''}
                >
                    <BiBook />
                </a>
                <a
                    href='#services'
                    onClick={() => setActive('#services')}
                    className={active === '#services' ? 'active icon-color' : ''}
                >
                    <RiServiceLine />
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
                data-aos-easing="ease-in-sine" className="md:fixed md:w-1/3 xl:w-1/4">
                <div className="border card md:h-screen md:ms-3 md:bg-base-200 md:bg-opacity-10 bg-indigo-950 ">
                    <div className="flex flex-col items-center md:my-auto">
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
                    </div>

                    <div className="text-center">
                        <div className="flex gap-4 p-link justify-center">
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><AiFillGithub /></a>
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><AiFillLinkedin /></a>
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><AiFillTwitterSquare /></a>
                            <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="#"><BiWorld /></a>
                        </div>
                        <p className="text-gray-400 text-sm py-5"><p>&copy; {currentYear} Selim. All Right Reserved</p></p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;