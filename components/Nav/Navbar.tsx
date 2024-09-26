import React from "react";
import { FaHamburger } from "react-icons/fa";

function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-neutral-600 z-50 w-11/12 max-w-5xl  backdrop-blur-md shadow-lg flex flex-row justify-between">
      <div>
        <button className="rounded-full border-2 border-white p-2">
          <FaHamburger className="min-w-8 min-h-8 text-white font-bold" />
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
