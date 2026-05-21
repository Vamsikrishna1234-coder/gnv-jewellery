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
//         w-full

//         h-[180px]

//         xs:h-[220px]

//         sm:h-[280px]

//         md:h-[420px]

//         lg:h-[560px]

//         xl:h-[770px]

//         2xl:h-[770px]
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
//               object-center
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

//               right-2
//               bottom-2

//               sm:right-4
//               sm:bottom-4

//               md:right-6
//               md:bottom-6

//               bg-black/60
//               p-2
//               md:p-3

//               rounded-full
//               text-white
//               hover:bg-black
//               duration-300
//               backdrop-blur-md
//             "
//           >
//             {isMuted ? (
//               <VolumeX
//                 size={18}
//                 className="sm:w-5 sm:h-5 md:w-6 md:h-6"
//               />
//             ) : (
//               <Volume2
//                 size={18}
//                 className="sm:w-5 sm:h-5 md:w-6 md:h-6"
//               />
//             )}
//           </button>

//           {/* NEXT BUTTON */}
//           <button
//             onClick={nextSlide}
//             className="
//               absolute
//               z-30

//               right-2
//               sm:right-4
//               md:right-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60

//               p-2
//               md:p-3

//               rounded-full
//               text-white

//               opacity-100
//               lg:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110
//               backdrop-blur-md
//             "
//           >
//             <ChevronRight
//               size={20}
//               className="sm:w-6 sm:h-6 md:w-7 md:h-7"
//             />
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
//                 object-center
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

//               left-2
//               sm:left-4
//               md:left-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60

//               p-2
//               md:p-3

//               rounded-full
//               text-white

//               opacity-100
//               lg:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110
//               backdrop-blur-md
//             "
//           >
//             <ChevronLeft
//               size={20}
//               className="sm:w-6 sm:h-6 md:w-7 md:h-7"
//             />
//           </button>

//           {/* NEXT BUTTON */}
//           <button
//             onClick={nextSlide}
//             className="
//               absolute
//               z-30

//               right-2
//               sm:right-4
//               md:right-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60

//               p-2
//               md:p-3

//               rounded-full
//               text-white

//               opacity-100
//               lg:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110
//               backdrop-blur-md
//             "
//           >
//             <ChevronRight
//               size={20}
//               className="sm:w-6 sm:h-6 md:w-7 md:h-7"
//             />
//           </button>
//         </>
//       )}

//       {/* ================= CUSTOM ANIMATIONS ================= */}
//       <style>
//         {`
//           /* ================= VIDEO FLOAT ================= */

//           .videoFloat {
//             animation: videoFloat 8s ease-in-out infinite alternate;
//             will-change: transform;
//           }

//           @keyframes videoFloat {

//             0% {
//               transform: scale(1) translateY(0px);
//             }

//             100% {
//               transform: scale(1.04) translateY(-8px);
//             }
//           }

//           /* ================= LIQUID REVEAL ================= */

//           .liquidReveal {
//             animation: liquidReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1);
//             will-change: transform, opacity;
//           }

//           @keyframes liquidReveal {

//             0% {
//               opacity: 0;
//               transform: scale(1.15) rotate(-1deg);
//               clip-path: circle(0% at 50% 50%);
//               filter: brightness(1.15);
//             }

//             50% {
//               opacity: 1;
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
//               animation-duration: 0.8s;
//             }
//           }

//           /* ================= LARGE SCREEN FIX ================= */

//           @media (min-width: 1440px) {

//             .videoFloat {
//               transform: scale(1.02);
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;




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

//   // 0 = VIDEO
//   // 1,2,3,4 = IMAGES
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ================= SOUND =================

//   const toggleSound = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   // ================= NEXT =================

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === sliderImages.length ? 0 : prev + 1
//     );
//   };

//   // ================= PREV =================

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? sliderImages.length : prev - 1
//     );
//   };

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         group
//         bg-black
//         w-full

//         aspect-[1920/770]
//       "
//     >
//       {/* ===================================================== */}
//       {/* ===================== VIDEO ========================= */}
//       {/* ===================================================== */}

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
//               inset-0

//               w-full
//               h-full

//               object-cover
//               object-center

//               videoFloat
//             "
//           >
//             <source src={video} type="video/mp4" />
//           </video>

//           {/* SOUND BUTTON */}

//           <button
//             onClick={toggleSound}
//             className="
//               absolute
//               z-30

//               right-2
//               bottom-2

//               sm:right-4
//               sm:bottom-4

//               md:right-6
//               md:bottom-6

//               bg-black/60

//               p-2
//               md:p-3

//               rounded-full
//               text-white

//               hover:bg-black

//               duration-300
//               backdrop-blur-md
//             "
//           >
//             {isMuted ? (
//               <VolumeX
//                 size={18}
//                 className="sm:w-5 sm:h-5 md:w-6 md:h-6"
//               />
//             ) : (
//               <Volume2
//                 size={18}
//                 className="sm:w-5 sm:h-5 md:w-6 md:h-6"
//               />
//             )}
//           </button>

//           {/* NEXT BUTTON */}

//           <button
//             onClick={nextSlide}
//             className="
//               absolute
//               z-30

//               right-2
//               sm:right-4
//               md:right-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60

//               p-2
//               md:p-3

//               rounded-full
//               text-white

//               opacity-100
//               lg:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110

//               backdrop-blur-md
//             "
//           >
//             <ChevronRight
//               size={20}
//               className="sm:w-6 sm:h-6 md:w-7 md:h-7"
//             />
//           </button>
//         </>
//       )}

//       {/* ===================================================== */}
//       {/* ===================== IMAGE ========================= */}
//       {/* ===================================================== */}

//       {currentIndex > 0 && (
//         <>
//           <div
//             key={currentIndex}
//             className="absolute inset-0 overflow-hidden"
//           >
//             <img
//               src={sliderImages[currentIndex - 1]}
//               alt="slide"
//               loading="lazy"
//               className="
//                 w-full
//                 h-full

//                 object-cover
//                 object-center

//                 liquidReveal
//               "
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

//               left-2
//               sm:left-4
//               md:left-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60

//               p-2
//               md:p-3

//               rounded-full
//               text-white

//               opacity-100
//               lg:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110

//               backdrop-blur-md
//             "
//           >
//             <ChevronLeft
//               size={20}
//               className="sm:w-6 sm:h-6 md:w-7 md:h-7"
//             />
//           </button>

//           {/* NEXT BUTTON */}

//           <button
//             onClick={nextSlide}
//             className="
//               absolute
//               z-30

//               right-2
//               sm:right-4
//               md:right-6

//               top-1/2
//               -translate-y-1/2

//               bg-black/60

//               p-2
//               md:p-3

//               rounded-full
//               text-white

//               opacity-100
//               lg:opacity-0
//               group-hover:opacity-100

//               transition
//               duration-300
//               hover:scale-110

//               backdrop-blur-md
//             "
//           >
//             <ChevronRight
//               size={20}
//               className="sm:w-6 sm:h-6 md:w-7 md:h-7"
//             />
//           </button>
//         </>
//       )}

//       {/* ===================================================== */}
//       {/* ================= CUSTOM ANIMATIONS ================= */}
//       {/* ===================================================== */}

//       <style>
//         {`
//           /* ================= VIDEO FLOAT ================= */

//           .videoFloat {
//             animation: videoFloat 8s ease-in-out infinite alternate;
//             will-change: transform;
//           }

//           @keyframes videoFloat {

//             0% {
//               transform: scale(1) translateY(0px);
//             }

//             100% {
//               transform: scale(1.04) translateY(-8px);
//             }
//           }

//           /* ================= LIQUID REVEAL ================= */

//           .liquidReveal {
//             animation: liquidReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1);
//             will-change: transform, opacity;
//           }

//           @keyframes liquidReveal {

//             0% {
//               opacity: 0;
//               transform: scale(1.15) rotate(-1deg);
//               clip-path: circle(0% at 50% 50%);
//               filter: brightness(1.15);
//             }

//             50% {
//               opacity: 1;
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
//               animation-duration: 0.8s;
//             }
//           }

//           /* ================= LARGE SCREEN FIX ================= */

//           @media (min-width: 1440px) {

//             .videoFloat {
//               transform: scale(1.02);
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;





import React, { useRef, useState, memo } from "react";
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import video from "../assets/videos/gnv ad film.mp4";

const HeroSection = () => {
  const videoRef = useRef(null);

  // =====================================================
  // ================= OPTIMIZED IMAGES ==================
  // =====================================================

  const sliderImages = [
    "https://res.cloudinary.com/doj01erfd/image/upload/f_auto,q_auto,w_1920/v1778237436/hm_bnr1_uziwq8.jpg",

    "https://res.cloudinary.com/doj01erfd/image/upload/f_auto,q_auto,w_1920/v1778237435/hm_bnr_prw3oi.jpg",

    "https://res.cloudinary.com/doj01erfd/image/upload/f_auto,q_auto,w_1920/v1778237443/hm_bnr3_qxu9qh.jpg",

    "https://res.cloudinary.com/doj01erfd/image/upload/f_auto,q_auto,w_1920/v1778237436/hm_bnr2_uldful.jpg",
  ];

  const [isMuted, setIsMuted] = useState(true);

  // 0 = VIDEO
  // 1,2,3,4 = IMAGES

  const [currentIndex, setCurrentIndex] = useState(0);

  // =====================================================
  // ================= SOUND TOGGLE ======================
  // =====================================================

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // =====================================================
  // ================= NEXT SLIDE ========================
  // =====================================================

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === sliderImages.length ? 0 : prev + 1
    );
  };

  // =====================================================
  // ================= PREVIOUS SLIDE ====================
  // =====================================================

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length : prev - 1
    );
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        group
        bg-black
        w-full

        aspect-[1920/770]
      "
    >
      {/* ===================================================== */}
      {/* ===================== VIDEO ========================= */}
      {/* ===================================================== */}

      {currentIndex === 0 && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onEnded={() => setCurrentIndex(1)}
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover
              object-center

              videoFloat
            "
          >
            <source src={video} type="video/mp4" />
          </video>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/5 z-10" />

          {/* ===================================================== */}
          {/* ================= SOUND BUTTON ====================== */}
          {/* ===================================================== */}

          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="
              absolute
              z-30

              right-2
              bottom-2

              sm:right-4
              sm:bottom-4

              md:right-6
              md:bottom-6

              bg-black/50

              p-2
              md:p-3

              rounded-full
              text-white

              hover:bg-black/80

              duration-300

              backdrop-blur-sm
            "
          >
            {isMuted ? (
              <VolumeX
                size={18}
                className="
                  sm:w-5 sm:h-5
                  md:w-6 md:h-6
                "
              />
            ) : (
              <Volume2
                size={18}
                className="
                  sm:w-5 sm:h-5
                  md:w-6 md:h-6
                "
              />
            )}
          </button>

          {/* ===================================================== */}
          {/* ================= NEXT BUTTON ======================= */}
          {/* ===================================================== */}

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="
              absolute
              z-30

              right-2
              sm:right-4
              md:right-6

              top-1/2
              -translate-y-1/2

              bg-black/50

              p-2
              md:p-3

              rounded-full
              text-white

              opacity-100
              lg:opacity-0
              group-hover:opacity-100

              transition-all
              duration-300

              hover:scale-110
              hover:bg-black/80

              backdrop-blur-sm
            "
          >
            <ChevronRight
              size={20}
              className="
                sm:w-6 sm:h-6
                md:w-7 md:h-7
              "
            />
          </button>
        </>
      )}

      {/* ===================================================== */}
      {/* ===================== IMAGES ======================== */}
      {/* ===================================================== */}

      {currentIndex > 0 && (
        <>
          <div
            key={currentIndex}
            className="
              absolute
              inset-0
              overflow-hidden
            "
          >
            <img
              src={sliderImages[currentIndex - 1]}
              alt="GNV Jewellery Banner"
              loading="lazy"
              decoding="async"
              draggable="false"
              className="
                w-full
                h-full

                object-cover
                object-center

                liquidReveal
              "
            />

            {/* OVERLAY */}

            
          </div>

          {/* ===================================================== */}
          {/* ================= PREVIOUS BUTTON =================== */}
          {/* ===================================================== */}

          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="
              absolute
              z-30

              left-2
              sm:left-4
              md:left-6

              top-1/2
              -translate-y-1/2

              bg-black/50

              p-2
              md:p-3

              rounded-full
              text-white

              opacity-100
              lg:opacity-0
              group-hover:opacity-100

              transition-all
              duration-300

              hover:scale-110
              hover:bg-black/80

              backdrop-blur-sm
            "
          >
            <ChevronLeft
              size={20}
              className="
                sm:w-6 sm:h-6
                md:w-7 md:h-7
              "
            />
          </button>

          {/* ===================================================== */}
          {/* ================= NEXT BUTTON ======================= */}
          {/* ===================================================== */}

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="
              absolute
              z-30

              right-2
              sm:right-4
              md:right-6

              top-1/2
              -translate-y-1/2

              bg-black/50

              p-2
              md:p-3

              rounded-full
              text-white

              opacity-100
              lg:opacity-0
              group-hover:opacity-100

              transition-all
              duration-300

              hover:scale-110
              hover:bg-black/80

              backdrop-blur-sm
            "
          >
            <ChevronRight
              size={20}
              className="
                sm:w-6 sm:h-6
                md:w-7 md:h-7
              "
            />
          </button>
        </>
      )}

      {/* ===================================================== */}
      {/* ================= PERFORMANCE CSS =================== */}
      {/* ===================================================== */}

      <style>
        {`
          /* ===================================================== */
          /* ================= GPU OPTIMIZATION ================== */
          /* ===================================================== */

          .videoFloat,
          .liquidReveal {

            transform: translateZ(0);

            backface-visibility: hidden;

            will-change: transform, opacity, clip-path;
          }

          /* ===================================================== */
          /* ================= VIDEO FLOAT ======================= */
          /* ===================================================== */

          .videoFloat {

            animation: videoFloat 7s ease-in-out 1;
          }

          @keyframes videoFloat {

            0% {
              transform: scale(1) translateY(0px);
            }

            100% {
              transform: scale(1.03) translateY(-6px);
            }
          }

          /* ===================================================== */
          /* ================= LIQUID REVEAL ===================== */
          /* ===================================================== */

          .liquidReveal {

            animation: liquidReveal 1s cubic-bezier(0.22, 1, 0.36, 1);
          }

          @keyframes liquidReveal {

            0% {

              opacity: 0;

              transform: scale(1.08);

              clip-path: circle(0% at 50% 50%);
            }

            40% {

              opacity: 1;
            }

            100% {

              opacity: 1;

              transform: scale(1);

              clip-path: circle(150% at 50% 50%);
            }
          }

          /* ===================================================== */
          /* ================= MOBILE/TABLET FIX ================= */
          /* ===================================================== */

          @media (max-width: 1024px) {

            .videoFloat {

              animation: none;
            }

            .liquidReveal {

              animation-duration: 0.8s;
            }
          }

          /* ===================================================== */
          /* ================= LARGE SCREEN FIX ================== */
          /* ===================================================== */

          @media (min-width: 1440px) {

            .videoFloat {

              transform: scale(1.01);
            }
          }
        `}
      </style>
    </section>
  );
};

export default memo(HeroSection);