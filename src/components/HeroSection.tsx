import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative w-full h-[932px] max-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/hero.jpg"
          alt="Ícaro e Mariam"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="absolute top-[57px] left-1/2 -translate-x-1/2 w-[267px] h-[176px]">
        <div className="absolute left-[133.5px] top-[88px] -translate-x-1/2 -translate-y-1/2 flex flex-col font-great-vibes justify-center leading-[0] text-[80px] text-center text-white whitespace-nowrap">
          <p className="leading-[1.1] mb-0 whitespace-pre">{`Ícaro       `}</p>
          <p className="leading-[1.1] whitespace-pre">{` Mariam `}</p>
        </div>
        
        <div className="absolute left-[218.5px] top-[75px] -translate-x-1/2 -translate-y-1/2 flex flex-col font-great-vibes justify-center leading-[0] text-[96px] text-center text-white whitespace-nowrap">
          <p className="leading-none">{`&`}</p>
        </div>
      </div>

      <div className="absolute top-[848.5px] left-1/2 -translate-x-1/2 flex flex-col font-libre-caslon h-[123px] justify-center leading-[0] text-[24px] text-center text-white w-full max-w-[430px]">
        <p className="leading-[1.15]">06 de Março de 2027</p>
      </div>
    </section>
  );
};
