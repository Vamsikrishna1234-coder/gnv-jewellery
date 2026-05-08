import { useState } from "react";
import img1 from "../assets/images/b1.jpg";
import img2 from "../assets/images/d1.jpg";
import img3 from "../assets/images/d2.jpg";
import img4 from "../assets/images/s1.jpg";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: "gold",
    badge: "18kt Gold",
    route: "/gold",
    bg: "from-[#1a0a00] to-[#4a2800]",
    accentColor: "#e8b84b",
    image: img1,
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="28" fill="none" stroke="#e8b84b" strokeWidth="2.5"/>
        <circle cx="35" cy="35" r="18" fill="none" stroke="#e8b84b" strokeWidth="1.5"/>
        <path
          d="M35 10 L38 24 L52 20 L43 30 L55 35 L43 40 L52 50 L38 46 L35 60 L32 46 L18 50 L27 40 L15 35 L27 30 L18 20 L32 24 Z"
          fill="#e8b84b" opacity="0.8"
        />
      </svg>
    ),
  },
  {
    id: "diamond",
    badge: "Diamond rings",
    route: "/diamond",
    bg: "from-[#0d1b2a] to-[#1b2838]",
    accentColor: "#c8e6ff",
    image: img2,
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70">
        <polygon points="35,5 60,25 55,55 15,55 10,25" fill="none" stroke="#c8e6ff" strokeWidth="2"/>
        <polygon points="35,5 60,25 35,45 10,25" fill="rgba(200,230,255,0.15)" stroke="#c8e6ff" strokeWidth="1.5"/>
        <circle cx="35" cy="5" r="3" fill="#c8e6ff"/>
      </svg>
    ),
  },
  {
    id: "diamond-pendants",
    badge: "Diamond-Pendants",
    route: "/diamond",
    bg: "from-[#2d0a1e] to-[#4a1030]",
    accentColor: "#f4c8e8",
    image: img3,
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="28" r="16" fill="none" stroke="#f4c8e8" strokeWidth="2"/>
        <path d="M22 38 Q35 55 48 38" fill="none" stroke="#f4c8e8" strokeWidth="2"/>
        <path d="M35 12 L35 5 M28 15 L23 10 M42 15 L47 10" stroke="#f4c8e8" strokeWidth="1.5" strokeLinecap="round"/>
        <polygon points="35,22 38,28 35,34 32,28" fill="#f4c8e8" opacity="0.8"/>
      </svg>
    ),
  },
  {
    id: "silver",
    badge: "999 Pure Silver",
    route: "/silver",
    bg: "from-[#0a1628] to-[#142540]",
    accentColor: "#d0d8e8",
    image: img4,
    icon: (
      <svg width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="32" r="14" fill="none" stroke="#d0d8e8" strokeWidth="2.5"/>
        <circle cx="35" cy="32" r="7" fill="rgba(208,216,232,0.25)" stroke="#d0d8e8" strokeWidth="1.5"/>
        <path
          d="M35 18 L35 10 M48 22 L54 16 M52 35 L60 35 M22 22 L16 16 M18 35 L10 35"
          stroke="#d0d8e8" strokeWidth="1.5" strokeLinecap="round"
        />
      </svg>
    ),
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
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: "0.82", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
    >
      {/* Image or fallback */}
      {!imgError ? (
        <img
          src={item.image}
          alt={item.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} flex items-center justify-center`}>
          {item.icon}
        </div>
      )}

      {/* Hover zoom on image */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 bg-transparent" />

      {/* Badge */}
      {item.badge && (
        <div
          className="absolute top-3 left-3 text-[15px] font-medium tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ background: "#", color: "#ffffff" }}
        >
          {item.badge}
        </div>
      )}

      {/* Overlay gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-4"
        style={{
          
          paddingTop: "4rem",
        }}
      >
        <p className="text-[10px] tracking-[0.14em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>
          {item.category}
        </p>

        <h3
          className="font-serif text-lg font-semibold leading-snug mb-1 whitespace-pre-line"
          style={{ fontFamily: "'Georgia', serif", color: "#fff" }}
        >
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="text-[11px] mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>
            {item.subtitle}
          </p>
        )}

        {item.price && (
          <p className="text-base font-semibold mb-2" style={{ color: "#f4c542" }}>
            {item.price}
          </p>
        )}

        <button
          onClick={(e) => { e.stopPropagation(); handleClick(); }}
          className="self-start text-[10px] font-medium uppercase tracking-widest px-4 py-[5px] rounded-full transition-opacity duration-200 hover:opacity-80"
          style={{ background: "#ff0000", color: "#ffffff" }}
        >
          View Collection
        </button>
      </div>
    </div>
  );
}

export default function TrendingSection() {
  return (
    <section
      className="py-16 px-6"
      style={{
        background: "linear-gradient(135deg, #f5e6c8 0%, #fdf3e3 50%, #f0e0c0 100%)",
      }}
    >
      <h2
        className="text-center text-4xl mb-10"
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 600,
          color: "#6b2d2d",
          letterSpacing: "0.02em",
        }}
      >
        What's Trending
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {collections.map((item) => (
          <JewelryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}