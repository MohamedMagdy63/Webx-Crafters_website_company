import './Style/Style.css'
import React from 'react';
import DemoImages from '../Data/Demos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import arrow from '../Images/Icons/arrow.png'
import forward from'../Images/Icons/forward.png'

const Demos = () => {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {DemoImages.map((item,index)=>(
          <SwiperSlide >
            <img src={item.project} className={`${item.color}`} alt="slide_image" />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <img src={arrow} alt="" />
          </div>
          <div className="swiper-button-next slider-arrow">
          <img src={forward} alt="" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Demos;
