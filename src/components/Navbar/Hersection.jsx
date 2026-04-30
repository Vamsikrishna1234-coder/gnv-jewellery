import React, { useRef, useState } from "react";
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import video from "../../assets/videos/gnv ad film.mp4";
import img2 from  "../../assets/images/gnv hero1.jpg";
import img3 from  "../../assets/images/gnv hero2.jpg";
import img1 from "../../assets/images/gnv img.png";

const HeroSection = () => {
  const videoRef = useRef(null);

  const sliderImages = [img2, img3, img2, img1];

  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  // 0 = video, 1+ = images

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const nextSlide = () => {
    if (currentIndex < sliderImages.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative h-[770px] overflow-hidden group">

      {/* VIDEO SCREEN */}
      {currentIndex === 0 && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={() => setCurrentIndex(1)}
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>

          {/* Sound Button */}
          <button
            onClick={toggleSound}
            className="absolute right-8 bottom-8 z-20 bg-black/60 p-3 rounded-full text-white hover:bg-black"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          {/* Next Button on Hover */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}

      {/* IMAGE SCREEN */}
      {currentIndex > 0 && (
        <>
          <img
            src={sliderImages[currentIndex - 1]}
            alt="slide"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}
    </section>
  );
};

export default HeroSection;