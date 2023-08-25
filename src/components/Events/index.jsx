import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "./Events.module.scss";
import firstImg from "../../assets/img/compressed/events.png";
import Left from "../../assets/img/icons/Left.svg";
import Right from "../../assets/img/icons/Right.svg";
import "swiper/css";
import { Controller } from "swiper";
import React, { useState } from "react";

const Item = () => {
  return (
    <div className={swiper.event}>
      <img src={firstImg} alt="img" />
      <h3>9th Lutsk Ethereum Meetup</h3>
      <a href="/">Thursday, April 27 · 7:00pm</a>
      <p>Voli, 50</p>
      <p>Free</p>
      <p>Prostir</p>
      <p>24K Followers</p>
    </div>
  );
};

export const Events = () => {
  return (
    <div className={swiper.main}>
      <div className={swiper.container}>
        <div className={swiper.events__wrapper}>
          <div className={swiper.events__details}>
            <h2 className={swiper.events__h2}>Popular Events</h2>
            <div className={swiper.events__items}>
              <button className={swiper.events__buttons}>
                <img src={Left} alt="img" />
              </button>
              <button className={swiper.events__buttons}>
                <img src={Right} alt="img" />
              </button>
            </div>
          </div>

          <Swiper
            spaceBetween={78}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
