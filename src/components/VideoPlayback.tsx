"use client"
type VideoModalProps = {
  videoUrl: string;
};

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl}) => {
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative bg-[#0f172a] text-white rounded-lg overflow-hidden w-[80%] sm:w-[60%] lg:w-[50%] max-w-4xl shadow-lg">
      <iframe 
  src={videoUrl} 
  className="w-full aspect-video" 
  allow="autoplay"
></iframe>
</div>
        
    </div>
  );
};

export default VideoModal;
