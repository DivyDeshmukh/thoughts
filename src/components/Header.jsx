import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center w-full p-5">
      <div className="div flex gap-1 items-center">
        <Logo />
        <h1 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          Thoughts
        </h1>
      </div>
      <div className="div flex gap-4 md:gap-8 h-full">
        <div
          id="nav-links"
          className=" gap-4 text-[10px] sm:[12px] md:text-[12px] lg:text-[12px] items-center font-light hidden md:flex"
        >
          {/* limit font for smaller devices  */}
          <Link to="/">Thoughts</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Podcasts</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Contact Us</Link>
        </div>

        <div id="menu-part" className="relative">
          <button
            onClick={handleClick}
            id="menu-icon"
            className="md:hidden flex gap-1 cursor-pointer items-center justify-center"
          >
            <i class="ri-menu-line"></i> <p className="text-[12px]">Menu</p>
          </button>

          {showMenu && (
            <div
              id="menu"
              className="flex flex-col absolute top-[130%] left-0  bg-white rounded-lg z-[100] transition-all duration-300"
            >
              <Link
                to="/"
                className="hover:bg-black hover:text-[#FFE0C3] w-[130px] text-left h-[35px] pl-2 pt-2 flex items-center"
              >
                Thoughts
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-[#FFE0C3] w-[130px] text-left h-[35px] pl-2 flex items-center"
              >
                Blog
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-[#FFE0C3] w-[130px] text-left h-[35px] pl-2 flex items-center"
              >
                Podcasts
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-[#FFE0C3] w-[130px] text-left h-[35px] pl-2 flex items-center"
              >
                Pricing
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-[#FFE0C3] w-[130px] text-left h-[35px] pl-2 flex items-center pb-1"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>

        <div
          id="buttons"
          className="flex gap-2 justify-center items-center font-semibold"
        >
          <Link
            to="/"
            className="text-black bg-white rounded-full px-4 py-1 hover:border-2 hover:border-white hover:bg-[#ffe0c3] text-[10px] sm:[12px] md:text-[12px] lg:text-[12px] hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/"
            className="text-[#ffe0c3] bg-black rounded-full px-4 py-1 hover:border-2 hover:border-black hover:bg-[#ffe0c3] text-[10px] sm:[12px] md:text-[12px] lg:text-[12px] hover:text-black"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
