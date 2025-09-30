import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Free wedding music URL (you can replace with your preferred track)
  const musicUrl = "/SparksColdplay.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.3; // Set a gentle volume level

    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      if (isPlaying && audio.paused) {
        audio.play().catch(console.error);
      }
    };

    // Add listeners for user interaction
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("scroll", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        if (hasUserInteracted) {
          await audio.play();
          setIsPlaying(true);
        } else {
          // Auto-play will happen after user interaction
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src={musicUrl} type="audio/wav" />
        <source
          src="../assets/CarryYouHome.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 left-6 z-50 backdrop-blur-sm border rounded-full p-3 transition-all duration-1000 ${
          isPlaying
            ? "bg-rose-gold/30 border-rose-gold/50 text-white animate-pulse"
            : "bg-white/30 border-white/50 text-rose-gold hover:bg-rose-gold/20 hover:border-rose-gold/30"
        }`}
        title={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
};

export default BackgroundMusic;
