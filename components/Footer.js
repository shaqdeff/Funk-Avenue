/** @format */

import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Footer() {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500,
      smooth: 'easeInOutQuart',
    });
    menu_open.reverse();
  };

  return (
    <div className="relative font-neutralFace px-3">
      <div className="hidden lg:block mb-[10vh]">
        <div className="mx-1 font-monument font-semibold py-10 text-[13.2vmax] my-1 leading-none">
          FUNK <br /> AVENUE
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>FOLLOW US</div>
        <Link
          className="text-4xl underline"
          href="https://www.instagram.com/funkavenue254/"
          target="_blank"
          rel="noopener noreferrer">
          INSTAGRAM
        </Link>
        <Link
          className="text-4xl underline"
          href="https://www.youtube.com/channel/UC6uWXyNEMMf-OFORYDg74FQ"
          target="_blank"
          rel="noopener noreferrer">
          YOUTUBE
        </Link>
        <Link
          className="text-4xl underline"
          href="https://open.spotify.com/artist/2WDBJu7OFfEFPtGGXaE0aq?si=IarVCrCSSyG4-vrr32pdlg"
          target="_blank"
          rel="noopener noreferrer">
          SPOTIFY
        </Link>
        <Link
          className="text-4xl underline"
          href="https://music.apple.com/ke/artist/funk-avenue/1511346325"
          target="_blank"
          rel="noopener noreferrer">
          APPLE MUSIC
        </Link>
      </div>
      <div className="flex pt-5 flex-col lg:flex-row items-end lg:items-center justify-between">
        <ScrollLink
          className="cursor-pointer"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          TOP
        </ScrollLink>
        <ScrollLink
          to="work-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer mx-1 font-neutralFace font-bold text-[30px]">
          WORK
        </ScrollLink>
        <ScrollLink
          to="about-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer mx-1 font-neutralFace font-bold text-[30px]">
          ABOUT
        </ScrollLink>
        <ScrollLink
          to="publications-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer mx-1 font-neutralFace font-bold text-[30px]">
          PUBLICATIONS
        </ScrollLink>
        <ScrollLink
          to="studio-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer mx-1 font-neutralFace font-bold text-[30px]">
          STUDIO
        </ScrollLink>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-col lg:flex-row lg:mt-20 mb-2 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">COPYRIGHT 2023 - FA</div>
        <div>SHOWS</div>
        <div>
          An independent <br /> music partnership
        </div>
        <div>MERCHANDISE</div>
        <div className="flex space-x-3 mt-5">
          <Link
            href="https://www.instagram.com/funkavenue254/"
            target="_blank"
            rel="noopener noreferrer">
            INSTAGRAM
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC6uWXyNEMMf-OFORYDg74FQ"
            target="_blank"
            rel="noopener noreferrer">
            YOUTUBE
          </Link>
          <Link
            href="https://open.spotify.com/artist/2WDBJu7OFfEFPtGGXaE0aq?si=IarVCrCSSyG4-vrr32pdlg"
            target="_blank"
            rel="noopener noreferrer">
            SPOTIFY
          </Link>
          <Link
            href="https://music.apple.com/ke/artist/funk-avenue/1511346325"
            target="_blank"
            rel="noopener noreferrer">
            APPLE MUSIC
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
