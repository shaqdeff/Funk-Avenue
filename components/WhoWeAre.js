import React from 'react';

function WhoWeAre() {
  return (
    <div
      id="about-section"
      className="relative my-10 px-3 py-2 h-[80vh] font-neutralFace">
      <div className="w-full h-[1px] bg-white"></div>
      <div className="flex justify-between w-full text-xs py-2">
        <div>Who We Are</div>
        <div>Who We Are</div>
        <div>Who We Are</div>
      </div>
      <div className="my-28">
        <div className="text-sm md:text-xl">(FUNK AVENUE)</div>
        <div className="text-3xl uppercase md:text-5xl font-bold leading-snug indent-[30vw] my-2">
          Funk Avenue is a kenyan born & bred musical duo based in Nairobi ,
          Kenya. Their critically acclaimed projects are genre bending which
          sets the kenyan music scene to new heights. Not Afraid to Evolve and
          create. Enjoy their new EP ahora festejamos out now!
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
