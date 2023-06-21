import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

const Contact = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();
    return (
        <div id="contact">
            <div className="border-t-4 border-b-4 md:w-1/3 w-1/2 py-3 mx-auto mb-5">
                <span className="text-2xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Contact</span>
            </div>
            <p className="text-base-200 opacity-80">Feel free to contact me by submitting the form below and I will get back to you as soon as possible</p>
            <div data-aos="fade-up"
                data-aos-duration="2000" className="my-12 flex justify-center">
                <form className="border p-12 lg:w-2/3 bg-[#c1e6d7] shadow-2xl" action="https://formsubmit.co/selimhossain.sh1@gmail.com" method="POST">
                    <p className="text-start text-xl mb-2">Name</p>
                    <input className="bg-base-200 w-full px-5 py-3 rounded-md input input-bordered input-success" type="text" placeholder="Enter Your Name" name="name" id="" />
                    <p className="text-start text-xl mb-2 mt-8">Email</p>
                    <input className="bg-base-200 w-full px-5 py-3 rounded-md input input-bordered input-success" type="email" placeholder="Enter Your Email" name="email" id="" />
                    <p className="text-start text-xl mb-2 mt-8">Message</p>
                    <textarea className="textarea textarea-success w-full" placeholder="Enter Your Message" name="message"></textarea>
                    <div className="mt-12 flex lg:justify-end justify-center">
                        <button className="uppercase px-12 py-3 hover:bg-[#84FFBB] bg-[#54FFBB] rounded-lg">Submit</button>
                    </div>
                </form>
            </div>
            <div className="mb-24">
                <div className="flex gap-4 p-link justify-center">
                    <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="https://github.com/selim121" target='blank'><AiFillGithub /></a>
                    <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="https://www.linkedin.com/in/selimhossain-sh1/#" target='blank'><AiFillLinkedin /></a>
                    <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="https://twitter.com/selim_hossain1" target='blank'><AiFillTwitterSquare /></a>
                    <a className='border hover:border-[#54FFBB] p-3 rounded-full' href="https://selim802.blogspot.com/" target='blank'><BiWorld /></a>
                </div>
                <div>
                    <p className="text-gray-400 text-sm pt-5 d-none lg:block"><span>&copy; {currentYear} Selim. All Right Reserved</span></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;