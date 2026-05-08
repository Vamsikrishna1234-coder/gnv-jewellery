import React, { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

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
    <div className="fixed bottom-9 right-5 z-[9999] flex flex-col items-end gap-3">

      {/* Chat Popup Message */}
      {showMessage && (
        <div className="relative bg-white shadow-2xl rounded-2xl px-5 py-6 w-[280px] border border-gray-200 animate-fadeIn">

          {/* Close Button */}
          <button
            onClick={() => setShowMessage(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            <X size={16} />
          </button>

          <p className="text-sm text-[#cc3b40] mb-1">
            GNV JEWELLERS
          </p>

          <h4 className="font-semibold text-gray-800 text-[15px] leading-6">
            🙏 Namaste sir/madam, Chat with Our experts for more Designs!
          </h4>

          <p className="text-sm text-black-500 mt-1">
            Our team is online now.chat with us..!
          </p>
          
           

        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:scale-110 duration-300 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={32} color="#fff" />
      </a>

      {/* Custom Animation */}
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