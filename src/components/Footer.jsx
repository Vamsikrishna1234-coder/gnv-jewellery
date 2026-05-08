// src/components/Sections/Footer.jsx

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import logo from "../assets/images/GNV Logo.png";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className="bg-[#cc3b40] rounded-t-[40px] pt-14 pb-6 px-6 border-t border-[#d7c2a5]">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* ================= LOGO ================= */}
          <div>

            <img
              src={logo}
              alt="GNV Jewellers"
              className="h-28 object-contain mb-5"
            />

            <p className="text-white leading-7 text-sm">
              GNV Jewellers brings timeless elegance with premium gold,
              diamond, bridal and silver jewellery collections crafted
              with trust and heritage.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-3xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white">

              <li
                onClick={() => navigate("/")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Home
              </li>

              <li
                onClick={() => navigate("/gold")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Gold
              </li>

              <li
                onClick={() => navigate("/silver")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Silver
              </li>

              <li
                onClick={() => navigate("/diamond")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Diamond
              </li>

              <li
                onClick={() => navigate("/bridal")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Bridal
              </li>

            </ul>

          </div>

          {/* ================= COLLECTIONS ================= */}
          <div>

            <h3 className="text-3xl font-semibold text-white mb-6">
              Collections
            </h3>

            <ul className="space-y-4 text-white">

              <li
                onClick={() => navigate("/gold/chains")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Chains
              </li>

              <li
                onClick={() => navigate("/gold/rings")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Rings
              </li>

              <li
                onClick={() => navigate("/gold/bangles")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Bangles
              </li>

              <li
                onClick={() => navigate("/gold/necklace")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Necklaces
              </li>

              <li
                onClick={() => navigate("/gold/bracelets")}
                className="cursor-pointer hover:text-[#c28b00] transition"
              >
                Bracelets
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-3xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-white text-sm">

              <div className="flex gap-3">

                <FiMapPin className="mt-0 text-4xl text-white" />

                <p className="leading-6">
                  GNV Jewellers,
                  Raja Commercial Complex,
                  GT Road, Santamma Colony,
                  Srikakulam,
                  Andhra Pradesh - 532001
                </p>

              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-white" />
                +91 6357 123 123
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-white" />
                info@gnvjewellers.com
              </div>

            </div>

            {/* WHATSAPP BUTTON */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/916357123123?text=Hi%20GNV%20Jewellers",
                  "_blank"
                )
              }
              className="
                mt-6
                bg-green-500
                hover:bg-green-600
                text-white
                px-6
                py-3
                rounded-full
                text-sm
                transition
                shadow-md
              "
            >
              Let's talk on WhatsApp
            </button>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-[#d4bea0] mt-12 pt-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">

              <a
                href="https://www.instagram.com/gnvjewellers1967/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1111] text-white flex items-center justify-center hover:bg-[#c28b00] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/gnvjewellers"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1111] text-white flex items-center justify-center hover:bg-[#c28b00] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1111] text-white flex items-center justify-center hover:bg-[#c28b00] transition"
              >
                <FaYoutube />
              </a>


              <a
                href="https://www.linkedin.com/company/gnv-jewellers/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1111] text-white flex items-center justify-center hover:bg-[#c28b00] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/GnvJewellers"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#7a1111] text-white flex items-center justify-center hover:bg-[#c28b00] transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://wa.me/916357123123"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            

            {/* COPYRIGHT */}
            <p className="text-white text-sm text-center lg:text-right">
              © {new Date().getFullYear()} GNV Jewellers. All Rights Reserved.
            </p>


            <p className="text-white text-sm text-center lg:text-right">
              Designed & Developed by{" "}
              <a
                href="http://3kalmedia.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline"
              >
                3Kal Media
              </a>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;