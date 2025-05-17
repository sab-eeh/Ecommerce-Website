import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="bg-[white] flex justify-between items-center px-16  py-5">
        <div>
          <h1 className="text-2xl font-extrabold">Adidas</h1>
        </div>
        <div>
          <nav className="pl-14">
            <ul className="flex items-center gap-4">
              <li>
                <a href="" className="font-bold">New</a>
              </li>
              <li>
                <a href="" className="font-bold">Feature</a>
              </li>
              <li>
                <a href="" className="font-bold">Men</a>
              </li>
              <li>
                <a href="" className="font-bold">Women</a>
              </li>
              <li>
                <a href="" className="font-bold">Collection</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search"
            name=""
            id=""
            className="border-1 px-4 py-1 rounded-2xl w-[170px]"
          />
          <div className="flex gap-3 items-center">
            <FaRegHeart className="cursor-pointer" size={22} />
            <IoCartOutline className="cursor-pointer" size={26} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
