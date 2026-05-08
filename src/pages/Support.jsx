import React, { useState } from "react";
import img1 from "../assets/images/contact-gnv.jpg"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log(form);
  };

  return (
    <section className="bg-[#f5efe2] min-h-screen">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-[#0b2d1f] to-[#123d2b] text-center py-16 text-white">
        <h1 className="text-5xl font-serif text-[#c28b00]">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-300">
          Where every jewel tells a story of care and craftsmanship.
        </p>
      </div>

      {/* ================= BIG CARD ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white border border-[#e6d8c5] rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="h-[400px] md:h-auto">
            <img
              src={img1}
              className="w-full h-full object-cover"
              alt="Jewellery"
            />
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-5"
          >

            <h2 className="text-2xl font-serif text-[#c28b00] mb-4">
              Get in Touch
            </h2>

            {/* NAME */}
            <div>
              <label className="text-sm">Full Name *</label>
              <input
                name="name"
                placeholder="Enter your name"
                className="w-full border p-3 rounded-lg mt-1 focus:outline-none focus:border-[#c28b00]"
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm">Email *</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border p-3 rounded-lg mt-1 focus:outline-none focus:border-[#c28b00]"
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm">Phone *</label>
              <input
                name="phone"
                placeholder="Enter phone number"
                className="w-full border p-3 rounded-lg mt-1 focus:outline-none focus:border-[#c28b00]"
                onChange={handleChange}
                required
              />
            </div>

            {/* ENQUIRY TYPE */}
            <div>
              <label className="text-sm">Enquiry Type *</label>
              <select
                name="type"
                className="w-full border p-3 rounded-lg mt-1 focus:outline-none focus:border-[#c28b00]"
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="enquiry">Casual Enquiry</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="text-sm">Subject *</label>
              <input
                name="subject"
                placeholder="Subject"
                className="w-full border p-3 rounded-lg mt-1 focus:outline-none focus:border-[#c28b00]"
                onChange={handleChange}
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm">Message *</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full border p-3 rounded-lg mt-1 focus:outline-none focus:border-[#c28b00]"
                onChange={handleChange}
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#c28b00] text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;