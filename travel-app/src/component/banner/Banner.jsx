import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import b1 from "../../assets/image/b-1.png";
import b2 from "../../assets/image/b-2.png";
import b3 from "../../assets/image/b-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation,Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${b1})`,
            }}
            className="h-52 sm:h-80 lg:h-80 lg:w-screen 2xl:h-90 bg-cover bg-center  w-full flex flex-col justify-center items-center text-white "
          >
            <h1 className=" text-2xl sm:text-6xl m-2">Lorem ipsum dolor sit.</h1>
            <p className="text-xs sm:text-xl">Lorem, ipsum dolor sit amet </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${b2})`,
            }}
            className="h-52 sm:h-80 lg:h-80 lg:w-screen bg-cover bg-center  w-full flex flex-col justify-center items-center text-white "
          >
            <h1 className=" text-2xl m-2">Lorem ipsum dolor sit.</h1>
            <p className="text-xs">Lorem, ipsum dolor sit amet </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${b3})`,
            }}
            className="h-52 sm:h-80 lg:h-80 lg:w-screen bg-cover bg-center  w-full flex flex-col justify-center items-center text-white "
          >
            <h1 className=" text-2xl m-2">Lorem ipsum dolor sit.</h1>
            <p className="text-xs">Lorem, ipsum dolor sit amet </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
