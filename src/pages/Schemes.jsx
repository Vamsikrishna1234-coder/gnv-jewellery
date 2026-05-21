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

      <div className="relative bg-[#140d07] text-white overflow-hidden">

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#c28b00]/20 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#c28b00]/10 blur-[140px]" />

        <div
          className="
            max-w-7xl
            mx-auto

            px-4
            sm:px-6

            py-16
            sm:py-20
            md:py-28

            relative
            z-10

            text-center
          "
        >

          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2

              border
              border-[#c28b00]/30

              px-4
              py-2

              rounded-full

              text-[#c28b00]

              text-[10px]
              sm:text-xs

              tracking-[3px]
              sm:tracking-[4px]

              uppercase
            "
          >
            <Crown size={14} />
            GNV Jewellery Schemes
          </div>

          {/* HEADING */}
          <h1
            className="
              font-serif
              leading-tight

              mt-6
              sm:mt-8

              text-[36px]
              sm:text-[52px]
              md:text-7xl
            "
          >
            Smart Jewellery
            <span className="text-[#c28b00]">
              {" "}Savings Plans
            </span>
          </h1>

          {/* TEXT */}
          <p
            className="
              text-gray-400

              mt-6
              sm:mt-8

              text-[14px]
              sm:text-base
              md:text-lg

              leading-7
              sm:leading-8

              max-w-3xl
              mx-auto
            "
          >
            Flexible jewellery savings schemes crafted
            for gold, silver, and diamond jewellery
            purchases with premium benefits.
          </p>

          <button className="
                  mt-8
                  sm:mt-10

                  w-[200px]

                  bg-[#c28b00]

                  py-3
                  sm:py-3

                  rounded-[30px]

                  font-semibold

                  text-white

                  align items-center
                  justify-center
                  gap-3

                  text-sm
                  sm:text-base">

                <a href="https://jewellers.gnvjewellers.com/" target="_blank">
                    Start Saving Now
                </a>
          </button>

        </div>

      </div>

      {/* ================= WEIGHT BASED PLANS ================= */}

      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6

          py-14
          sm:py-18
          md:py-24
        "
      >

        {/* HEADING */}
        <div className="text-center mb-12 md:mb-16">

          <p
            className="
              uppercase

              tracking-[4px]
              sm:tracking-[5px]

              text-[#c28b00]

              text-[10px]
              sm:text-xs
            "
          >
            GNV Jewellery Schemes
          </p>

          <h2
            className="
              font-serif

              mt-4

              text-[34px]
              sm:text-[48px]
              md:text-6xl

              text-[#1a1a1a]
            "
          >
            Weight Based Plans
          </h2>

          <p
            className="
              text-gray-500

              mt-5
              sm:mt-6

              max-w-3xl
              mx-auto

              leading-7
              sm:leading-8

              text-[14px]
              sm:text-base
            "
          >
            Smart jewellery savings plans with
            exclusive benefits on gold, silver,
            and diamond jewellery purchases.
          </p>

        </div>

        {/* ================= 3 CARDS ================= */}

        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-6
            md:gap-8
          "
        >

          {/* ================= GOLD PLAN ================= */}
          <div
            className="
              bg-[#C28B00]
              text-white

              rounded-[28px]
              md:rounded-[35px]

              p-6
              sm:p-8

              shadow-2xl

              hover:-translate-y-2

              transition
              duration-300

              relative
              overflow-hidden
            "
          >

            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c28b00]/20 blur-[90px]" />

            <div className="relative z-10">

              <span
                className="
                  bg-[#c28b00]
                  text-black

                  text-[10px]
                  sm:text-xs

                  px-4
                  py-2

                  rounded-full

                  uppercase

                  tracking-[2px]
                  sm:tracking-[3px]

                  font-semibold
                "
              >
                Gold Plan
              </span>

              <h3
                className="
                  font-serif

                  mt-6
                  sm:mt-8

                  text-[32px]
                  sm:text-4xl
                "
              >
                Gold Savings
              </h3>

              <p
                className="
                  mt-5
                  sm:mt-6

                  leading-7
                  sm:leading-8

                  text-[14px]
                  sm:text-base
                "
              >
                Monthly gold purchase plan with
                premium jewellery benefits.
              </p>

              {/* DETAILS */}
              <div className="space-y-4 mt-8 sm:mt-10">

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>Tenure</span>
                  <strong>11 Months</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>Available From</span>
                  <strong>₹1,000 - ₹15,000</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>No GST</span>
                  <strong className="text-black">✓</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>No Making Charges</span>
                  <strong className="text-black">✓</strong>
                </div>

                <div className="flex justify-between text-sm sm:text-base">
                  <span>No Wastage</span>
                  <strong className="text-black">✓</strong>
                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => openWhatsapp("Gold Savings Plan")}
                className="
                  mt-8
                  sm:mt-10

                  w-full

                  bg-white

                  py-3
                  sm:py-4

                  rounded-full

                  font-semibold

                  text-black

                  flex
                  items-center
                  justify-center
                  gap-3

                  text-sm
                  sm:text-base
                "
              >
                <Phone size={18} />
                Enquire on WhatsApp
              </button>

            </div>

          </div>

          {/* ================= SILVER PLAN ================= */}
          <div
            className="
              bg-[#111111]
              text-white

              rounded-[28px]
              md:rounded-[35px]

              p-6
              sm:p-8

              shadow-2xl

              hover:-translate-y-2

              transition
              duration-300

              relative
              overflow-hidden
            "
          >

            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 blur-[90px]" />

            <div className="relative z-10">

              <span
                className="
                  border
                  border-white/20

                  text-white

                  text-[10px]
                  sm:text-xs

                  px-4
                  py-2

                  rounded-full

                  uppercase

                  tracking-[2px]
                  sm:tracking-[3px]
                "
              >
                Silver Plan
              </span>

              <h3
                className="
                  font-serif

                  mt-6
                  sm:mt-8

                  text-[32px]
                  sm:text-4xl
                "
              >
                Silver Savings
              </h3>

              <p
                className="
                  text-gray-400

                  mt-5
                  sm:mt-6

                  leading-7
                  sm:leading-8

                  text-[14px]
                  sm:text-base
                "
              >
                Flexible silver purchase scheme with
                attractive savings benefits.
              </p>

              {/* DETAILS */}
              <div className="space-y-4 mt-8 sm:mt-10">

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>Tenure</span>
                  <strong>11 Months</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>Available From</span>
                  <strong>₹1,000 - ₹15,000</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>No GST</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                  <span>No Making Charges</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between text-sm sm:text-base">
                  <span>No Wastage</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => openWhatsapp("Silver Savings Plan")}
                className="
                  mt-8
                  sm:mt-10

                  w-full

                  border
                  border-[#c28b00]

                  text-white

                  py-3
                  sm:py-4

                  rounded-full

                  font-semibold

                  flex
                  items-center
                  justify-center
                  gap-3

                  text-sm
                  sm:text-base
                "
              >
                <Phone size={18} />
                Enquire on WhatsApp
              </button>

            </div>

          </div>

          {/* ================= DIAMOND PLAN ================= */}
          <div
            className="
              bg-[#042C5F]

              border
              border-[#efe2ca]

              rounded-[28px]
              md:rounded-[35px]

              p-6
              sm:p-8

              shadow-2xl

              hover:-translate-y-2

              transition
              duration-300

              relative
              overflow-hidden
            "
          >

            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c28b00]/10 blur-[90px]" />

            <div className="relative z-10">

              <span
                className="
                  bg-[#111111]
                  text-white

                  text-[10px]
                  sm:text-xs

                  px-4
                  py-2

                  rounded-full

                  uppercase

                  tracking-[2px]
                  sm:tracking-[3px]
                "
              >
                Diamond Plan
              </span>

              <h3
                className="
                  font-serif
                  text-white

                  mt-6
                  sm:mt-8

                  text-[32px]
                  sm:text-4xl
                "
              >
                Diamond Savings
              </h3>

              <p
                className="
                  text-white

                  mt-5
                  sm:mt-6

                  leading-7
                  sm:leading-8

                  text-[14px]
                  sm:text-base
                "
              >
                Premium diamond jewellery savings
                plan for luxury purchases.
              </p>

              {/* DETAILS */}
              <div className="space-y-4 mt-8 sm:mt-10 text-white">

                <div className="flex justify-between border-b border-gray-200 pb-3 text-sm sm:text-base">
                  <span>Tenure</span>
                  <strong>11 Months</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-3 text-sm sm:text-base">
                  <span>Available From</span>
                  <strong>₹1,000 - ₹15,000</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-3 text-sm sm:text-base">
                  <span>No GST</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-3 text-sm sm:text-base">
                  <span>No Making Charges</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

                <div className="flex justify-between text-sm sm:text-base">
                  <span>No Wastage</span>
                  <strong className="text-[#c28b00]">✓</strong>
                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => openWhatsapp("Diamond Savings Plan")}
                className="
                  mt-8
                  sm:mt-10

                  w-full

                  bg-white

                  py-3
                  sm:py-4

                  rounded-full

                  font-semibold

                  text-black

                  flex
                  items-center
                  justify-center
                  gap-3

                  text-sm
                  sm:text-base
                "
              >
                <Phone size={18} />
                Enquire on WhatsApp
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ================= SILVER PURCHASING PLAN ================= */}

      <div
        className="
          max-w-5xl
          mx-auto

          px-4
          sm:px-6

          pb-16
          sm:pb-20
          md:pb-28
        "
      >

        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12">

          <p
            className="
              uppercase

              tracking-[4px]
              sm:tracking-[5px]

              text-[#c28b00]

              text-[10px]
              sm:text-xs
            "
          >
            Silver Purchasing Plan
          </p>

          <h2
            className="
              font-serif

              mt-4

              text-[32px]
              sm:text-[44px]
              md:text-5xl

              text-[#1a1a1a]
            "
          >
            Silver Savings Scheme
          </h2>

        </div>

        {/* TABLE CARD */}
        <div
          className="
            bg-white

            rounded-[24px]
            md:rounded-[35px]

            overflow-hidden

            border
            border-[#efe2ca]

            shadow-2xl
          "
        >

          {/* HEADER */}
          <div
            className="
              grid
              grid-cols-3

              bg-[#c28b00]

              text-white

              uppercase

              tracking-[2px]
              sm:tracking-[3px]

              text-[11px]
              sm:text-sm
            "
          >

            <div className="p-3 sm:p-5 text-center">
              S No
            </div>

            <div className="p-3 sm:p-5 text-center">
              Monthly Amount
            </div>

            <div className="p-3 sm:p-5 text-center">
              Silver Rate
            </div>

          </div>

          {/* ROWS */}
          {silverPlans.map((item, i) => (

            <div
              key={i}
              className="
                grid
                grid-cols-3

                border-b
                last:border-none

                hover:bg-[#fffaf1]

                transition
              "
            >

              <div
                className="
                  p-4
                  sm:p-6

                  text-center

                  font-semibold

                  text-[13px]
                  sm:text-base
                "
              >
                {item.sno}
              </div>

              <div
                className="
                  p-4
                  sm:p-6

                  text-center

                  font-semibold

                  text-[#1a1a1a]

                  text-[13px]
                  sm:text-base
                "
              >
                {item.amount}
              </div>

              <div
                className="
                  p-4
                  sm:p-6

                  text-center

                  text-[#c28b00]

                  font-bold

                  text-[13px]
                  sm:text-base
                "
              >
                {item.rate}
              </div>

            </div>

          ))}

          {/* FOOTER */}
          <div
            className="
              p-5
              sm:p-8

              bg-[#faf5ec]

              border-t
              border-[#efe2ca]
            "
          >

            {/* STATS */}
            <div
              className="
                grid

                grid-cols-1
                md:grid-cols-3

                gap-4
                sm:gap-6

                mb-8
              "
            >

              {/* TOTAL */}
              <div
                className="
                  bg-white

                  rounded-2xl

                  p-5

                  border
                  border-[#efe2ca]
                "
              >

                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Total Savings
                </p>

                <h3
                  className="
                    font-serif

                    mt-2

                    text-[28px]
                    sm:text-3xl

                    text-[#1a1a1a]
                  "
                >
                  ₹60,000
                </h3>

              </div>

              {/* BONUS */}
              <div
                className="
                  bg-white

                  rounded-2xl

                  p-5

                  border
                  border-[#efe2ca]
                "
              >

                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Bonus Amount
                </p>

                <h3
                  className="
                    font-serif

                    mt-2

                    text-[28px]
                    sm:text-3xl

                    text-[#c28b00]
                  "
                >
                  ₹10,000
                </h3>

              </div>

              {/* MATURITY */}
              <div
                className="
                  bg-white

                  rounded-2xl

                  p-5

                  border
                  border-[#efe2ca]
                "
              >

                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Maturity Value
                </p>

                <h3
                  className="
                    font-serif

                    mt-2

                    text-[28px]
                    sm:text-3xl

                    text-[#7b1f12]
                  "
                >
                  ₹70,000
                </h3>

              </div>

            </div>

            {/* CTA */}
            <div
              className="
                flex
                flex-col
                md:flex-row

                justify-between
                items-center

                gap-5
              "
            >

              {/* LEFT */}
              <div className="text-center md:text-left">

                <h4
                  className="
                    font-serif

                    text-[28px]
                    sm:text-2xl

                    text-[#1a1a1a]
                  "
                >
                  Interested in Silver Purchase Plan?
                </h4>

                <p
                  className="
                    text-gray-500

                    mt-2

                    text-[14px]
                    sm:text-base

                    leading-7
                  "
                >
                  Contact GNV Jewellers to know more
                  about silver savings benefits.
                </p>

              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  openWhatsapp("Silver Purchasing Plan")
                }
                className="
                  bg-[#d39b00]

                  px-6
                  sm:px-8

                  py-3
                  sm:py-4

                  rounded-full

                  font-semibold

                  text-black

                  flex
                  items-center
                  gap-3

                  text-sm
                  sm:text-base

                  whitespace-nowrap
                "
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