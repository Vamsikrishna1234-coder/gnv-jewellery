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