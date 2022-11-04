import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[300px] h-screen border-r-2 border-black">
      <h1 className="text-center py-5 font-semibold text-2xl">
        30dayschallenge
      </h1>
      <div>
        <div className="p-3 mb-3 transition hover:bg-black hover:text-white text-center cursor-pointer">
          no smoke
        </div>
        <div className="p-3 mb-3 transition hover:bg-black hover:text-white text-center cursor-pointer">
          no alco
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
