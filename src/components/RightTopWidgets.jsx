import React from "react";
import GalleryWidget from "./GalleryWidget.jsx";
import TopWidget from "./TopWidget.jsx";

const RightTopWidgets = () => {
  return (
    <div className="">
     <TopWidget/>
      <div className="bg-[#363C43] w-11/12 my-5 divider h-1 rounded-sm mx-auto"></div>
      <div>
        <GalleryWidget />
      </div>
      <div className=" bg-[#363C43] w-11/12 my-5 divider h-1 rounded-sm mx-auto"></div>
    </div>
  );
};

export default RightTopWidgets;
