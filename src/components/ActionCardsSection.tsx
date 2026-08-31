import React from 'react';

interface ActionCardsSectionProps {
  onOpenManual: () => void;
  onOpenSchedule: () => void;
}

export const ActionCardsSection: React.FC<ActionCardsSectionProps> = ({ 
  onOpenManual, 
  onOpenSchedule 
}) => {
  const cards = [
    {
      title: "Manual do Convidado",
      onClick: onOpenManual,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      isLink: false
    },
    {
      title: "Lista de Presentes",
      href: "#",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
      isLink: true
    },
    {
      title: "Confirmar Presença",
      href: "#",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
      isLink: true
    },
    {
      title: "Cronograma",
      onClick: onOpenSchedule,
      image: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=600&q=80",
      isLink: false
    }
  ];

  return (
    <section
      id="informacoes"
      className="bg-[#e7376f] flex flex-col items-center justify-center py-6 h-[100dvh] relative w-full overflow-hidden"
    >
      <div className="flex flex-col items-center relative max-w-[430px] w-full px-6 h-full justify-center">
        
        {/* Title */}
        <div className="flex flex-col justify-center text-center text-white mb-6 w-full relative z-10 shrink-0 mt-8">
          <p className="font-outfit font-light tracking-[0.2em] uppercase text-xs opacity-90 mb-1">Acesso Rápido</p>
          <h2 className="font-petit-formal text-5xl mb-2 drop-shadow-md">Informações</h2>
        </div>

        {/* Cards Grid / List */}
        <div className="flex flex-col gap-3 w-full relative z-10 flex-1 pb-8">
          {cards.map((card, index) => {
            const innerContent = (
              <>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                
                {/* Elegant Overlay (Gradient) */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
                
                {/* Text Wrapper */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
                  
                  <span className="font-libre-caslon text-white text-xl md:text-2xl tracking-wide text-center drop-shadow-lg">
                    {card.title}
                  </span>
                </div>
              </>
            );

            const className = "relative w-full flex-1 rounded-2xl border-2 border-white/40 overflow-hidden shadow-2xl group cursor-pointer block transform transition-transform duration-300 active:scale-95";

            if (card.isLink) {
              return (
                <a 
                  key={index}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {innerContent}
                </a>
              );
            }

            return (
              <button 
                key={index}
                onClick={card.onClick}
                className={className}
              >
                {innerContent}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
