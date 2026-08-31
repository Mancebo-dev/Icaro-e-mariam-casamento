import React from 'react';
import { X } from 'lucide-react';

interface GuestManualModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuestManualModal: React.FC<GuestManualModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity">
      <div 
        className="bg-[#fcfaf8] w-full max-w-[430px] h-[100dvh] overflow-hidden relative flex flex-col items-center shadow-2xl animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Subtle watercolor background overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80")' }} 
        />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-black/5 hover:bg-black/10 rounded-full text-gray-600 transition-colors z-20 backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center px-6 py-12 relative w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          <div className="flex flex-col items-center mb-8">
            <p className="font-outfit text-[#e7376f] uppercase tracking-[0.2em] text-xs mb-2 opacity-80">Manual do Convidado</p>
            <h2 className="font-petit-formal text-5xl text-center text-gray-800 leading-none">Código de<br/>Vestimenta</h2>
          </div>
          
          <div className="w-full flex flex-col gap-10 mb-12">
            
            {/* Mulheres */}
            <div className="flex flex-col w-full relative">
              <div className="w-full h-[180px] rounded-3xl overflow-hidden mb-6 shadow-md relative group">
                <img 
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80" 
                  alt="Vestido elegante" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-petit-formal text-white text-4xl drop-shadow-md">Mulheres</h3>
                </div>
              </div>
              
              <div className="flex flex-col px-2">
                <p className="font-libre-caslon text-gray-700 leading-relaxed text-[16px] mb-3">
                  Vestido longo ou midi, tecidos leves e fluidos com cores alegres.
                </p>
                <div className="flex items-stretch gap-2">
                  <div className="w-1 bg-[#e7376f] rounded-full shrink-0" />
                  <p className="font-outfit text-[#e7376f] font-medium text-[14px] py-1">
                    Obs: Não use branco, rosa, marsala e cores claras.
                  </p>
                </div>
              </div>
            </div>

            {/* Homens */}
            <div className="flex flex-col w-full relative">
              <div className="w-full h-[180px] rounded-3xl overflow-hidden mb-6 shadow-md relative group">
                <img 
                  src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=600&q=80" 
                  alt="Traje masculino" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-petit-formal text-white text-4xl drop-shadow-md">Homens</h3>
                </div>
              </div>
              
              <div className="flex flex-col px-2">
                <p className="font-libre-caslon text-gray-700 leading-relaxed text-[16px] mb-3">
                  Esporte fino. Camisa social, calça de sarja ou social. Sem gravata.
                </p>
                <div className="flex items-stretch gap-2">
                  <div className="w-1 bg-[#e7376f] rounded-full shrink-0" />
                  <p className="font-outfit text-[#e7376f] font-medium text-[14px] py-1">
                    Obs: Não use bege ou marrom.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col items-center mb-6">
            <h2 className="font-petit-formal text-4xl text-center text-gray-800 leading-none mb-2">Informações<br/>Importantes</h2>
          </div>

          <div className="w-full flex flex-col gap-4 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-100">
              <h4 className="font-petit-formal text-[#e7376f] text-2xl mb-2">Confirmação de Presença</h4>
              <p className="font-libre-caslon text-gray-600 text-[15px] mb-4 leading-relaxed">Por favor, confirme sua presença até <strong>01/11/2026</strong></p>
              <a href="#" className="bg-[#e7376f] text-white font-outfit uppercase text-[12px] tracking-widest font-medium py-2.5 px-6 rounded-full hover:bg-[#d42c5c] transition-colors shadow-sm">Confirmar Presença</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-100">
              <h4 className="font-petit-formal text-[#e7376f] text-2xl mb-2">Lista de Presentes</h4>
              <p className="font-libre-caslon text-gray-600 text-[15px] mb-4 leading-relaxed">Confira nossa lista de presentes e escolha algo que você goste!</p>
              <a href="#" className="bg-[#e7376f] text-white font-outfit uppercase text-[12px] tracking-widest font-medium py-2.5 px-6 rounded-full hover:bg-[#d42c5c] transition-colors shadow-sm">Lista de Presentes</a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-100">
              <h4 className="font-petit-formal text-[#e7376f] text-2xl mb-2">Horário da Cerimônia</h4>
              <p className="font-libre-caslon text-gray-600 text-[15px] leading-relaxed">A cerimônia começará pontualmente às <strong>16:00</strong>. Chegue com antecedência para não perder nenhum momento especial.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-100">
              <h4 className="font-petit-formal text-[#e7376f] text-2xl mb-2">Estacionamento</h4>
              <p className="font-libre-caslon text-gray-600 text-[15px] leading-relaxed">O local não possui estacionamento próprio. No entanto, há vagas disponíveis na rua, próximas ao espaço. Sugerimos chegar cedo para garantir um lugar com tranquilidade.</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="mt-auto px-8 py-4 w-full bg-[#e7376f] text-white rounded-full font-outfit uppercase tracking-widest text-[14px] font-semibold hover:bg-[#d42c5c] transition-colors shadow-[0_8px_20px_rgba(231,55,111,0.3)] active:scale-95 shrink-0"
          >
            Voltar para o site
          </button>
        </div>
      </div>
    </div>
  );
};
