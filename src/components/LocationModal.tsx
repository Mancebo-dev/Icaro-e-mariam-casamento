import React, { useState } from 'react';
import { X, Navigation, MapPin, Copy, Check, ExternalLink, Calendar, MessageCircle } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const venueName = "Espaço Boa Vista";
  const venueCity = "Rio das Ostras - RJ";
  const fullAddress = "Espaço Boa Vista, Rio das Ostras - RJ, Brasil";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Espaço Boa Vista Rio das Ostras'
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Espaço Boa Vista Rio das Ostras')}&navigate=yes`;

  // Google Calendar Link for March 6, 2027 at 15:30 BRT
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Casamento Ícaro & Mariam'
  )}&dates=20270306T183000Z/20270307T030000Z&details=${encodeURIComponent(
    'Celebração do casamento de Ícaro & Mariam no Espaço Boa Vista em Rio das Ostras.'
  )}&location=${encodeURIComponent(fullAddress)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppRSVP = () => {
    const text = encodeURIComponent("Olá! Gostaria de confirmar minha presença no casamento de Ícaro & Mariam no dia 06/03/2027! 💍✨");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-zinc-900 border border-pink-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fd710b] via-[#e7386d] to-[#ff0051]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Title & Info */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fd710b] to-[#e7386d] flex items-center justify-center text-white shadow-md">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-libre-caslon text-2xl font-bold text-white">
              {venueName}
            </h3>
            <p className="text-zinc-400 text-sm">{venueCity}</p>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-zinc-800/80 border border-zinc-700/60 rounded-2xl p-4 mb-6 flex items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-zinc-300 select-all">
            {fullAddress}
          </p>
          <button
            onClick={handleCopyAddress}
            className="p-2 bg-white/10 hover:bg-white/20 text-pink-400 rounded-xl transition-colors shrink-0 flex items-center gap-1 text-xs font-semibold"
            title="Copiar endereço"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            <span>{copied ? 'Copiado' : 'Copiar'}</span>
          </button>
        </div>

        {/* GPS Navigation Actions */}
        <div className="flex flex-col gap-3">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-medium text-white shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <Navigation size={18} />
              <span>Abrir no Google Maps</span>
            </div>
            <ExternalLink size={16} />
          </a>

          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-xl font-medium text-white shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <Navigation size={18} />
              <span>Abrir no Waze</span>
            </div>
            <ExternalLink size={16} />
          </a>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-xs font-semibold text-zinc-200 transition-colors"
            >
              <Calendar size={16} className="text-[#fd710b]" />
              <span>Salvar na Agenda</span>
            </a>

            <button
              onClick={handleWhatsAppRSVP}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-700 hover:bg-emerald-600 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Confirmar Presença</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
