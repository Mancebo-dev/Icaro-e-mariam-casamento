import React, { useEffect, useRef } from 'react';
import { X, Flower2 } from 'lucide-react';
import { animate, stagger } from 'animejs';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      try {
        // Timeline line drawing animation
        animate('.timeline-line', {
          height: ['0%', '100%'],
          ease: 'inOutQuad',
          duration: 1500,
          delay: 300
        });

        // Nodes (Flowers) blooming animation
        animate('.timeline-node', {
          scale: [0, 1],
          rotate: [-90, 0],
          opacity: [0, 1],
          ease: 'outElastic(1, .5)',
          duration: 1200,
          delay: stagger(300, { start: 500 })
        });

        // Timeline items fading in
        const leftItems = document.querySelectorAll('.timeline-content.from-left');
        if (leftItems.length > 0) {
          animate(leftItems, {
            opacity: [0, 1],
            translateX: [-30, 0],
            ease: 'outCubic',
            duration: 800,
            delay: stagger(300, { start: 600 })
          });
        }

        const rightItems = document.querySelectorAll('.timeline-content.from-right');
        if (rightItems.length > 0) {
          animate(rightItems, {
            opacity: [0, 1],
            translateX: [30, 0],
            ease: 'outCubic',
            duration: 800,
            delay: stagger(300, { start: 600 })
          });
        }

        // Decorative branch drawing
        animate('.floral-path', {
          strokeDashoffset: [200, 0],
          ease: 'inOutSine',
          duration: 2000,
          delay: 200
        });
      } catch (err) {
        console.warn('Animation error', err);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity">
      <div
        ref={containerRef}
        className="bg-[#fcfaf8] w-full max-w-[430px] h-[100dvh] overflow-hidden relative flex flex-col items-center shadow-2xl animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Subtle floral background image overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1457089328109-e5d9f4f15f0b?auto=format&fit=crop&q=80")' }}
        />

        {/* Decorative SVG Branch Top Left */}
        <svg className="absolute top-0 left-0 w-48 h-48 text-[#e7376f]/20 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path className="floral-path" d="M0 0 Q 30 20 20 60 Q 40 40 60 40 Q 80 50 90 90 M 20 60 Q 10 40 30 30 M 60 40 Q 70 20 50 10" />
        </svg>

        {/* Decorative SVG Branch Bottom Right */}
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-[#e7376f]/20 pointer-events-none transform rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path className="floral-path" d="M0 0 Q 30 20 20 60 Q 40 40 60 40 Q 80 50 90 90 M 20 60 Q 10 40 30 30 M 60 40 Q 70 20 50 10" />
        </svg>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-black/5 hover:bg-black/10 rounded-full text-gray-600 transition-colors z-20 backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center px-6 py-12 relative w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col items-center mb-8">
            <p className="font-outfit text-[#e7376f] uppercase tracking-[0.2em] text-xs mb-2 opacity-80">Nosso Dia</p>
            <h2 className="font-petit-formal text-6xl text-gray-800 leading-none">Cronograma</h2>
          </div>

          <div className="relative w-full flex-1 flex justify-center py-4 my-4">

            {/* Center Line container */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2">
              {/* Animated fill line */}
              <div className="timeline-line w-full bg-gradient-to-b from-[#e7376f]/40 via-[#e7376f] to-[#e7376f]/40" style={{ height: '0%' }} />
            </div>

            <div className="flex flex-col justify-between w-full max-w-[340px] relative z-10">

              {/* Item 1 */}
              <div className="flex items-center w-full justify-between h-28">
                <div className="timeline-content from-left w-[38%] flex justify-end opacity-0">
                  <div className="text-right pr-2">
                    <p className="font-petit-formal text-2xl text-[#e7376f]">15:30</p>
                    <p className="font-libre-caslon text-gray-500 text-sm italic">Não se atrase</p>
                  </div>
                </div>
                <div className="timeline-node w-10 h-10 rounded-full bg-white border border-[#e7376f]/30 flex items-center justify-center shadow-lg absolute left-1/2 -translate-x-1/2 text-[#e7376f] opacity-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div className="timeline-content from-right w-[38%] flex justify-start opacity-0">
                  <p className="font-libre-caslon text-xl text-gray-800 pl-2">Chegada dos Convidados</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center w-full justify-between h-28">
                <div className="timeline-content from-left w-[38%] flex justify-end opacity-0">
                  <p className="font-libre-caslon text-xl text-gray-800 text-right pr-2">Início da Cerimônia</p>
                </div>
                <div className="timeline-node w-10 h-10 rounded-full bg-white border border-[#e7376f]/30 flex items-center justify-center shadow-lg absolute left-1/2 -translate-x-1/2 text-[#e7376f] opacity-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div className="timeline-content from-right w-[38%] flex justify-start opacity-0">
                  <div className="text-left pl-2">
                    <p className="font-petit-formal text-2xl text-[#e7376f]">16:30</p>
                    <p className="font-libre-caslon text-gray-500 text-sm italic">O momento mais esperado!</p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center w-full justify-between h-28">
                <div className="timeline-content from-left w-[38%] flex justify-end opacity-0">
                  <div className="text-right pr-2">
                    <p className="font-petit-formal text-2xl text-[#e7376f]">17:00</p>
                    <p className="font-libre-caslon text-gray-500 text-sm italic"></p>
                  </div>
                </div>
                <div className="timeline-node w-10 h-10 rounded-full bg-white border border-[#e7376f]/30 flex items-center justify-center shadow-lg absolute left-1/2 -translate-x-1/2 text-[#e7376f] opacity-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div className="timeline-content from-right w-[38%] flex justify-start opacity-0">
                  <p className="font-libre-caslon text-xl text-gray-800 pl-2">Início da Festa</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center w-full justify-between h-28">
                <div className="timeline-content from-left w-[38%] flex justify-end opacity-0">
                  <p className="font-libre-caslon text-xl text-gray-800 text-right pr-2">Entradas</p>
                </div>
                <div className="timeline-node w-10 h-10 rounded-full bg-white border border-[#e7376f]/30 flex items-center justify-center shadow-lg absolute left-1/2 -translate-x-1/2 text-[#e7376f] opacity-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div className="timeline-content from-right w-[38%] flex justify-start opacity-0">
                  <div className="text-left pl-2">
                    <p className="font-petit-formal text-2xl text-[#e7376f]">17:30</p>
                    <p className="font-libre-caslon text-gray-500 text-sm italic"></p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-center w-full justify-between h-28">
                <div className="timeline-content from-left w-[38%] flex justify-end opacity-0">
                  <div className="text-right pr-2">
                    <p className="font-petit-formal text-2xl text-[#e7376f]">18:30</p>
                    <p className="font-libre-caslon text-gray-500 text-sm italic"></p>
                  </div>
                </div>

                <div className="timeline-node w-10 h-10 rounded-full bg-white border border-[#e7376f]/30 flex items-center justify-center shadow-lg absolute left-1/2 -translate-x-1/2 text-[#e7376f] opacity-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div className="timeline-content from-right w-[38%] flex justify-start opacity-0">
                  <p className="font-libre-caslon text-xl text-gray-800 pl-2">Bolo</p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-center w-full justify-between h-28">
                <div className="timeline-content from-left w-[38%] flex justify-end opacity-0">
                  <p className="font-libre-caslon text-xl text-gray-800 text-right pr-2">Abertura da Pista de Dança</p>
                </div>
                <div className="timeline-node w-10 h-10 rounded-full bg-white border border-[#e7376f]/30 flex items-center justify-center shadow-lg absolute left-1/2 -translate-x-1/2 text-[#e7376f] opacity-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div className="timeline-content from-right w-[38%] flex justify-start opacity-0">
                  <div className="text-left pl-2">
                    <p className="font-petit-formal text-2xl text-[#e7376f]">19:30</p>
                    <p className="font-libre-caslon text-gray-500 text-sm italic">Drinks e Músicas</p>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="flex items-center w-full justify-between h-28">
                <div className="timeline-content from-left w-[38%] flex justify-end opacity-0">
                  <div className="text-right pr-2">
                    <p className="font-petit-formal text-2xl text-[#e7376f]">21:00</p>
                    <p className="font-libre-caslon text-gray-500 text-sm italic"></p>
                  </div>
                </div>

                <div className="timeline-node w-10 h-10 rounded-full bg-white border border-[#e7376f]/30 flex items-center justify-center shadow-lg absolute left-1/2 -translate-x-1/2 text-[#e7376f] opacity-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div className="timeline-content from-right w-[38%] flex justify-start opacity-0">
                  <p className="font-libre-caslon text-xl text-gray-800 pl-2">Encerramento</p>
                </div>
              </div>

            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-8 px-8 py-4 w-full bg-[#e7376f] text-white rounded-full font-outfit uppercase tracking-widest text-sm hover:bg-[#d42c5c] transition-colors shadow-[0_8px_20px_rgba(231,55,111,0.3)] active:scale-95"
          >
            Voltar para o site
          </button>
        </div>
      </div>
    </div>
  );
};
