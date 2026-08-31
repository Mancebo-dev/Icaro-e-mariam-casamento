import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const targetDate = new Date('2027-03-06T15:30:00-03:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number, digits: number = 2) => {
    return String(num).padStart(digits, '0');
  };

  const NumberBlock = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="font-libre-caslon italic text-5xl md:text-6xl text-white tracking-wider mb-2">
        {value}
      </div>
      <div className="font-outfit text-xs md:text-sm text-white/90 uppercase tracking-[0.2em] font-light">
        {label}
      </div>
    </div>
  );

  const Divider = () => (
    <div className="flex flex-col items-center justify-start h-full pt-2 md:pt-4">
      <span className="text-white/60 text-2xl font-light">:</span>
    </div>
  );

  return (
    <section
      id="contagem"
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#e7386d] to-[#d42c5c] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-lg px-4 flex flex-col items-center">
        <div className="flex items-start justify-center gap-2 md:gap-4 w-full">
          <NumberBlock value={pad(timeLeft.days, 3)} label="Dias" />
          <Divider />
          <NumberBlock value={pad(timeLeft.hours, 2)} label="Horas" />
          <Divider />
          <NumberBlock value={pad(timeLeft.minutes, 2)} label="Min" />
          <Divider />
          <NumberBlock value={pad(timeLeft.seconds, 2)} label="Seg" />
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-white/80 font-outfit text-sm font-light">
          <Sparkles className="w-4 h-4" />
          <span>Contagem para o Grande Dia</span>
        </div>
      </div>
    </section>
  );
};
