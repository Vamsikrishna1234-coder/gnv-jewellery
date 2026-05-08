import React from "react";
import { MessageCircle } from "lucide-react";

const TopOfferBar = () => {

  // Replace with your WhatsApp Channel Link
  const whatsappChannel =
    " https://whatsapp.com/channel/0029Va9XbQ0JuyA7jwN36u0M";

  return (
    <div className="bg-[#cc3b40] text-white text-sm py-2 flex items-center overflow-hidden">

      {/* Continuous Infinite Text */}
      <div className="flex-1 overflow-hidden">
        <div className="marquee-wrapper">

          <div className="marquee-content">
            <span className="mx-10 font-medium">
              🎉 Grand Festive Sale -
              <span className="text-yellow-300 font-semibold ml-2">
                Up to 30% Off on Gold + Free Making Charges on Diamond Orders!
              </span>
            </span>

            <span className="mx-10 font-medium">
              💎 New Bridal Collection Available Now!
            </span>

            <span className="mx-10 font-medium">
              ✨ Exchange Old Gold & Get Best Value Today!
            </span>
          </div>

          {/* Duplicate for Seamless Nonstop */}
          <div className="marquee-content">
            <span className="mx-10 font-medium">
              🎉 Grand Festive Sale -
              <span className="text-yellow-300 font-semibold ml-2">
                Up to 30% Off on Gold + Free Making Charges on Diamond Orders!
              </span>
            </span>

            <span className="mx-10 font-medium">
              💎 New Bridal Collection Available Now!
            </span>

            <span className="mx-10 font-medium">
              ✨ Exchange Old Gold & Get Best Value Today!
            </span>
          </div>

        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={() => window.open(whatsappChannel, "_blank")}
        className="mr-4 ml-4 flex items-center gap-2 bg-green-500 px-4 py-1 rounded-full hover:scale-105 duration-300 shrink-0"
      >
        <MessageCircle size={16} />
        Join WhatsApp
      </button>

      {/* Infinite Smooth Animation */}
      <style>
        {`
          .marquee-wrapper {
            display: flex;
            width: max-content;
            animation: moveForever 20s linear infinite;
          }

          .marquee-content {
            display: flex;
            flex-shrink: 0;
            white-space: nowrap;
          }

          @keyframes moveForever {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </div>
  );
};

export default TopOfferBar;