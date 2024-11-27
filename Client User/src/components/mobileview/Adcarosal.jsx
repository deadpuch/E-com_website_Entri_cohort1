import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carosal.css";

export const Adcarosal = () => {


  
  return (
    <section>
      <Swiper
        modules={[Pagination]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide >
          <div className="w-screen h-[150px] bg-slate-500 rounded-xl flex items-center justify-center">
            <img src="#" alt="Slide 1" className="object-cover w-full h-full" />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="w-screen h-[150px] bg-slate-500 rounded-xl flex items-center justify-center">
            <img src="#" alt="Slide 1" className="object-cover w-full h-full" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};
