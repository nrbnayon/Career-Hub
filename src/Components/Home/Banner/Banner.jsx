import React from "react";
import BannerImg from "../../../assets/images/Profile.jpg";
const Banner = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between bg-gray-100 shadow-md rounded-xl">
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-center md:text-left">
            One Step <br /> Closer to Your <br />
            <span className="text-lime-500">Dream Job</span>
          </h3>
          <p className="text-center md:text-left mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            hic?
          </p>
          <button className="btn btn-accent my-3">Apply Now</button>
        </div>
      </div>
      <div className="md:w-1/2 min-h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BannerImg}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
