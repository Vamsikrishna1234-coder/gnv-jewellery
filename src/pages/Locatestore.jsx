// src/pages/LocateStore.jsx

import React, { useState } from "react";

/* IMAGES */
import img1 from "../assets/images/gnv-gtroad.webp";
import img2 from "../assets/images/gnv-2.webp";
import img3 from "../assets/images/gnv-3.jpg";
import img4 from "../assets/images/gnv-4.png";

/* DATA */
const stores = [
  {
    id: 1,
    name: "GNV Jewellers — Srikakulam",
    address: "GT Road, Santamma Colony, Srikakulam",
    fullAddress: "Srikakulam, Andhra Pradesh — 532 001",
    phone: "+91 6357123123",
    phoneRaw: "+917057054003",
    timings: "Mon–Sun  10:00 AM – 9:00 PM",
    images: [img1, img2],
    badge: "Flagship",
    link: "https://maps.app.goo.gl/wrDtPtndqYTec6Tx5",
    region: "srikakulam",
  },
  {
    id: 2,
    name: "GNV Jewellers — Srikakulam Branch 2",
    address: "Ranasthali, Srikakulam",
    fullAddress: "Srikakulam, Andhra Pradesh",
    phone: "+91 96665 67916",
    phoneRaw: null,
    timings: "Mon–Sun  10:00 AM – 9:00 PM",
    images: [img2, img1],
    badge: "Branch 2",
    link: "https://maps.app.goo.gl/UarJ7ztVkYFzq7P67",
    region: "srikakulam",
  },
  {
    id: 3,
    name: "GNV Jewellers — Palasa",
    address: "PMR Complex, KT Road, Kasibugga, Palasa",
    fullAddress: "Palasa, Andhra Pradesh — 532 221",
    phone: "+91 7997992636",
    phoneRaw: "+917997992636",
    timings: "Mon–Sun  10:00 AM – 9:00 PM",
    images: [img3, img2],
    badge: "Palasa",
    link: "https://maps.app.goo.gl/RtnpGdv7VteWMsg76",
    region: "palasa",
  },
  {
    id: 4,
    name: "GNV Jewellers — Paralakhemundi",
    address: "Palace St, Opp Boys High School, Odisha",
    fullAddress: "Paralakhemundi, Odisha",
    phone: "+91 6357123123",
    phoneRaw: "+916357123123",
    timings: "Mon–Sun  10:00 AM – 9:00 PM",
    images: [img4, img3],
    badge: "Odisha",
    link: "https://maps.app.goo.gl/Gcr7xrhmgQ6gJiQM8",
    region: "odisha",
  },
  {
    id: 5,
    name: "GNV Jewellers Office — Gunupur",
    address: "Holdiya Nola Choka, Opp Union Bank, Gunupur",
    fullAddress: "Gunupur, Odisha",
    phone: "+91 6357123123",
    phoneRaw: "+916357123123",
    timings: "Mon–Sun  10:00 AM – 9:00 PM",
    images: [img4, img1],
    badge: "Office",
    link: "https://maps.app.goo.gl/Kf6hRsNe2qJbBu3DA",
    region: "gunupur",
  },
  {
    id: 6,
    name: "GNV Jewellers — Visakhapatnam",
    address: "Visakhapatnam, Andhra Pradesh",
    fullAddress: "Location to be announced",
    phone: null,
    phoneRaw: null,
    timings: "Opening hours TBA",
    images: [],
    badge: null,
    link: null,
    region: "vizag",
    comingSoon: true,
  },
];

const regions = [
  { value: "all", label: "All Locations" },
  { value: "srikakulam", label: "Srikakulam District" },
  { value: "palasa", label: "Palasa (Kasibugga)" },
  { value: "odisha", label: "Odisha" },
  { value: "gunupur", label: "Gunupur" },
  { value: "vizag", label: "Visakhapatnam" },
];

/* ── ICONS ── */
const IconPin = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4.5c0 3 4 6 4 6s4-3 4-6a4 4 0 00-8 0z" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const IconCal = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 5h8" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const IconPhone = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 2.5C2 2 2.5 1.5 3 1.5h1.5l1 2.5L4 5c.5 1 1.5 2 2.5 2.5l1-1.5 2.5 1V8.5c0 .5-.5 1-1 1C4.5 10 2 5.5 2 2.5z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrow = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6l3 3 3-3M6 9V2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const IconChevron = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1l4 4 4-4" stroke="#7a6246" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── STYLES (injected once) ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

  .gnv-locate * { box-sizing: border-box; margin: 0; padding: 0; }

  .gnv-locate {
    background: #f5efe3;
    min-height: 100vh;
    font-family: 'Jost', sans-serif;
    color: #2c1f10;
  }

  /* HERO */
  .gnv-hero {
    background: linear-gradient(135deg, #000000 0%, #000000 60%, #000000 100%);
    padding: 3.5rem 2rem 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .gnv-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .gnv-hero-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    letter-spacing: .25em;
    text-transform: uppercase;
    color: rgba(184,134,11,0.8);
    margin-bottom: .75rem;
  }
  .gnv-hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 5vw, 3.6rem);
    font-weight: 500;
    color: #ffffff;
    line-height: 1.1;
    margin-bottom: .6rem;
  }
  .gnv-hero h1 em { color: #ffffff; font-style: italic; }
  .gnv-hero-rule {
    width: 40px;
    height: 1px;
    background: #b8860b;
    margin: 1.2rem auto .8rem;
  }
  .gnv-hero p {
    font-size: .85rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    letter-spacing: .04em;
    max-width: 420px;
    margin: 0 auto;
  }

  /* FILTER BAR */
  .gnv-filter-bar {
    background: #fff;
    border-bottom: 1px solid #d9c9a8;
    padding: .85rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .gnv-filter-label {
    font-size: .7rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #7a6246;
    white-space: nowrap;
  }
  .gnv-filter-select-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .gnv-filter-select-wrap svg {
    position: absolute;
    right: .7rem;
    pointer-events: none;
  }
  .gnv-filter-select {
    border: 1px solid #d9c9a8;
    background: #f5efe3;
    color: #2c1f10;
    font-family: 'Jost', sans-serif;
    font-size: .82rem;
    padding: .45rem 2rem .45rem .9rem;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
  }
  .gnv-count-pill {
    margin-left: auto;
    font-size: .7rem;
    letter-spacing: .08em;
    color: #7a6246;
    background: #ece2cf;
    padding: .25rem .75rem;
    border-radius: 20px;
    border: 1px solid #d9c9a8;
  }

  /* GRID */
  .gnv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* CARD */
  .gnv-card {
    background: #fff;
    border: 1px solid #d9c9a8;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: box-shadow .25s, transform .2s;
  }
  .gnv-card:hover {
    box-shadow: 0 8px 28px rgba(30,15,0,.1);
    transform: translateY(-2px);
  }

  /* CARD IMAGES */
  .gnv-card-images {
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    height: 155px;
    overflow: hidden;
    position: relative;
  }
  .gnv-card-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .5s;
    display: block;
  }
  .gnv-card:hover .gnv-card-images img { transform: scale(1.06); }
  .gnv-img-divider { background: #fff; width: 2px; height: 100%; }
  .gnv-card-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    font-family: 'Jost', sans-serif;
    font-size: .6rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    background: rgba(13,37,24,.82);
    color: #c8960c;
    padding: .22rem .6rem;
    border-radius: 2px;
  }

  /* COMING SOON PLACEHOLDER */
  .gnv-coming-placeholder {
    background: linear-gradient(135deg, #1a3d28, #0d2518);
    height: 155px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }
  .gnv-coming-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: rgba(200,150,12,0.65);
    letter-spacing: .1em;
    font-style: italic;
  }
  .gnv-coming-sub {
    font-size: .6rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(200,150,12,0.35);
  }

  /* CARD BODY */
  .gnv-card-body {
    padding: 1.1rem 1.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .55rem;
  }
  .gnv-card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.08rem;
    font-weight: 600;
    color: #2c1f10;
    line-height: 1.2;
  }
  .gnv-card-addr {
    font-size: .75rem;
    color: #000000;
    line-height: 1.4;
    font-weight: 500;
  }
  .gnv-card-meta {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    padding: .65rem 0;
    border-top: 1px solid #d9c9a8;
    border-bottom: 1px solid #d9c9a8;
  }
  .gnv-meta-row {
    display: flex;
    align-items: center;
    gap: .55rem;
    font-size: .72rem;
    color: #7a6246;
  }
  .gnv-meta-row strong { color: #2c1f10; font-weight: 500; }

  /* CARD FOOTER */
  .gnv-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: .55rem;
  }
  .gnv-btn-call {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-family: 'Jost', sans-serif;
    font-size: .68rem;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    border: 1px solid #b8860b;
    color: #b8860b;
    background: transparent;
    padding: .4rem .9rem;
    cursor: pointer;
    border-radius: 2px;
    transition: background .2s, color .2s;
    text-decoration: none;
  }
  .gnv-btn-call:hover { background: #b8860b; color: #fff; }

  .gnv-btn-location {
    display: flex;
    align-items: center;
    gap: .35rem;
    font-size: .7rem;
    color: #7a6246;
    cursor: pointer;
    background: none;
    border: none;
    font-family: 'Jost', sans-serif;
    text-decoration: none;
    transition: color .2s;
  }
  .gnv-btn-location:hover { color: #b8860b; }

  .gnv-coming-pill {
    font-size: .65rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    background: #ece2cf;
    color: #7a6246;
    padding: .28rem .7rem;
    border-radius: 20px;
    border: 1px solid #d9c9a8;
  }
  .gnv-card.coming { opacity: .72; }
  .gnv-meta-faded { opacity: .5; }
`;

/* ── COMPONENT ── */
const LocateStore = () => {
  const [region, setRegion] = useState("all");

  const filtered = stores.filter((s) => region === "all" || s.region === region);

  return (
    <>
      <style>{css}</style>

      <section className="gnv-locate">

        {/* HERO */}
        <div className="gnv-hero">
          <div className="gnv-hero-eyebrow">GNV Jewellers</div>
          <h1>
            Find a store <em>near you</em>
          </h1>
          <div className="gnv-hero-rule" />
          <p>
            As we grow, bringing our heritage and craftsmanship closer to you
            each day.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="gnv-filter-bar">
          <span className="gnv-filter-label">Filter by region</span>
          <div className="gnv-filter-select-wrap">
            <select
              className="gnv-filter-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              {regions.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
            <IconChevron />
          </div>
          <span className="gnv-count-pill">
            {filtered.length} store{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* GRID */}
        <div className="gnv-grid">
          {filtered.map((store) => (
            <div
              key={store.id}
              className={`gnv-card${store.comingSoon ? " coming" : ""}`}
            >
              {/* IMAGES / PLACEHOLDER */}
              {store.comingSoon ? (
                <div className="gnv-coming-placeholder">
                  <div className="gnv-coming-title">Coming Soon</div>
                  <div className="gnv-coming-sub">New Showroom</div>
                </div>
              ) : (
                <div className="gnv-card-images">
                  <img src={store.images[0]} alt={store.name} loading="lazy"/>
                  <div className="gnv-img-divider" />
                  <img src={store.images[1]} alt={store.name} loading="lazy"/>
                  {store.badge && (
                    <div className="gnv-card-badge">{store.badge}</div>
                  )}
                </div>
              )}

              {/* BODY */}
              <div className="gnv-card-body">
                <div className="gnv-card-name">{store.name}</div>
                <div className="gnv-card-addr">{store.address}</div>

                <div className="gnv-card-meta">
                  <div className={`gnv-meta-row${store.comingSoon ? " gnv-meta-faded" : ""}`}>
                    <IconPin />
                    {store.fullAddress}
                  </div>
                  <div className={`gnv-meta-row${store.comingSoon ? " gnv-meta-faded" : ""}`}>
                    <IconCal />
                    <strong>
                      {store.comingSoon ? "Opening hours" : "Mon–Sun"}
                    </strong>
                    &nbsp;
                    {store.comingSoon ? "TBA" : "10:00 AM – 9:00 PM"}
                  </div>
                </div>

                <div className="gnv-card-footer">
                  {store.comingSoon ? (
                    <>
                      <span className="gnv-coming-pill">Opening Soon</span>
                      <span style={{ fontSize: ".65rem", color: "#7a6246" }}>
                        Stay tuned
                      </span>
                    </>
                  ) : (
                    <>
                      <a
                        className="gnv-btn-call"
                        href={store.phoneRaw ? `tel:${store.phoneRaw}` : "#"}
                      >
                        <IconPhone />
                        {store.phone}
                      </a>
                      <a
                        className="gnv-btn-location"
                        href={store.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconArrow />
                        Directions
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default LocateStore;