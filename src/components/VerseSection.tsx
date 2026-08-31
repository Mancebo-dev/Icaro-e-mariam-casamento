import React from 'react';

export const VerseSection: React.FC = () => {
  return (
    <section 
      id="versiculo"
      className="flex flex-col items-center justify-center relative w-full bg-white flex-1 py-8"
    >
      <div className="flex flex-col gap-[30px] items-center relative w-full max-w-[430px] px-6">
        <div className="h-[96px] relative w-[120px]">
          <img 
            alt="Monograma" 
            className="absolute block inset-0 w-full h-full object-contain" 
            src="/assets/monogram.svg" 
          />
        </div>
        <div className="flex flex-col justify-center leading-[0] w-full text-[#f70] text-center whitespace-pre-wrap">
          <p className="font-libre-caslon leading-[1.15] mb-0 text-[24px]">
            Para que todos vejam, e saibam,
          </p>
          <p className="font-libre-caslon leading-[1.15] mb-0 text-[24px]">
            {` e considerem, e juntamente entendam que a mão do senhor fez isto.`}
          </p>
          <p className="leading-[0.89] mb-0 text-[24px]"> </p>
          <p className="font-libre-caslon leading-[0.89] text-[24px]">
            Isaías 41:20
          </p>
        </div>
      </div>
    </section>
  );
};
