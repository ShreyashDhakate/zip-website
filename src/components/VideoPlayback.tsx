import { useState, useRef, useEffect } from "react";

type VideoModalProps = {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.load();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
        togglePlay();
      } else if (event.key === "Escape") {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    if (!videoRef.current) return;
    const duration = videoRef.current.duration || 0;
    const percent = (videoRef.current.currentTime / duration) * 100;
    setProgress(isNaN(percent) ? 0 : percent);
    setCurrentTime(formatTime(videoRef.current.currentTime));
    setDuration(formatTime(duration));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!videoRef.current) return;
    const newRate = parseFloat(e.target.value);
    videoRef.current.playbackRate = newRate;
    setPlaybackRate(newRate);
  };

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration || 0));
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={onClose}>
      <div className="relative bg-[#0f172a] text-white rounded-lg overflow-hidden w-[80%] sm:w-[60%] lg:w-[50%] max-w-4xl shadow-lg" onClick={(e) => e.stopPropagation()}>
        <video ref={videoRef} className="w-full aspect-video" src={"https://www.w3schools.com/html/mov_bbb.mp4"} preload="metadata" onTimeUpdate={handleProgress} onLoadedMetadata={handleLoadedMetadata} onEnded={handleVideoEnd}>
          <track kind="subtitles" srcLang="en" label="English" default />
        </video>
        <div className="bg-[#1e293b] p-4 flex flex-col gap-3 rounded-b-lg">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="text-white text-xl" aria-label={isPlaying ? "Pause" : "Play"}>{isPlaying ? "❚❚" : "▶"}</button>
            <span className="text-sm text-gray-300">{currentTime} / {duration}</span>
            <input type="range" value={progress} onChange={handleSeek} className="w-full cursor-pointer" aria-label="Seek" />
            <button onClick={handleFullscreen} className="text-white text-xl" aria-label="Fullscreen">⛶</button>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-white text-sm">Volume</label>
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="cursor-pointer" aria-label="Volume" />
            <label className="text-white text-sm">Speed</label>
            <select value={playbackRate} onChange={handleSpeedChange} className="bg-[#334155] text-white p-1 rounded cursor-pointer" aria-label="Playback Speed">
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
