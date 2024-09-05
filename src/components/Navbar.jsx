import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-[#171717] w-[614px] h-[62px] top-[113px] left-[975px]  rounded-[23px] shadow-custom-inset">
      <div className="w-[597px] h-[49px] top-[119px] left-[981px] gap-[6px] flex">
        <div className="bg-[#28292F] w-[195px] h-[49px] rounded-[16px] p-[10px] px-[24px] gap-[10px] ">
            <p className= "text-white w-[87px] h-[17px] font-poppins text-[18px] font-medium leading-[16.12px] text-center">About Me</p>
        </div>
        <div className="bg-[#28292F] w-[195px] h-[49px] rounded-[16px] p-[10px] px-[24px] gap-[10px]">
            <p className= "text-white w-[87px] h-[17px] font-poppins text-[18px] font-medium leading-[16.12px] text-center">Experiences</p>
        </div>
        <div className="bg-[#28292F] w-[195px] h-[49px] rounded-[16px] p-[10px] px-[24px] gap-[10px]">
            <p className= "text-white w-[87px] h-[17px] font-poppins text-[18px] font-medium leading-[16.12px] text-center">Recommended</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
