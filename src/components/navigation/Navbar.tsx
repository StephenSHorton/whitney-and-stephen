import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 z-40 flex justify-center w-full bg-white shadow-md center-content">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-lg font-bold">Website Title</h1>
        <div className="flex justify-end space-x-5">
          <NavLink
            exact
            to="/"
            className="px-2 border-l-2 border-r-2"
            activeClassName="border-gray-500"
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
