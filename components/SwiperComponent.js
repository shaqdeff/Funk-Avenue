/** @format */

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import imageSlider1 from '../images/pressure.webp';
import imageSlider2 from '../images/frenzy.webp';
import imageSlider3 from '../images/whitewash.webp';
import imageSlider4 from '../images/mnyonge.webp';
import imageSlider5 from '../images/ngori.webp';
import imageSlider6 from '../images/takeitlow.webp';
import Image from 'next/image';
import Link from 'next/link';

function SwiperSliderComponent() {
  const [slides, setSlides] = useState(0);
  useEffect(() => {
    let w = window.innerWidth;
    w < 768 ? setSlides(1.2) : setSlides(1.5);
  }, []);
  return (
    <div id="work-section" className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        grabCursor={true}
        className="w-full font-neutralFace h-[50vh] md:h-[78vh] relative mt-[30vh] md:mt-[22vh]">
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider1}
              className="w-full md:w-3/5 h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>MULTIPLE PROJECTS</p>
              <p>(01)</p>
            </div>
            <Link
              className="text-5xl font-bold md:text-5xl lg:text-7xl 2xl:text-[12rem] leading-none"
              href="https://youtu.be/S9v2db2IG1o"
              target="_blank">
              PRESSURE
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider2}
              className="w-full md:w-3/5 h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">FRENZY</span>
                <br /> 3:13
              </p>
              <p>(02)</p>
            </div>
            <Link
              className="text-5xl font-bold md:text-5xl lg:text-7xl 2xl:text-[12rem] leading-none"
              href="https://youtu.be/hyq7AEN3tf4"
              target="_blank">
              FRENZY
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider3}
              className="w-full md:w-3/5 h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">WHITE WASH</span>
                <br /> 4:05
              </p>
              <p>(03)</p>
            </div>
            <Link
              className="text-5xl font-bold md:text-5xl lg:text-7xl 2xl:text-[12rem] leading-none"
              href="https://youtu.be/6TwUcBUM1Ys"
              target="_blank">
              WHITE WASH
            </Link>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider4}
              className="w-full md:w-[60%] h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">MNYONGE</span>
                <br /> 2:50
              </p>
              <p>(04)</p>
            </div>
            <Link
              className="text-5xl font-bold md:text-5xl lg:text-7xl 2xl:text-[12rem] leading-none"
              href="https://youtu.be/XtlPafC4jFc?list=RDEMsQHjkwTXXN0eRaDag10_Ag"
              target="_blank">
              MNYONGE
            </Link>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider5}
              className="w-full md:w-3/5 h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">NGORI</span>
                <br /> 3:30
              </p>
              <p>(05)</p>
            </div>
            <Link
              className="text-5xl font-bold md:text-5xl lg:text-7xl 2xl:text-[12rem] leading-none"
              href="https://youtu.be/cZUZcUAtc1k?list=RDEMsQHjkwTXXN0eRaDag10_Ag"
              target="_blank">
              NGORI
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider6}
              className="w-full md:w-3/5 h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">LOW</span>
                <br /> 4:00
              </p>
              <p>(06)</p>
            </div>
            <Link
              className="text-5xl font-bold md:text-5xl lg:text-7xl 2xl:text-[12rem] leading-none"
              href="https://youtu.be/Gaxs1kRRETY"
              target="_blank">
              LOW
            </Link>
            <div></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSliderComponent;
