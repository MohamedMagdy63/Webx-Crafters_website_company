import React from "react";
import relu from '../Images/Demos/relu-client.vercel.app_.png';
import H_Scrub from "../Images/Demos/scrub-shopping.png";
import Gosto from "../Images/Demos/Gosto.png";
import Auction from "../Images/Demos/Auction.png";
const Pages = [ relu, H_Scrub ,Gosto ,Auction];

const InnerPages = () => {
  return (
    // container
    <div className="h-[50%]">
      <h1 className="lg:text-5xl text-3xl mt-4 mb-6 font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Beautiful Inner Pages</h1>
      {/* scrolling box */}
      <div className="overflow-hidden relative scrollImagesContainer">
        <div className="scrollImages flex overflow-x-auto">
          {Pages.map((item, index) => (
            <img
              key={index}
              className="p-2 sm:p-4 lg:p-6"
              src={item}
              alt=""
              style={{ minWidth: "25%", maxWidth: "100%", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnerPages;
