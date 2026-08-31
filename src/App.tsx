import { useEffect, useState, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { VerseSection } from './components/VerseSection';
import { StorySection } from './components/StorySection';
import { ActionCardsSection } from './components/ActionCardsSection';
import { LocationSection } from './components/LocationSection';
import { ScheduleModal } from './components/ScheduleModal';
import { GuestManualModal } from './components/GuestManualModal';
import { setupScrollAnimations } from './utils/animations';

export function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    
    const tryPlayAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {
          // Autoplay policy prevented playback
        });
      }
    };

    // Try playing immediately
    tryPlayAudio();

    // Listen for the first user interaction to bypass autoplay restrictions if needed
    document.addEventListener('click', tryPlayAudio, { once: true });
    document.addEventListener('touchstart', tryPlayAudio, { once: true });
    document.addEventListener('scroll', tryPlayAudio, { once: true });

    return () => {
      if (cleanup) cleanup();
      document.removeEventListener('click', tryPlayAudio);
      document.removeEventListener('touchstart', tryPlayAudio);
      document.removeEventListener('scroll', tryPlayAudio);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex justify-center items-start">
      
      {/* Background Audio */}
      <audio 
        ref={audioRef}
        src="/those eyes if hans zimmer composed it - (256 Kbps).mp3"
        loop
        autoPlay
      />

      <main className="w-full max-w-[430px] bg-white relative overflow-hidden flex flex-col shadow-2xl">
        {/* 1. HOME / HERO SECTION */}
        <HeroSection />

        {/* 2 & 3. CONTAGEM E VERSÍCULO (1 TELA DE ALTURA) */}
        <div className="flex flex-col min-h-[100dvh]">
          <div className="flex-none">
            <CountdownSection />
          </div>
          <div className="flex-1 flex flex-col justify-center bg-white">
            <VerseSection />
          </div>
        </div>

        {/* 4. NOSSA HISTORIA */}
        <StorySection />

        {/* 5. INFORMAÇÕES (CARDS) */}
        <ActionCardsSection 
          onOpenManual={() => setIsManualOpen(true)}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />

        {/* 6. LOCAL / SAVE THE DATE / COMO CHEGAR */}
        <LocationSection />

        {/* FOOTER */}
        <footer className="w-full bg-[#f8f8f8] py-4 text-center">
          <p className="font-outfit text-xs text-gray-400 uppercase tracking-widest">
            Ícaro & Mariam © 2027
          </p>
        </footer>

      </main>

      {/* MODALS */}
      <ScheduleModal 
        isOpen={isScheduleOpen} 
        onClose={() => setIsScheduleOpen(false)} 
      />
      <GuestManualModal 
        isOpen={isManualOpen} 
        onClose={() => setIsManualOpen(false)} 
      />
    </div>
  );
}

export default App;
