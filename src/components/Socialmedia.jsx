import React from "react";

const getInstagramEmbed = (url) => {
  const cleanUrl = url.split("?")[0];

  // remove trailing slash
  const formatted = cleanUrl.endsWith("/")
    ? cleanUrl.slice(0, -1)
    : cleanUrl;

  return `${formatted}/embed`;
};

const getYoutubeEmbed = (url) => {
  const id = url.split("/shorts/")[1].split("?")[0];

  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0`;
};

const instagramReels = [
  {
    id: 1,
    link: "https://www.instagram.com/reel/DXPEsAsjuuM/",
  },
  {
    id: 2,
    link: "https://www.instagram.com/reel/DW0A-cSDA5-/",
  },
  {
    id: 3,
    link: "https://www.instagram.com/reel/DW5pQapjPhz/",
  },
  {
    id: 4,
    link: "https://www.instagram.com/reel/DXvxeihs2fz/",
  },
];

const youtubeShorts = [
  {
    id: 1,
    link: "https://youtube.com/shorts/rvwkt-UnpJ0",
  },
  {
    id: 2,
    link: "https://youtube.com/shorts/bjPrNsmvhwY",
  },
  {
    id: 3,
    link: "https://youtube.com/shorts/hoPL2ZtIwEg",
  },
  {
    id: 4,
    link: "https://youtube.com/shorts/evc2d5oI6g8",
  },
];

const SocialMediaSection = () => {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-serif text-yellow-400">
          Follow us on Social Media
        </h2>

        <p className="text-gray-400 mt-3">
          Experience jewellery in motion
        </p>
      </div>

      {/* ================= INSTAGRAM ================= */}
      <div className="mb-16">

        <h3 className="text-2xl font-serif text-center mb-8 text-white">
          Instagram Reels
        </h3>

        <div className="flex justify-center">
          <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 snap-x snap-mandatory max-w-fit">

          {instagramReels.map((reel) => (
            <div
              key={reel.id}
              className="min-w-[300px] h-[540px] rounded-[30px] overflow-hidden snap-center bg-[#111]"
            >

              <iframe
                src={getInstagramEmbed(reel.link)}
                className="w-full h-full"
                allowTransparency={true}
                allow="encrypted-media"
                scrolling="no"
                frameBorder="0"
              ></iframe>

            </div>
          ))}

        </div>

        </div>
      </div>

      {/* ================= YOUTUBE ================= */}
      <div>

        <h3 className="text-2xl font-serif text-center mb-8 text-white">
          YouTube Shorts
        </h3>

        <div className="flex justify-center">
          <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 snap-x snap-mandatory max-w-fit">

          {youtubeShorts.map((short) => (
            <div
              key={short.id}
              className="min-w-[300px] h-[540px] rounded-[30px] overflow-hidden snap-center bg-[#111]"
            >

              <iframe
                src={getYoutubeEmbed(short.link)}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              ></iframe>

            </div>
          ))}

        </div>
        </div>
      </div>

    </section>
  );
};

export default SocialMediaSection;