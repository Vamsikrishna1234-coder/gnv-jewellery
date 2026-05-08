// src/pages/Schemes.jsx

import React from "react";
import { Crown, Phone } from "lucide-react";

const silverPlans = [
  {
    sno: 1,
    amount: "₹10,000",
    rate: "₹518.18",
  },
  {
    sno: 2,
    amount: "₹10,000",
    rate: "₹518.18",
  },
  {
    sno: 3,
    amount: "₹10,000",
    rate: "₹518.18",
  },
  {
    sno: 4,
    amount: "₹10,000",
    rate: "₹518.18",
  },
  {
    sno: 5,
    amount: "₹10,000",
    rate: "₹518.18",
  },
  {
    sno: 6,
    amount: "₹10,000",
    rate: "₹518.18",
  }
];

const Schemes = () => {

  const openWhatsapp = (plan) => {
    const msg = encodeURIComponent(
      `Hello GNV Jewellers, I want to know more about the ${plan}.`
    );

    window.open(
      `https://wa.me/916357123123?text=${msg}`,
      "_blank"
    );
  };

  return (
    <section className="bg-[#f9f5ef] min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}

      <div className="relative bg-[#140d07] text-white">

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#c28b00]/20 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#c28b00]/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 text-center">

          <div className="inline-flex items-center gap-2 border border-[#c28b00]/30 px-4 py-2 rounded-full text-[#c28b00] text-xs tracking-[4px] uppercase">
            <Crown size={14} />
            GNV Jewellery Schemes
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mt-8">
            Smart Jewellery
            <span className="text-[#c28b00]"> Savings Plans</span>
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-3xl mx-auto">
            Flexible jewellery savings schemes crafted for gold,
            silver, and diamond jewellery purchases with premium benefits.
          </p>

        </div>

      </div>

      {/* ================= WEIGHT BASED PLANS ================= */}

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* HEADING */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#c28b00] text-xs">
            GNV Jewellery Schemes
          </p>

          <h2 className="text-5xl md:text-6xl font-serif mt-4 text-[#1a1a1a]">
            Weight Based Plans
          </h2>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto leading-8">
            Smart jewellery savings plans with exclusive benefits on gold,
            silver, and diamond jewellery purchases.
          </p>

        </div>

        {/* ================= 3 CARDS ================= */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= GOLD PLAN ================= */}
          <div className="bg-[#C28B00] text-white rounded-[35px] p-8 shadow-2xl hover:-translate-y-2 transition duration-300 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c28b00]/20 blur-[90px]" />

            <div className="relative z-10">

              <span className="bg-[#c28b00] text-black text-xs px-4 py-2 rounded-full uppercase tracking-[3px] font-semibold">
                Gold Plan
              </span>

              <h3 className="text-4xl font-serif mt-8">
                Gold Savings
              </h3>

              <p className="text-white-300 mt-6 leading-8">
                Monthly gold purchase plan with premium jewellery benefits.
              </p>

              {/* DETAILS */}
              <div className="space-y-4 mt-10">

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Tenure</span>
                  <strong>11 Months</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Available From</span>
                  <strong>₹1,000 - ₹15,000</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>No GST</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>No Making Charges</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between">
                  <span>No Wastage</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => openWhatsapp("Gold Savings Plan")}
                className="mt-10 w-full bg-white  transition py-4 rounded-full font-semibold text-black flex items-center justify-center gap-3"
              >
                <Phone size={18} />
                Enquire on WhatsApp
              </button>

            </div>

          </div>

          {/* ================= SILVER PLAN ================= */}
          <div className="bg-[#111111] text-white rounded-[35px] p-8 shadow-2xl hover:-translate-y-2 transition duration-300 relative overflow-hidden">

            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 blur-[90px]" />

            <div className="relative z-10">

              <span className="border border-white/20 text-white text-xs px-4 py-2 rounded-full uppercase tracking-[3px]">
                Silver Plan
              </span>

              <h3 className="text-4xl font-serif mt-8">
                Silver Savings
              </h3>

              <p className="text-gray-400 mt-6 leading-8">
                Flexible silver purchase scheme with attractive savings benefits.
              </p>

              {/* DETAILS */}
              <div className="space-y-4 mt-10">

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Tenure</span>
                  <strong>11 Months</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Available From</span>
                  <strong>₹1,000 - ₹15,000</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>No GST</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>No Making Charges</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between">
                  <span>No Wastage</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => openWhatsapp("Silver Savings Plan")}
                className="mt-10 w-full border border-[#c28b00] text-white hover:bg-[#c28b00] hover:text-white transition py-4 rounded-full font-semibold flex items-center justify-center gap-3"
              >
                <Phone size={18} />
                Enquire on WhatsApp
              </button>

            </div>

          </div>

          {/* ================= DIAMOND PLAN ================= */}
          <div className="bg-[#042C5F] border border-[#efe2ca] rounded-[35px] p-8 shadow-2xl hover:-translate-y-2 transition duration-300 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c28b00]/10 blur-[90px]" />

            <div className="relative z-10">

              <span className="bg-[#111111] text-white text-xs px-4 py-2 rounded-full uppercase tracking-[3px]">
                Diamond Plan
              </span>

              <h3 className="text-4xl font-serif mt-8 text-white">
                Diamond Savings
              </h3>

              <p className="text-white mt-6 leading-8">
                Premium diamond jewellery savings plan for luxury purchases.
              </p>

              {/* DETAILS */}
              <div className="space-y-4 mt-10 text-white">

                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span>Tenure</span>
                  <strong>11 Months</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span>Available From</span>
                  <strong>₹1,000 - ₹15,000</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span>No GST</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span>No Making Charges</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between">
                  <span>No Wastage</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => openWhatsapp("Diamond Savings Plan")}
                className="mt-10 w-full bg-white hover:bg-white transition py-4 rounded-full font-semibold text-black flex items-center justify-center gap-3"
              >
                <Phone size={18} />
                Enquire on WhatsApp
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ================= SILVER PURCHASING PLAN ================= */}

      <div className="max-w-5xl mx-auto px-6 pb-28">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[5px] text-[#c28b00] text-xs">
            Silver Purchasing Plan
          </p>

          <h2 className="text-5xl font-serif mt-4 text-[#1a1a1a]">
            Silver Savings Scheme
          </h2>

        </div>

        <div className="bg-white rounded-[35px] overflow-hidden border border-[#efe2ca] shadow-2xl">

          {/* HEADER */}
          <div className="grid grid-cols-3 bg-[#c28b00] text-white uppercase tracking-[3px] text-sm">

            <div className="p-5 text-center">
              S No
            </div>

            <div className="p-5 text-center">
              Monthly Amount
            </div>

            <div className="p-5 text-center">
              Silver Rate
            </div>

          </div>

          {/* ROWS */}
          {silverPlans.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-b last:border-none hover:bg-[#fffaf1] transition"
            >

              <div className="p-6 text-center font-semibold">
                {item.sno}
              </div>

              <div className="p-6 text-center font-semibold text-[#1a1a1a]">
                {item.amount}
              </div>

              <div className="p-6 text-center text-[#c28b00] font-bold">
                {item.rate}
              </div>

            </div>
          ))}

          {/* FOOTER */}
          <div className="p-8 bg-[#faf5ec] border-t border-[#efe2ca]">

            <div className="grid md:grid-cols-3 gap-6 mb-8">

              <div className="bg-white rounded-2xl p-5 border border-[#efe2ca]">
                <p className="text-sm text-gray-500">
                  Total Savings
                </p>

                <h3 className="text-3xl font-serif mt-2 text-[#1a1a1a]">
                  ₹60,000
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#efe2ca]">
                <p className="text-sm text-gray-500">
                  Bonus Amount
                </p>

                <h3 className="text-3xl font-serif mt-2 text-[#c28b00]">
                  ₹10,000
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#efe2ca]">
                <p className="text-sm text-gray-500">
                  Maturity Value
                </p>

                <h3 className="text-3xl font-serif mt-2 text-[#7b1f12]">
                  ₹70,000
                </h3>
              </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-5">

              <div>
                <h4 className="text-2xl font-serif text-[#1a1a1a]">
                  Interested in Silver Purchase Plan?
                </h4>

                <p className="text-gray-500 mt-2">
                  Contact GNV Jewellers to know more about silver savings benefits.
                </p>
              </div>

              <button
                onClick={() => openWhatsapp("Silver Purchasing Plan")}
                className="bg-[#d39b00]  transition px-8 py-4 rounded-full font-semibold text-black flex items-center gap-3"
              >
                <Phone size={18} />
                Enquire Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Schemes;