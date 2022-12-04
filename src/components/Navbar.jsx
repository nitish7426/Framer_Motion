import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="h-16 flex items-center bg-white uppercase px-6 sm:px-8 md:px-12 justify-between top-0 sticky z-10">
      <h3 className="font-bold tracking-wider">Responsive Nav</h3>
      <ul className="hidden sm:flex">
        <li>
          <a
            className="p-3 text-sm font-semibold tracking-wider text-neutral-600 hover:text-neutral-800"
            href=""
          >
            home
          </a>
        </li>
        <li>
          <a
            className="p-3 text-sm font-semibold tracking-wider text-neutral-600 hover:text-neutral-800"
            href=""
          >
            about
          </a>
        </li>
        <li>
          <a
            className="p-3 text-sm font-semibold tracking-wider text-neutral-600 hover:text-neutral-800"
            href=""
          >
            services
          </a>
        </li>
        <li>
          <a
            className="p-3 text-sm font-semibold tracking-wider text-neutral-600 hover:text-neutral-800"
            href=""
          >
            contact
          </a>
        </li>
        <li>
          <a
            className="p-3 text-sm font-semibold tracking-wider text-neutral-600 hover:text-neutral-800"
            href=""
          >
            more
          </a>
        </li>
      </ul>
      {/*  */}
      <i
        className={`${nav ? "fa-xmark" : "fa-bars"}
        fa-regular text-xl sm:hidden`}
        onClick={() => setNav(!nav)}
      ></i>
      {/* hamburger */}
      <ul
        className={`${
          nav ? "left-0" : "-left-full"
        } bg-white absolute duration-100 top-full  isolate w-full py-6 space-y-4`}
      >
        <li>
          <a className="text-lg font-semibold px-8" href="">
            home
          </a>
        </li>
        <li>
          <a className="text-lg font-semibold px-8" href="">
            about
          </a>
        </li>
        <li>
          <a className="text-lg font-semibold px-8" href="">
            services
          </a>
        </li>
        <li>
          <a className="text-lg font-semibold px-8" href="">
            contact
          </a>
        </li>
        <li>
          <a className="text-lg font-semibold px-8" href="">
            more
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
