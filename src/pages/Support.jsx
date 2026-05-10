import React, { useState } from "react";
import img1 from "../assets/images/contact-gnv.jpg";

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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully!");

    console.log(form);
  };

  return (
    <section className="bg-[#f5efe2] min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <div
        className="
          bg-black

          text-center

          px-4
          sm:px-6

          py-12
          sm:py-14
          md:py-16

          text-white
        "
      >

        <h1
          className="
            font-serif
            text-[#c28b00]

            text-[34px]
            sm:text-[42px]
            md:text-5xl
          "
        >
          Contact Us
        </h1>

        <p
          className="
            mt-3

            text-gray-300

            text-[14px]
            sm:text-[15px]
            md:text-base

            leading-relaxed

            max-w-2xl
            mx-auto
          "
        >
          Where every jewel tells a story of care and
          craftsmanship.
        </p>

      </div>

      {/* ================= BIG CARD ================= */}
      <div
        className="
          max-w-6xl
          mx-auto

          px-4
          sm:px-6

          py-10
          sm:py-12
          md:py-16
        "
      >

        <div
          className="
            bg-white

            border
            border-[#e6d8c5]

            rounded-[24px]
            md:rounded-3xl

            shadow-xl

            overflow-hidden

            grid
            md:grid-cols-2
          "
        >

          {/* ================= LEFT IMAGE ================= */}
          <div
            className="
              h-[250px]
              sm:h-[320px]
              md:h-auto
            "
          >

            <img
              src={img1}
              className="
                w-full
                h-full
                object-cover
              "
              alt="Jewellery"
              loading="lazy"
            />

          </div>

          {/* ================= RIGHT FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="
              p-5
              sm:p-7
              md:p-8

              space-y-4
              sm:space-y-5
            "
          >

            {/* TITLE */}
            <h2
              className="
                font-serif
                text-[#c28b00]

                text-[26px]
                sm:text-[30px]
                md:text-2xl

                mb-2
                sm:mb-4
              "
            >
              Get in Touch
            </h2>

            {/* NAME */}
            <div>

              <label
                className="
                  text-[13px]
                  sm:text-sm
                "
              >
                Full Name *
              </label>

              <input
                name="name"
                placeholder="Enter your name"
                className="
                  w-full

                  border

                  p-3

                  rounded-lg

                  mt-1

                  text-[14px]
                  sm:text-base

                  focus:outline-none
                  focus:border-[#c28b00]
                "
                onChange={handleChange}
                required
              />

            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                  text-[13px]
                  sm:text-sm
                "
              >
                Email *
              </label>

              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="
                  w-full

                  border

                  p-3

                  rounded-lg

                  mt-1

                  text-[14px]
                  sm:text-base

                  focus:outline-none
                  focus:border-[#c28b00]
                "
                onChange={handleChange}
                required
              />

            </div>

            {/* PHONE */}
            <div>

              <label
                className="
                  text-[13px]
                  sm:text-sm
                "
              >
                Phone *
              </label>

              <input
                name="phone"
                placeholder="Enter phone number"
                className="
                  w-full

                  border

                  p-3

                  rounded-lg

                  mt-1

                  text-[14px]
                  sm:text-base

                  focus:outline-none
                  focus:border-[#c28b00]
                "
                onChange={handleChange}
                required
              />

            </div>

            {/* ENQUIRY TYPE */}
            <div>

              <label
                className="
                  text-[13px]
                  sm:text-sm
                "
              >
                Enquiry Type *
              </label>

              <select
                name="type"
                className="
                  w-full

                  border

                  p-3

                  rounded-lg

                  mt-1

                  text-[14px]
                  sm:text-base

                  bg-white

                  focus:outline-none
                  focus:border-[#c28b00]
                "
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Type
                </option>

                <option value="enquiry">
                  Casual Enquiry
                </option>

                <option value="feedback">
                  Feedback
                </option>

                <option value="complaint">
                  Complaint
                </option>

                <option value="others">
                  Others
                </option>

              </select>

            </div>

            {/* SUBJECT */}
            <div>

              <label
                className="
                  text-[13px]
                  sm:text-sm
                "
              >
                Subject *
              </label>

              <input
                name="subject"
                placeholder="Subject"
                className="
                  w-full

                  border

                  p-3

                  rounded-lg

                  mt-1

                  text-[14px]
                  sm:text-base

                  focus:outline-none
                  focus:border-[#c28b00]
                "
                onChange={handleChange}
                required
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label
                className="
                  text-[13px]
                  sm:text-sm
                "
              >
                Message *
              </label>

              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="
                  w-full

                  border

                  p-3

                  rounded-lg

                  mt-1

                  text-[14px]
                  sm:text-base

                  resize-none

                  focus:outline-none
                  focus:border-[#c28b00]
                "
                onChange={handleChange}
                required
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full

                bg-[#c28b00]
                text-white

                py-3

                rounded-lg

                font-semibold

                text-[14px]
                sm:text-base

                hover:scale-[1.02]

                transition
              "
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