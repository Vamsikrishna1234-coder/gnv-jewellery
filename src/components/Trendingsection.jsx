import { useState } from "react";
import img1 from "../assets/images/trend1.jpeg";
import img2 from "../assets/images/trend2.png";
import img3 from "../assets/images/trend3.png";
import img4 from "../assets/images/trend4.png";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: "gold",
    badge: "22KT GOLD BANGLES",
    route: "/gold",
    image: img1,
  },

  {
    id: "diamond",
    badge: "DIAMOND RINGS",
    route: "/diamond",
    image: img2,
  },

  {
    id: "diamond-pendants",
    badge: "DIAMOND-NECKLACES",
    route: "/diamond",
    image: img3,
  },

  {
    id: "silver",
    badge: "999 PURE SILVER",
    route: "/silver",
    image: img4,
  },
];

function JewelryCard({ item }) {
  const [imgError, setImgError] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.route);
  };

  return (
    <div
      onClick={handleClick}
      className="
        relative
        overflow-hidden
        cursor-pointer
        group

        rounded-[18px]
        sm:rounded-[22px]

        w-full
      "
      style={{
        aspectRatio: "0.78",
        boxShadow: "0 6px 22px rgba(0,0,0,0.18)",
      }}
    >
      {/* IMAGE */}
      {!imgError ? (
        <img
          src={item.image}
          alt={item.badge}
          onError={() => setImgError(true)}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover

            transition-transform
            duration-500
            group-hover:scale-105
          "
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-300" />
      )}

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-black/10
          to-transparent
        "
      />

      {/* TITLE */}
      <div
        className="
          absolute
          top-3
          left-3

          bg-black/65
          backdrop-blur-sm

          px-3
          py-2

          rounded-full
        "
      >
        <h3
          className="
            text-white
            font-semibold

            text-[11px]
            sm:text-[13px]
            md:text-[15px]

            tracking-[0.12em]
            uppercase
            leading-tight
          "
        >
          {item.badge}
        </h3>
      </div>

      {/* BUTTON */}
      <div
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
        "
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="
            bg-red-600
            hover:bg-red-700

            text-white
            uppercase

            text-[9px]
            sm:text-[10px]

            tracking-wide
            font-semibold

            px-4
            py-2

            rounded-full

            transition-all
            duration-300

            whitespace-nowrap
          "
        >
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
}

export default function TrendingSection() {
  return (
    <section
      className="
        py-10
        sm:py-12
        md:py-16

        px-4
        sm:px-5
        md:px-6
      "
      style={{
        background:
          "linear-gradient(135deg, #f5e6c8 0%, #fdf3e3 50%, #f0e0c0 100%)",
      }}
    >
      {/* HEADING */}
      <h2
        className="
          text-center

          text-[34px]
          sm:text-[42px]
          md:text-5xl

          mb-8
          sm:mb-10
        "
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 700,
          color: "#6b2d2d",
          letterSpacing: "0.01em",
        }}
      >
        What's Trending
      </h2>

      {/* GRID */}
      <div
        className="
          grid

          grid-cols-2
          md:grid-cols-4

          gap-5
          sm:gap-6
          md:gap-7

          max-w-7xl
          mx-auto
        "
      >
        {collections.map((item) => (
          <JewelryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}