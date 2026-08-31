import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Romantic acoustic chord progression via Web Audio API for guaranteed instant playback
  const playRomanticChords = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const notes = [
        // Chord 1: Cmaj9 (C, E, G, B, D)
        [261.63, 329.63, 392.00, 493.88, 587.33],
        // Chord 2: Am9 (A, C, E, G, B)
        [220.00, 261.63, 329.63, 392.00, 493.88],
        // Chord 3: Fmaj7 (F, A, C, E)
        [174.61, 220.00, 261.63, 329.63],
        // Chord 4: Gsus4 -> G (G, C, D, G / G, B, D, G)
        [196.00, 246.94, 293.66, 392.00]
      ];

      let chordIdx = 0;

      const playChord = () => {
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const chord = notes[chordIdx % notes.length];
        chordIdx++;

        chord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Soft bell-like envelope with arpeggio stagger
          const startTime = ctx.currentTime + i * 0.18;
          const duration = 3.5;

          gain.gain.setValueAtTime(0.0001, startTime);
          gain.gain.exponentialRampToValueAtTime(0.04, startTime + 0.15);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(startTime);
          osc.stop(startTime + duration);
        });
      };

      playChord();
      intervalRef.current = window.setInterval(playChord, 3200);
    } catch {
      console.log('Web Audio not supported or blocked');
    }
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      playRomanticChords();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar música ambiente" : "Tocar música ambiente"}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <div className="relative">
          {isPlaying ? (
            <Volume2 size={18} className="text-[#fd710b] animate-pulse" />
          ) : (
            <VolumeX size={18} className="text-zinc-400" />
          )}
        </div>

        <span className="text-xs font-medium font-outfit text-white/90">
          {isPlaying ? "Música Tocando" : "Música Ambiente"}
        </span>

        {isPlaying && (
          <div className="flex items-center gap-0.5 ml-1">
            <span className="w-1 h-3 bg-[#e7386d] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-4 bg-[#fd710b] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
      </button>
    </div>
  );
};
