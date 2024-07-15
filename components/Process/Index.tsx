import React, { useRef, useState } from "react";
import Play from "@/assets/play.svg";
import Pause from "@/assets/pause.svg";

function Process() {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white  py-[80px] px-6">
      <div className="w-full max-w-[1218px] mx-auto flex flex-col">
        <h2 className="lg:text-[44px] text-[32px] text-black-900 text-center font-extrabold max-w-[1311px]">
          watching our process
        </h2>
        <div className="video-widget mx-auto my-4 relative mt-14 group">
          <video
            className="w-full rounded-lg shadow-md aspect-[16/7] object-cover"
            controls
            onClick={handlePlayPause}
            ref={videoRef}
          >
            <source
              src={
                "https://res.cloudinary.com/dmixz7eur/video/upload/v1719483791/11967730_3840_2160_60fps_sw0ja4.mp4"
              }
              type={"video/mp4"}
            />
            Your browser does not support the video tag.
          </video>
          <span
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg"
          >
            {isPlaying ? (
              <Pause className="opacity-0 group-hover:opacity-100" />
            ) : (
              <Play />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Process;
