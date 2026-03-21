import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination ,Autoplay } from 'swiper/modules';

import App from '../App'
import Header from '../Header'
import Footer from '../Footer'

import "../css/home.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay'

const Home = () => {
  return (
    <section>
    <div className='main_img_swiper'>
      <Swiper
      modules={[Navigation,Pagination,Autoplay]}
      slidesPerView={1}
      navigation={false}
      autoplay={{
        delay:2500,
         disableOnInteraction:false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        1024:{
          slidesPerView:1,
          spaceBetween:50,
        }
      }}
    >
      <SwiperSlide className='slideimg'><img src='./main1.png' alt='img1' /></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main2.png' alt='img2'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main3.jpg' alt='img3'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main4.jpg' alt='img4'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main5.jpg' alt='img5'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main6.jpg' alt='img6'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main7.jpg' alt='img7'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main8.png' alt='img8'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main9.png' alt='img9'/></SwiperSlide>
      <SwiperSlide className='slideimg'><img src='./main10.png' alt='img10'/></SwiperSlide>
      </Swiper>
    </div>

    <div className='youtube'>
      <div className='youtube_wrap'>
        <iframe src="https://www.youtube.com/embed/2C-yjZuwyMY?si=1Kwb2xHBdtGeQoBw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>

    <div className='instagram'>
      <h3><span>SALADY&nbsp;</span>INSTAGRAM</h3>
      <div className='insta_img'>
      <img src='./insta1.jpg'/>
      <img src='./insta2.jpg'/>
      <img src='./insta3.jpg'/>
      <img src='./insta4.jpg'/>
      <img src='./insta5.jpg'/>
      <img src='./insta6.jpg'/>
      <img src='./insta7.jpg'/>
      <img src='./insta8.jpg'/>
      <img src='./insta9.jpg'/>
      <img src='./insta10.jpg'/>
      </div>
    </div>
    </section>
  )
}

export default Home
