import React from "react";
import logo from "../../assets/logo.png";

const Navbar = ({ totalMoney }) => {
  return (
    <div className="">
      <div className="navbar flex-col md:flex-row container2">
        <div className="flex-1">
          <img className="w-14" src={logo} />
        </div>
        <div className="flex-none">
          <ul className="flex flex-col md:flex-row mt-2.5 md:mt-0 justify-center items-center gap-7">
            <li className="text-gray-600 font-medium cursor-pointer">Home</li>
            <li className="text-gray-600 font-medium cursor-pointer">
              Fixture
            </li>
            <li className="text-gray-600 font-medium cursor-pointer">Teams</li>
            <li className="text-gray-600 font-medium cursor-pointer">
              Schedules
            </li>
            <button className="btn ml-9 font-bold">{totalMoney} Coin 💰</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
