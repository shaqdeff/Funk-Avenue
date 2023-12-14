/** @format */

import React, { useEffect, useRef } from 'react';
import close from '../images/close-outline.svg';
import menu from '../images/menu-outline.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import gsap from 'gsap';

function Header() {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);
  let resMenuItem1 = useRef(null);
  let resMenuItem2 = useRef(null);
  let resMenuItem3 = useRef(null);
  let resMenuItem4 = useRef(null);

  const menu_open = gsap.timeline({ paused: 'true', reversed: 'true' });

  useEffect(() => {
    menu_open.to(resMenu.current, {
      y: 0,
      zIndex: 100,
      duration: 0.2,
    });
    menu_open.from(
      [
        resMenuHeader.current,
        resMenuItem1.current,
        resMenuItem2.current,
        resMenuItem3.current,
        resMenuItem4.current,
      ],
      {
        duration: 0.5,
        stagger: {
          amount: 0.4,
        },
        y: -50,
      }
    );
  });

  function menuOpen() {
    menu_open.reversed() ? menu_open.play() : menu_open.reverse();
  }

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500,
      smooth: 'easeInOutQuart',
    });
    menu_open.reverse();
  };

  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]">
        <div
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
          ref={resMenuHeader}>
          <Link
            href="/"
            className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Funk <br />
            Avenue
          </Link>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]">
            <Image src={close} className="w-9 object-contain invert" alt="" />
          </div>
        </div>
        <div className="mx-2 my-10 space-y-1">
          <span className="overflow-hidden block">
            <ScrollLink
              onClick={() => scrollToSection('#sectionId')}
              to="work-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              // ref={resMenuItem1}
              className="font-neutralFace font-bold text-[30px]">
              WORK
            </ScrollLink>
          </span>
          <span className="overflow-hidden block">
            <ScrollLink
              onClick={() => scrollToSection('#sectionId')}
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              // ref={resMenuItem2}
              className="font-neutralFace font-bold text-[30px]">
              ABOUT
            </ScrollLink>
          </span>
          <span className="overflow-hidden block">
            <ScrollLink
              onClick={() => scrollToSection('#sectionId')}
              to="publications-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              // ref={resMenuItem3}
              className="font-neutralFace font-bold text-[30px]">
              PUBLICATIONS
            </ScrollLink>
          </span>
          <span className="overflow-hidden block">
            <ScrollLink
              onClick={() => scrollToSection('#sectionId')}
              to="studio-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              // ref={resMenuItem4}
              className="font-neutralFace font-bold text-[30px]">
              STUDIO
            </ScrollLink>
          </span>
        </div>
      </div>
      <div className="absolute bg-black top-0 py-[5px] font-neutralFace h-[20vh] flex justify-between w-[100%] flex-col">
        <div
          id="header"
          className="flex items-start justify-between w-[100%] h-fit">
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Funk <br /> Avenue
          </div>
          <ScrollLink
            to="work-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            WORK
          </ScrollLink>
          <ScrollLink
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="publications-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            PUBLICATIONS
          </ScrollLink>
          <ScrollLink
            to="studio-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            STUDIO
          </ScrollLink>
          <div
            onClick={menuOpen}
            className="block md:hidden cursor-pointer mx-[5px]">
            <Image alt="" src={menu} className="w-9 object-contain invert" />
          </div>
        </div>
        <div className="flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit">
          <div>
            An independent <br /> music partnership
          </div>
          <div>Nairobi</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
