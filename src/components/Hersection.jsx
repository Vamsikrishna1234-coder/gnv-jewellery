
// import React, { useRef, useState } from "react";
// import {
//   Volume2,
//   VolumeX,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// import video from "../assets/videos/gnv ad film.mp4";

// const HeroSection = () => {
//   const videoRef = useRef(null);

//   const sliderImages = [
//     "https://res.cloudinary.com/doj01erfd/image/upload/v1778237436/hm_bnr1_uziwq8.jpg",

//     "https://res.cloudinary.com/doj01erfd/image/upload/v1778237435/hm_bnr_prw3oi.jpg",

//     "https://res.cloudinary.com/doj01erfd/image/upload/v1778237443/hm_bnr3_qxu9qh.jpg",

//     "https://res.cloudinary.com/doj01erfd/image/upload/v1778237436/hm_bnr2_uldful.jpg",
//   ];

//   const [isMuted, setIsMuted] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const toggleSound = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   const nextSlide = () => {
//     if (currentIndex < sliderImages.length) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         group
//         bg-black

//         h-[320px]
//         sm:h-[420px]
//         md:h-[520px]
//         lg:h-[620px]
//         xl:h-[770px]
//       "
//     >

//       {/* ================= VIDEO SCREEN ================= */}
//       {currentIndex === 0 && (
//         <>

//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             onEnded={() => setCurrentIndex(1)}
//             className="
//               absolute
//               top-0
//               left-0
//               w-full
//               h-full
//               object-cover
//               videoFloat
//             "
//           >
//             <source src={video} type="video/mp4" />
//           </video>

//           {/* DARK OVERLAY */}
//           <div className="absolute inset-0 bg-black/0 z-10" />

//           {/* SOUND BUTTON */}
//           <button
//             onClick={toggleSound}
//             className="
//               absolute
//               z-30

//               right-3
//               bottom-3

//               sm:right-5
//               sm:bottom-5

//               md:right-7
//               md:bottom-7

//               bg-black/60
//               p-2
//               sm:p-3
//               rounded-full
//               text-white
//               hover:bg-black
//               duration-300
//               backdrop-blur-md
//             "
//           >
//             {isMuted ? (
//               <VolumeX size={20} className="sm:w-6 sm:h-6" />
//             ) : (
//               <Volume2 size={20} className="sm:w-6 sm:h-6" />
//             )}
//           </button>

//           {/* NEXT BUTTON */}
//           <button
//             onClick={nextSlide}
//             className="
//               absolute
//               z-30

//               right-3
//               sm:right-4
//               md:right-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60
//               p-2
//               sm:p-3

//               rounded-full
//               text-white

//               opacity-100
//               md:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110
//               backdrop-blur-md
//             "
//           >
//             <ChevronRight size={22} className="sm:w-7 sm:h-7" />
//           </button>

//         </>
//       )}

//       {/* ================= IMAGE SCREEN ================= */}
//       {currentIndex > 0 && (
//         <>

//           <div
//             key={currentIndex}
//             className="absolute inset-0 overflow-hidden"
//           >

//             <img
//               src={sliderImages[currentIndex - 1]}
//               alt="slide"
//               className="
//                 w-full
//                 h-full
//                 object-cover
//                 liquidReveal
//               "
//               loading="lazy"
//             />

//             {/* OVERLAY */}
//             <div className="absolute inset-0 bg-black/10" />

//           </div>

//           {/* PREV BUTTON */}
//           <button
//             onClick={prevSlide}
//             className="
//               absolute
//               z-30

//               left-3
//               sm:left-4
//               md:left-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60
//               p-2
//               sm:p-3

//               rounded-full
//               text-white

//               opacity-100
//               md:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110
//               backdrop-blur-md
//             "
//           >
//             <ChevronLeft size={22} className="sm:w-7 sm:h-7" />
//           </button>

//           {/* NEXT BUTTON */}
//           <button
//             onClick={nextSlide}
//             className="
//               absolute
//               z-30

//               right-3
//               sm:right-4
//               md:right-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60
//               p-2
//               sm:p-3

//               rounded-full
//               text-white

//               opacity-100
//               md:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110
//               backdrop-blur-md
//             "
//           >
//             <ChevronRight size={22} className="sm:w-7 sm:h-7" />
//           </button>

//         </>
//       )}

//       {/* ================= CUSTOM ANIMATIONS ================= */}
//       <style>
//         {`
//           /* ================= VIDEO FLOAT ================= */

//           .videoFloat {
//             animation: videoFloat 8s ease-in-out infinite alternate;
//           }

//           @keyframes videoFloat {

//             0% {
//               transform: scale(1) translateY(0px);
//             }

//             100% {
//               transform: scale(1.05) translateY(-10px);
//             }
//           }

//           /* ================= LIQUID REVEAL ================= */

//           .liquidReveal {
//             animation: liquidReveal 1.3s cubic-bezier(0.22, 1, 0.36, 1);
//           }

//           @keyframes liquidReveal {

//             0% {
//               opacity: 0;
//               transform: scale(1.20) rotate(-2deg);
//               clip-path: circle(0% at 50% 50%);
//               filter: brightness(1.3);
//             }

//             50% {
//               opacity: 1;
//               filter: brightness(1.1);
//             }

//             100% {
//               opacity: 1;
//               transform: scale(1) rotate(0deg);
//               clip-path: circle(150% at 50% 50%);
//               filter: brightness(1);
//             }
//           }

//           /* ================= MOBILE FIX ================= */

//           @media (max-width: 768px) {

//             .videoFloat {
//               animation: none;
//             }

//             .liquidReveal {
//               animation-duration: 0.9s;
//             }
//           }
//         `}
//       </style>

//     </section>
//   );
// };

// export default HeroSection;





import React, { useRef, useState } from "react";
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import video from "../assets/videos/gnv ad film.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  const sliderImages = [
    "https://res.cloudinary.com/doj01erfd/image/upload/v1778237436/hm_bnr1_uziwq8.jpg",

    "https://res.cloudinary.com/doj01erfd/image/upload/v1778237435/hm_bnr_prw3oi.jpg",

    "https://res.cloudinary.com/doj01erfd/image/upload/v1778237443/hm_bnr3_qxu9qh.jpg",

    "https://res.cloudinary.com/doj01erfd/image/upload/v1778237436/hm_bnr2_uldful.jpg",
  ];

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
    <section
      className="
        relative
        overflow-hidden
        group
        bg-black

        h-[220px]
        sm:h-[300px]
        md:h-[420px]
        lg:h-[560px]
        xl:h-[770px]
      "
    >
      {/* ================= VIDEO SCREEN ================= */}
      {currentIndex === 0 && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={() => setCurrentIndex(1)}
            className="
              absolute
              top-0
              left-0

              w-full
              h-full

              object-fill
              md:object-cover

              object-center

              videoFloat
            "
          >
            <source src={video} type="video/mp4" />
          </video>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/0 z-10" />

          {/* SOUND BUTTON */}
          <button
            onClick={toggleSound}
            className="
              absolute
              z-30

              right-3
              bottom-3

              sm:right-5
              sm:bottom-5

              md:right-7
              md:bottom-7

              bg-black/60
              p-2
              sm:p-3

              rounded-full
              text-white

              hover:bg-black
              duration-300
              backdrop-blur-md
            "
          >
            {isMuted ? (
              <VolumeX size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Volume2 size={20} className="sm:w-6 sm:h-6" />
            )}
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="
              absolute
              z-30

              right-3
              sm:right-4
              md:right-6

              top-1/2
              -translate-y-1/2

              bg-black/60
              p-2
              sm:p-3

              rounded-full
              text-white

              opacity-100
              md:opacity-0
              group-hover:opacity-100

              transition
              duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <ChevronRight size={22} className="sm:w-7 sm:h-7" />
          </button>
        </>
      )}

      {/* ================= IMAGE SCREEN ================= */}
      {currentIndex > 0 && (
        <>
          <div
            key={currentIndex}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={sliderImages[currentIndex - 1]}
              alt="slide"
              className="
                w-full
                h-full

                object-fill
                md:object-cover

                object-center

                liquidReveal
              "
              loading="lazy"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* PREV BUTTON */}
          <button
            onClick={prevSlide}
            className="
              absolute
              z-30

              left-3
              sm:left-4
              md:left-6

              top-1/2
              -translate-y-1/2

              bg-black/60
              p-2
              sm:p-3

              rounded-full
              text-white

              opacity-100
              md:opacity-0
              group-hover:opacity-100

              transition
              duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <ChevronLeft size={22} className="sm:w-7 sm:h-7" />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="
              absolute
              z-30

              right-3
              sm:right-4
              md:right-6

              top-1/2
              -translate-y-1/2

              bg-black/60
              p-2
              sm:p-3

              rounded-full
              text-white

              opacity-100
              md:opacity-0
              group-hover:opacity-100

              transition
              duration-300
              hover:scale-110
              backdrop-blur-md
            "
          >
            <ChevronRight size={22} className="sm:w-7 sm:h-7" />
          </button>
        </>
      )}

      {/* ================= CUSTOM ANIMATIONS ================= */}
      <style>
        {`
          /* ================= VIDEO FLOAT ================= */

          .videoFloat {
            animation: videoFloat 8s ease-in-out infinite alternate;
          }

          @keyframes videoFloat {

            0% {
              transform: scale(1) translateY(0px);
            }

            100% {
              transform: scale(1.05) translateY(-10px);
            }
          }

          /* ================= LIQUID REVEAL ================= */

          .liquidReveal {
            animation: liquidReveal 1.3s cubic-bezier(0.22, 1, 0.36, 1);
          }

          @keyframes liquidReveal {

            0% {
              opacity: 0;
              transform: scale(1.20) rotate(-2deg);
              clip-path: circle(0% at 50% 50%);
              filter: brightness(1.3);
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

          /* ================= MOBILE FIX ================= */

          @media (max-width: 768px) {

            .videoFloat {
              animation: none;
            }

            .liquidReveal {
              animation-duration: 0.9s;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;





