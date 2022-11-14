import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className="hero bg-base-200 flex justify-between"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="rounded-lg shadow-2xl lg:w-1/2" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
