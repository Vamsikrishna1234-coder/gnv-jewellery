import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const WhatsAppChat = () => {

  const [showMessage, setShowMessage] = useState(false);

  const whatsappLink =
    "https://wa.me/916357123123?text=Hi%20I%20want%20more%20information";

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div
      className="
        fixed
        bottom-9
        right-5

        z-[9999]

        flex
        flex-col
        items-end

        gap-3
      "
    >

      {/* MESSAGE BOX */}
      {showMessage && (
        <div
          className="
            animate-fadeIn

            bg-white

            text-black

            px-5
            py-4

            rounded-2xl

            shadow-2xl

            max-w-[260px]

            relative
          "
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowMessage(false)}
            className="
              absolute

              top-3
              right-3

              text-black/60

              hover:text-black

              transition-all
              duration-300
            "
          >
            <X size={18} />
          </button>

          {/* SMALL ARROW */}
          <div
            className="
              absolute

              bottom-[-8px]
              right-6

              w-4
              h-4

              bg-white

              rotate-45
            "
          />

          {/* MESSAGE */}
          <p className="text-sm leading-relaxed pr-5">
            👋 Hi there! <br />
            Need help for More Designs and Information? Chat with us on WhatsApp.
          </p>

        </div>
      )}

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[#25D366]

          hover:scale-110

          duration-300

          w-16
          h-16

          rounded-full

          flex
          items-center
          justify-center

          shadow-[0_10px_40px_rgba(37,211,102,0.45)]

          relative

          group
        "
      >

        {/* PULSE EFFECT */}
        <span
          className="
            absolute

            inset-0

            rounded-full

            bg-[#25D366]

            animate-ping

            opacity-30
          "
        />

        {/* ICON */}
        <FaWhatsapp
          size={34}
          color="#fff"
          className="relative z-10"
        />

      </a>

      {/* CUSTOM ANIMATION */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeInUp 0.5s ease;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
};

export default WhatsAppChat;