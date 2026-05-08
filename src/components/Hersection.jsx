import React, { useRef, useState } from "react";
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import video from "../assets/videos/gnv ad film.mp4";
import img2 from "../assets/images/hm bnr.jpeg";
import img3 from "../assets/images/hm bnr1.jpeg";
import img1 from "../assets/images/hm bnr2.jpeg";
import img4 from "../assets/images/hm bnr3.jpeg";


const HeroSection = () => {
  const videoRef = useRef(null);

  const sliderImages = [img2, img3, img4, img1];

  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="relative h-[770px] overflow-hidden group bg-black">

      {/* VIDEO SCREEN */}
      {currentIndex === 0 && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={() => setCurrentIndex(1)}
            className="absolute top-0 left-0 w-full h-full object-cover videoFloat"
          >
            <source src={video} type="video/mp4" />
          </video>

          

          {/* Sound Button */}
          <button
            onClick={toggleSound}
            className="absolute right-8 bottom-8 z-20 bg-black/60 p-3 rounded-full text-white hover:bg-black duration-300"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110"
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}

      {/* IMAGE SCREEN */}
      {currentIndex > 0 && (
        <>
          <div
            key={currentIndex}
            className="absolute inset-0 overflow-hidden"
          >

            <img
              src={sliderImages[currentIndex - 1]}
              alt="slide"
              className="w-full h-full object-cover liquidReveal"
            />

            

          </div>

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110"
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}

      {/* Custom Animations */}
      <style>
        {`
          /* Floating Video Effect */
          .videoFloat {
            animation: videoFloat 8s ease-in-out infinite alternate;
          }

          @keyframes videoFloat {
            0% {
              transform: scale(1) translateY(0px);
            }
            100% {
              transform: scale(1.06) translateY(-10px);
            }
          }

          /* Liquid/Wave Reveal Animation */
          .liquidReveal {
            animation: liquidReveal 1.3s cubic-bezier(0.22, 1, 0.36, 1);
          }

          @keyframes liquidReveal {
            0% {
              opacity: 0;
              transform: scale(1.25) rotate(-3deg);
              clip-path: circle(0% at 50% 50%);
              filter: brightness(1.4);
            }

            50% {
              opacity: 1;
              filter: brightness(1.1);
            }

            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
              clip-path: circle(150% at 50% 50%);
              filter: brightness(1);
            }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;


