import ProgressBar from 'react-animated-progress-bar';

const AboutMe = () => {

    return (
        <div id="about" className="py-24">
            <div className="text-center">
                <div className="border-t-4 border-b-4 w-1/3 py-3 mx-auto mb-5">
                    <span className="text-2xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">About me</span>
                </div>
                <p className="text-base-200 opacity-80">Here you will find information about me, what i do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="text-white text-start mt-5">
                <h3 className="text-xl font-bold mb-2">Explore My Profile!</h3>
                <p className="opacity-80 text-justify leading-relaxed">
                    As a Frontend Web Developer, I specialize in crafting engaging user interfaces and front-end components for Websites and Web Applications, driving their overall success. Take a look at my portfolio in the Projects section to see some of my work. <br /> <br />
                    I am actively seeking Job opportunities where I can contribute, learn, and grow. If you have a suitable opportunity that aligns with my skills and experience, please don&apos;t hesitate to reach out to me. Let&apos;s explore how we can work together to achieve great results. <br /> <br />
                    Additionally, I have a solid understanding of the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. I am continually expanding my knowledge in this area and excited to apply my skills as a MERN stack developer.
                </p>
            </div>

            <h3 className="text-xl text-white text-start font-bold mb-2 mt-12">Explore My Skills!</h3>

            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>HTML5</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="90"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>CSS3</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>JavaScript</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>ReactJS</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="75"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Bootstrap</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="90"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Tailwind CSS</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="90"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Firebase</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="70"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>REST API</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="60"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Git & GitHub</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="65"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>NodeJS</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>Express.js</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <p className='text-white opacity-90'>MongoDB</p>
                        <ProgressBar
                            width="150px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#54FFBB"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;