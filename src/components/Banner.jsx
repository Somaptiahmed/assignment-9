import React from 'react';
import banner from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className="w-full">
            <Swiper
                slidesPerView={1} // Show one slide at a time
                spaceBetween={0}  // No space between slides
                loop={true} // Enable continuous looping
                pagination={{ clickable: true }} // Enable dots for navigation
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-slide every 2 seconds
                modules={[Autoplay, Pagination]} // Use the required Swiper modules
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="flex flex-col justify-center items-center h-[600px] w-full bg-cover bg-center text-white text-5xl font-bold"
                        style={{ backgroundImage: `url(${banner})` }}
                    >
                        <h2>Adventure Awaits</h2>
                        <p className="text-xl mt-2">Travel Sustainably</p>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="flex flex-col justify-center items-center h-[600px] w-full bg-cover bg-center text-white text-5xl font-bold"
                        style={{ backgroundImage: `url(${banner2})` }}
                    >
                        <h2>Eco-Friendly Journeys</h2>
                        <p className="text-xl mt-2">Leave No Trace</p>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="flex flex-col justify-center items-center h-[600px] w-full bg-cover bg-center text-white text-5xl font-bold"
                        style={{ backgroundImage: `url(${banner3})` }}
                    >
                        <h2>Millions of Experiences</h2>
                        <p className="text-xl mt-2">Explore Without Impact</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
