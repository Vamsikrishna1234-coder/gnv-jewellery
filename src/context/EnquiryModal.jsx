import React from "react";
import { FaTimes } from "react-icons/fa";

const EnquiryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">

      <div className="bg-white w-[400px] p-6 rounded-xl relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Enquiry Form
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="tel"
            placeholder="Phone"
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Message"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-[#c28b00] text-white py-2 rounded"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
};

export default EnquiryModal;