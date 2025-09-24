import React from "react";
import HeroImg from "../../assets/banner-main.png";
import BgImg from "../../assets/bg-shadow.png";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
      }}
      className="container2 rounded-2xl bg-gray-900 flex flex-col items-center justify-center py-[64px] space-y-6 mt-8"
    >
      <img src={HeroImg} />
      <h1 className="text-white text-4xl md:text-5xl font-sora">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-white/70 font-sora text-xl">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="btn btn-secondary">Claim Free Credit</button>
    </div>
  );
};

export default HeroSection;
