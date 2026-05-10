import React, { useState } from "react";
import { MapPin, CalendarDays, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InfoBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#c28b00] text-white text-[13px] border-b relative overflow-visible z-[9999]">

      <div
        className="
          max-w-[1400px]
          mx-auto
          px-6
          py-2
          flex
          justify-between
          items-center

          max-[640px]:px-2
          max-[640px]:py-2
          max-[640px]:gap-2
        "
      >

        {/* ================= GOLD RATE ================= */}
        <div className="relative shrink-0">

          <div
            onClick={() => setOpen(!open)}
            className="
              flex items-center gap-3 cursor-pointer
              border border-white
              px-3 py-1
              rounded-md
              bg-[#CC3b40]
              transition

              max-[640px]:gap-1
              max-[640px]:px-2
              max-[640px]:py-[5px]
            "
          >
            <span className="w-2 h-2 rounded-full bg-white max-[640px]:w-[6px] max-[640px]:h-[6px]"></span>

            <p
              className="
                font-semibold uppercase tracking-wide

                max-[640px]:text-[9px]
                max-[640px]:whitespace-nowrap
              "
            >
              Today's Gold Rate
            </p>

            <span className="text-xs ml-0 max-[640px]:text-[9px]">
              ⌄
            </span>
          </div>

          {/* 🔽 DROPDOWN */}
          {open && (
            <div
              className="
                absolute top-10 left-0
                w-[260px]
                bg-white text-black
                rounded-md shadow-2xl
                z-[99999]

                max-[640px]:w-[220px]
              "
            >

              {[
                { label: "GOLD 24 KT/1g", price: "₹ 14,929" },
                { label: "GOLD 22 KT/1g", price: "₹ 13,675" },
                { label: "GOLD 18 KT/1g", price: "₹ 11,197" },
                { label: "SILVER 1 KG", price: "₹ 89,500" },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center gap-3
                    px-4 py-2
                    hover:bg-gray-100
                    cursor-pointer
                    border-b
                    last:border-none

                    max-[640px]:gap-2
                    max-[640px]:px-2
                    max-[640px]:py-2
                  "
                >

                  {/* Coin Icon */}
                  <div className="w-6 h-6 rounded-full bg-yellow-400 max-[640px]:w-4 max-[640px]:h-4"></div>

                  <p
                    className="
                      text-sm font-medium text-[#7a1e1e]
                      flex justify-between w-full

                      max-[640px]:text-[10px]
                    "
                  >
                    {item.label}
                    <span>{item.price}</span>
                  </p>

                </div>
              ))}

            </div>
          )}

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            flex items-center gap-10
            font-semibold uppercase tracking-wide

            max-[640px]:gap-3
          "
        >

          {/* LOCATE STORE */}
          <span
            onClick={() => navigate("/locate-store")}
            className="
              flex items-center gap-2
              cursor-pointer
              hover:text-yellow-200

              max-[640px]:gap-1
              max-[640px]:text-[9px]
              max-[640px]:whitespace-nowrap
            "
          >
            <MapPin size={14} className="max-[640px]:w-[10px] max-[640px]:h-[10px]" />
            Locate Store
          </span>

          {/* SCHEMES */}
          <span
            onClick={() => navigate("/schemes")}
            className="
              flex items-center gap-2
              cursor-pointer
              hover:text-yellow-200
              duration-300

              max-[640px]:gap-1
              max-[640px]:text-[9px]
              max-[640px]:whitespace-nowrap
            "
          >
            <CalendarDays size={14} className="max-[640px]:w-[10px] max-[640px]:h-[10px]" />
            Schemes
          </span>

          {/* NEED HELP */}
          <span
            onClick={() => navigate("/need-help")}
            className="
              flex items-center gap-2
              cursor-pointer
              hover:text-yellow-200
              duration-300

              max-[640px]:gap-1
              max-[640px]:text-[9px]
              max-[640px]:whitespace-nowrap
            "
          >
            <Phone size={14} className="max-[640px]:w-[10px] max-[640px]:h-[10px]" />
            Need Help?
          </span>

        </div>

      </div>
    </div>
  );
};

export default InfoBar;