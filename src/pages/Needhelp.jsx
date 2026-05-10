// src/pages/NeedHelp.jsx

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

const NeedHelp = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");
  };

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/916357123123?text=Hello%20GNV%20Jewellers,%20I%20need%20assistance.",
      "_blank"
    );
  };

  return (
    <section className="bg-[#F5EFE3] min-h-screen">

      {/* ================= HERO ================= */}

      <div className="bg-black text-white py-24 px-6 relative overflow-hidden">

        <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-[#c28b00]/10 blur-[120px]" />

        <div className="max-w-6xl mx-auto text-center relative z-10">

          <p className="uppercase tracking-[5px] text-[#c28b00] text-xs">
            GNV Jewellers Support
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mt-6">
            Need Help?
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            Our support team is always ready to assist you with jewellery
            enquiries, savings plans, orders, and showroom guidance.
          </p>

        </div>

      </div>

      {/* ================= CONTACT DETAILS ================= */}

      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-white border border-[#efe2ca] rounded-[35px] shadow-xl overflow-hidden">

          {/* HEADER */}
          <div className="bg-black px-10 py-10 text-white">

            <p className="uppercase tracking-[4px] text-[#c28b00] text-xs">
              Customer Support
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-4">
              How Can We Help?
            </h2>

            <p className="text-gray-300 mt-5 leading-8 max-w-3xl">
              Reach out to GNV Jewellers for jewellery enquiries,
              savings plans, showroom support, online shopping assistance,
              and customer care.
            </p>

          </div>

          {/* DETAILS */}
          <div className="p-10">

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#eee] pb-6 gap-3">

                <h3 className="font-semibold text-[#1a1a1a] text-lg">
                  Email :
                </h3>

                <a
                  href="mailto:info@gnjewellers.co.in"
                  className="text-[#c28b00] hover:underline"
                >
                  info@gnvjewellers.in
                </a>

              </div>

              {/* CORPORATE OFFICE */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#eee] pb-6 gap-3">

                <h3 className="font-semibold text-[#1a1a1a] text-lg">
                  Corporate Office :
                </h3>

                <a
                  href="tel:+916357123123"
                  className="text-[#7b1f12] font-medium"
                >
                  +91 6357 123 123
                </a>

              </div>

              {/* ONLINE SHOPPING */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#eee] pb-6 gap-3">

                <h3 className="font-semibold text-[#1a1a1a] text-lg">
                  Online Shopping :
                </h3>

                <div className="flex flex-wrap items-center gap-3">

                  <a
                    href="tel:+916357123123"
                    className="text-[#7b1f12] font-medium"
                  >
                    +91 6357 123 123
                  </a>

                  <span className="text-gray-400">/</span>

                  <button
                    onClick={openWhatsapp}
                    className="text-green-600 font-medium"
                  >
                    WhatsApp Us
                  </button>

                </div>

              </div>

              {/* PURCHASE PLAN */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#eee] pb-6 gap-3">

                <h3 className="font-semibold text-[#1a1a1a] text-lg">
                  Jewellery Purchase Plan :
                </h3>

                <div className="flex flex-wrap items-center gap-3">

                  <a
                    href="tel:+916357123123"
                    className="text-[#7b1f12] font-medium"
                  >
                    +91 6357 123 123
                  </a>

                  <span className="text-gray-400">/</span>

                  <span className="text-[#c28b00] font-medium">
                    Savings Plan
                  </span>

                </div>

              </div>

              {/* TOLL FREE */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">

                <h3 className="font-semibold text-[#1a1a1a] text-lg">
                  Tollfree Number :
                </h3>

                <div className="flex flex-wrap items-center gap-3">

                  <a
                    href="tel:+916357123123"
                    className="text-[#7b1f12] font-medium"
                  >
                    +91 6357 123 123
                  </a>

                  <span className="text-gray-400">/</span>

                  <button
                    onClick={openWhatsapp}
                    className="text-green-600 font-medium"
                  >
                    WhatsApp Us
                  </button>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="tel:+916357 123 123"
                className="border border-black px-7 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition"
              >
                Call Us
              </a>

              <button
                onClick={openWhatsapp}
                className="bg-[#25D366] text-white px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                WhatsApp Us
              </button>

              <a
                href="mailto:info@gnvjewellers.in"
                className="border border-[#c28b00] text-[#c28b00] px-7 py-4 rounded-full font-semibold hover:bg-[#c28b00] hover:text-black transition"
              >
                Email Us
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* ================= CONTACT FORM ================= */}

      <div className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white border border-[#efe2ca] rounded-[35px] shadow-xl p-10 md:p-14">

          <p className="uppercase tracking-[4px] text-[#c28b00] text-xs">
            Send Message
          </p>

          <h2 className="text-4xl font-serif mt-4 text-[#1a1a1a]">
            Contact Our Team
          </h2>

          <p className="text-gray-500 mt-5 leading-8">
            Have questions regarding jewellery, schemes,
            bridal collections or showroom support?
            Fill out the form below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-[#e7d8bf] rounded-2xl p-4 mt-2 focus:outline-none focus:border-[#c28b00]"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-[#e7d8bf] rounded-2xl p-4 mt-2 focus:outline-none focus:border-[#c28b00]"
                  required
                />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full border border-[#e7d8bf] rounded-2xl p-4 mt-2 focus:outline-none focus:border-[#c28b00]"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  placeholder="Jewellery Enquiry"
                  className="w-full border border-[#e7d8bf] rounded-2xl p-4 mt-2 focus:outline-none focus:border-[#c28b00]"
                />
              </div>

            </div>

            <div>
              <label className="text-sm font-medium">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                className="w-full border border-[#e7d8bf] rounded-2xl p-4 mt-2 focus:outline-none focus:border-[#c28b00]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#111111] hover:bg-black text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-3"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* ================= SHOWROOMS ================= */}

      <div className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#c28b00] text-xs">
            Visit Our Stores
          </p>

          <h2 className="text-5xl font-serif mt-4 text-[#1a1a1a]">
            Our Showrooms
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Srikakulam",
              address:
                "GT Road, Santamma Colony, Srikakulam - 532001",
              phone: "+91 7057 054 003",
            },
            {
              title: "Srikakulam Branch 2",
              address:
                "Ranasthali, Srikakulam",
              phone: "+91 9666 567 916",
            },
            {
              title: "Palasa (Kasibugga)",
              address:
                "PMR Complex, KT Road, Palasa",
              phone: "+91 7997 992 636",
            },
            {
              title: "Paralakhemundi",
              address:
                "Palace Street, Opp Boys High School, Odisha",
              phone: "+91 6357 123 123",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#efe2ca] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#faf2df] flex items-center justify-center">
                <MapPin size={24} className="text-[#c28b00]" />
              </div>

              <h3 className="text-2xl font-serif mt-8 text-[#1a1a1a]">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-5 leading-8">
                {item.address}
              </p>

              <a
                href={`tel:${item.phone}`}
                className="inline-block mt-6 text-[#7b1f12] font-semibold hover:text-[#c28b00] transition"
              >
                {item.phone}
              </a>

              <button
                onClick={openWhatsapp}
                className="mt-8 w-full border border-[#c28b00] text-[#c28b00] hover:bg-[#c28b00] hover:text-black transition py-3 rounded-full font-semibold"
              >
                Contact Showroom
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default NeedHelp;