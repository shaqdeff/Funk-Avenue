/** @format */

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import publish from '../images/ahora.jpg';

function Publications() {
  return (
    <div id="publications-section" className="relative font-neutralFace">
      <div className="px-3">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex text-base md:text-4xl my-3 font-bold justify-between mb-36 w-full">
          <Link
            href="https://songwhip.com/funkavenue/ahora-festejamos"
            target="_blank">
            AHORA FESTEJAMOS
          </Link>
          <Link
            href="https://songwhip.com/funkavenue/now-we-break-bread"
            target="_blank">
            NOW WE BREAK BREAD
          </Link>
          <Link href="https://songwhip.com/funkavenue" target="_blank">
            ALL WORK
          </Link>
        </div>
      </div>
      <div className="bg-[#e7e7e7] pb-[20vh]">
        <div className="h-[100vh] w-full flex flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center flex-col px-3 text-black w-full md:w-[50%]">
            <div className="h-[90%] flex items-center justify-center flex-col">
              <div className="text-lg"> (PB.001 - 21)</div>
              <h1 className="text-4xl my-6 font-bold">
                UNCOMPROMISED CREATIVITY
              </h1>
              <Link
                href="https://open.spotify.com/album/4MBZ0nQ5t3zYcTYf1CiuMu?si=3qCeD8DYTlOFznaAftYNhQ"
                target="_blank"
                className="underline">
                EXPLORE PUBLICATION
              </Link>
            </div>
            <div className="h-[10%] flex w-full justify-center items-center flex-col">
              <div className="w-full h-[2px] bg-black"></div>
              <div className="text-4xl my-3 font-bold ">OUR PUBLICATIONS</div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center bg-[#e7e7e7] md:bg-black h-full">
            <Image alt="" src={publish} className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
