// src/pages/Contact.jsx

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold text-[#c28b00]">
        Contact Us
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        We'd love to hear from you. Visit our showroom or contact us today.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-12">

        {/* Contact Info */}
        <div className="space-y-8">

          <div className="flex gap-4">
            <MapPin className="text-red-600" />
            <div>
              <h3 className="font-semibold text-xl">Store Address</h3>
              <p className="text-gray-600">
                Main Road, Rasapudipalem, Andhra Pradesh, India
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="text-red-600" />
            <div>
              <h3 className="font-semibold text-xl">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="text-red-600" />
            <div>
              <h3 className="font-semibold text-xl">Email</h3>
              <p className="text-gray-600">info@gnvjewellers.com</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-[#fff8dc] p-8 rounded-2xl shadow-sm">

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-3 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border px-4 py-3 rounded-lg outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border px-4 py-3 rounded-lg outline-none"
            ></textarea>

            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
              Send Message
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;