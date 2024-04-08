import React from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '../Style/Style.css';
import DemoImages from '../Data/Demos';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Demos = () => {
  return (
    <div className="page">
      <div className="container ">
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
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          className="swiper_container"
        >
          {DemoImages.map((item, index) => (
            
            <SwiperSlide key={index}>
              <a href={item.link} target='_blank' rel='noreferrer'>
                <img src={item.project} className={`bg-[#92C7CF] swiper-image`} alt="slide_image" />
              </a>
              <p className='text-lg font-mono'>{item.desc}</p>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
          
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Demos;
