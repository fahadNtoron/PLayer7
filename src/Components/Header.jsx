import { useState } from "react";
import logo from "../assets/myAssets/logo.png";
import coinn from "../assets/myAssets/ZXv0.gif";
import Banner from "./Banner";

const Header = ({coin}) => {
  return (
    <div className="relative bg-gray-600">
      <div className="flex justify-around items-center mb-5 fixed top-0  left-0 right-0 bg-gray-300">
        <img className="w-18 h-18" src={logo} alt="logo" />
        <div className="flex justify-around gap-9 items-center">
          <div className="flex justify-around gap-7 items-center">
            <p>Home</p>
            <p>Fixture</p>
            <p>Teams</p>
            <p>Schedules</p>
          </div>
          <div className="flex justify-around gap-2 items-center">
            <p>{coin}</p>
            <img className="w-4 h-4" src={coinn} alt="coin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
