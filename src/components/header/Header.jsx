import React from "react";
import LoGo from "../../assets/react.svg";
import Switcher from "../Switcher";

const Header = () => {
  return (
    <header className="flex gap-4 items-center">
      <img className="w-16" src={LoGo} alt="" />
      <h1 className="text-black dark:text-white">Shopping</h1>
      <Switcher />
    </header>
  );
};

export default Header;
