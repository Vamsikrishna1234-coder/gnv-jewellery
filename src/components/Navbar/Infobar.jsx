import React from "react";
import { MapPin, CalendarDays, Phone } from "lucide-react";

const InfoBar = () => {
  return (
    <div className="bg-[#c28b00] text-white text-[13px] border-b">
      
      {/* Center Container Same Width as Navbar */}
      <div className="max-w-[1400px] mx-auto px-6 py-2 flex justify-between items-center">

        {/* Left Side Gold Rate */}
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>

          <p className="font-semibold tracking-wide uppercase">
            Gold 22 KT/1G —
            <span className="ml-2 font-bold">₹ 14,210</span>
          </p>

          <span className="text-xs cursor-pointer">⌄</span>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-10 font-semibold uppercase tracking-wide">

          <span className="flex items-center gap-2 cursor-pointer hover:text-white-200 duration-300">
            <MapPin size={14} />
            Locate Store
          </span>

          <span className="flex items-center gap-2 cursor-pointer hover:text-white-200 duration-300">
            <CalendarDays size={14} />
            Book Visit
          </span>

          <span className="flex items-center gap-2 cursor-pointer hover:text-white-200 duration-300">
            <Phone size={14} />
            Need Help?
          </span>

        </div>

      </div>
    </div>
  );
};

export default InfoBar;