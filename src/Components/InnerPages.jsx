import React from "react";
import Scrub from "../Images/Pages/scrub-shopping.png";
import Gosto from "../Images/Pages/localhost_3001_.png";
import Relu from "../Images/Pages/localhost_3001_ (1).png";

const Pages = [Gosto, Scrub, Relu];

const InnerPages = () => {
  return (
    // container
    <div className="h-[50%]">
      <h1 className="text-5xl m-4 sm:m-10 lg:m-20">Beautiful Inner Pages</h1>
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
