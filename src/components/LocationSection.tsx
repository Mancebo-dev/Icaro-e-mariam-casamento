import React from 'react';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="local"
      className="flex flex-col items-center justify-center relative w-full bg-white min-h-[100dvh]"
    >
      <div className="relative w-full max-w-[430px] flex flex-col items-center h-full min-h-[100dvh] pt-24 pb-8 px-4 justify-between">
        
        {/* Background Image with Mask */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-end">
          <div 
            className="w-full h-full opacity-90"
            style={{ 
              maskImage: `url("/assets/venue-mask.svg")`,
              WebkitMaskImage: `url("/assets/venue-mask.svg")`,
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'bottom center',
              WebkitMaskPosition: 'bottom center',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat'
            }}
          >
            <img 
              alt="Venue" 
              className="absolute inset-0 w-full h-full object-cover object-bottom" 
              src="/assets/venue.png" 
            />
          </div>
          {/* Subtle gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />
        </div>

        {/* Center Content Group */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full mt-8 px-6">
          
          <div className="flex flex-col w-full max-w-[320px] relative">
            <div className="flex w-full justify-start pl-4 md:pl-0">
              <p className="font-petit-formal text-[#ff0051] text-[20px] md:text-[24px] leading-none drop-shadow-[0px_2px_4px_rgba(0,0,0,0.4)]">
                A realizar-se
              </p>
            </div>
            
            <div className="flex w-full justify-center mt-3 mb-3 z-10">
              <p className="font-petit-formal text-[85px] md:text-[96px] text-white leading-[0.9] drop-shadow-[-4px_6px_12px_rgba(0,0,0,0.4)]">
                06.03.27
              </p>
            </div>
            
            <div className="flex w-full justify-end pr-4 md:pr-0">
              <p className="font-petit-formal text-[20px] md:text-[24px] text-white leading-none drop-shadow-[0px_2px_4px_rgba(0,0,0,0.4)]">
                Sábado às 15:30h
              </p>
            </div>
          </div>

          <div className="mt-16">
            <a 
              href="#" 
              className="bg-white hover:bg-gray-50 transition-colors flex items-center justify-center rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] px-6 py-4 gap-3 active:scale-95"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img alt="Pin" className="w-full h-full object-contain" src="/assets/icon-pin.svg" />
              </div>
              <span className="font-outfit font-medium text-[#e7376f] text-base tracking-[0.15px] uppercase">
                Como chegar?
              </span>
            </a>
          </div>

        </div>
        
        {/* Bottom Text */}
        <div className="relative z-10 w-full flex justify-center pb-4 pt-12">
          <p className="font-libre-caslon text-[#ff0051] text-[20px] md:text-[24px] text-center whitespace-nowrap leading-none drop-shadow-sm">
            Local: Espaço Boa vista | Rio das Ostras
          </p>
        </div>
        
      </div>
    </section>
  );
};
