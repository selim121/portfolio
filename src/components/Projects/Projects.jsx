import { FcApproval } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import './projects.css';
import pm1 from '../../assets/martial/1.png';
import pm2 from '../../assets/martial/2.png';
import pm3 from '../../assets/martial/3.png';
import pm4 from '../../assets/martial/4.png';
import pm5 from '../../assets/martial/5.png';
import pm6 from '../../assets/martial/6.png';
import pm7 from '../../assets/martial/7.png';
import pm8 from '../../assets/martial/8.png';
import pm9 from '../../assets/martial/9.png';
import pm10 from '../../assets/martial/10.png';
import pm11 from '../../assets/martial/11.png';
import pm12 from '../../assets/martial/12.png';
import pm13 from '../../assets/martial/13.png';
import pm14 from '../../assets/martial/14.png';
import toy1 from '../../assets/toy/1.png';
import toy2 from '../../assets/toy/2.png';
import toy3 from '../../assets/toy/3.png';
import toy4 from '../../assets/toy/4.png';
import toy5 from '../../assets/toy/5.png';
import toy6 from '../../assets/toy/6.png';
import toy7 from '../../assets/toy/7.png';
import toy8 from '../../assets/toy/8.png';
import toy9 from '../../assets/toy/9.png';
import toy10 from '../../assets/toy/10.png';
import toy11 from '../../assets/toy/11.png';
import toy12 from '../../assets/toy/12.png';
import toy13 from '../../assets/toy/13.png';
import zestful1 from '../../assets/zestful/1.png';
import zestful2 from '../../assets/zestful/2.png';
import zestful3 from '../../assets/zestful/3.png';
import zestful4 from '../../assets/zestful/4.png';
import zestful5 from '../../assets/zestful/5.png';
import zestful6 from '../../assets/zestful/6.png';
import zestful7 from '../../assets/zestful/7.png';
import zestful8 from '../../assets/zestful/8.png';
import zestful9 from '../../assets/zestful/9.png';
import zestful10 from '../../assets/zestful/10.png';

const Projects = () => {

    const openNewWindow = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div id='projects'>
            <div className="border-t-4 border-b-4 w-1/2 md:w-1/3 py-3 mx-auto mb-12">
                <span className="text-2xl uppercase bg-gradient-to-r from-[#FFFFFF] via-[#54FFBB] to-[#FFFFFF] text-transparent bg-clip-text">Projects</span>
            </div>

            {/* precision martial website */}
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB] border-2 border-[#3a2888]">
                <div className="">
                    <Swiper
                        spaceBetween={30}
                        effect='fade'
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectFade, Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm10} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm11} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm12} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm13} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={pm14} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text-start">
                    <h1 className='text-xl'>Precision Martial (<span className='text-sm font-light'> A Martial School </span>)</h1>
                    <div className="mt-2">
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Responsive Design</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Student Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Payment Integration</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Instructor Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Admin Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Exclusive User Management</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FcApproval></FcApproval>
                            <p className='font-light'>Social integration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-5 mt-8 mb-24">
                <button onClick={() => openNewWindow('https://precision-martial.web.app/')} className="text-white py-4 border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black px-8 rounded-md">Live Preview</button>
                <button onClick={() => openNewWindow('https://github.com/selim121/precision-martial-client')} className="text-black py-4 bg-[#54FFBB] px-8 rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>

            {/* toy-crate-x website */}
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB] border-2 border-[#3a2888]">
                <div className="">
                <Swiper
                        spaceBetween={30}
                        effect='fade'
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectFade, Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy10} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy11} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy12} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={toy13} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text-start">
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
                <button onClick={() => openNewWindow('https://toycratex.web.app')} className="text-white py-4 border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black px-8 rounded-md">Live Preview</button>
                <button onClick={() => openNewWindow('https://github.com/selim121/toy-crate-x-client')} className="text-black py-4 bg-[#54FFBB] px-8 rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>

            {/* zestful website */}
            <div data-aos="fade-up" data-aos-duration="2000" className=" space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 rounded-xl bg-[#54FFBB] border-2 border-[#3a2888]">
                <div className="">
                <Swiper
                        spaceBetween={30}
                        effect='fade'
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectFade, Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='rounded-xl w-full h-full' src={zestful10} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text-start">
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
                <button onClick={() => openNewWindow('https://zestful-d961f.web.app')} className="text-white py-4 border border-[#54FFBB] hover:bg-[#54FFBB] hover:text-black px-8 rounded-md">Live Preview</button>
                <button onClick={() => openNewWindow('https://github.com/selim121/zestful-client')} className="text-black py-4 bg-[#54FFBB] px-8 rounded-md hover:bg-inherit hover:text-white border border-[#54FFBB]">GitHub</button>
            </div>
        </div>
    );
};

export default Projects;