import React from "react";
import Scrub from "../Images/Pages/scrub-shopping.png";
import Gosto from "../Images/Pages/localhost_3001_.png";
import Relu from "../Images/Pages/localhost_3001_ (1).png";

const Pages = [Gosto, Scrub, Relu];

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
