import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { BiLogOut } from "react-icons/bi";
import { useToggle } from "../hooks";
import { HiCursorClick } from "react-icons/hi";

const Header = () => {
  const { currentUser, signOut } = useAuth();
  const [isPopupVisible, tooglePopupVisible] = useToggle(false);
  const [isClickHelper, setIsClickHelper] = useState(false);

  useEffect(() => setIsClickHelper(true), []);

  return (
    <div className="border-b-2 border-black w-full h-[70px] flex items-center justify-between p-5">
      <h3 className="font-semibold">no smoke</h3>
      <div className="flex items-center gap-5">
        {isClickHelper && (
          <div className="flex items-center gap-2 ">
            Click on your photo <HiCursorClick />
          </div>
        )}
        <img
          onClick={() => {
            tooglePopupVisible();
            setIsClickHelper(false);
          }}
          src={currentUser.photoURL}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
      {isPopupVisible && (
        <div className="absolute top-20 right-5 ">
          <button
            onClick={signOut}
            className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-xl transition hover:bg-violet-100 hover:text-violet-600 hover:border-violet-600"
          >
            <BiLogOut /> Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
