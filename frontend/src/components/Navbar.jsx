import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    localTheme &&
      document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <nav className="navbar fixed top-0 z-50 bg-base-100 px-5 font-medium shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#apply-now">Apply Now</a>
            </li>
            {/* <li>
              <a href="#book-appointment">Book An Appointment!</a>
            </li> */}
          </ul>
        </div>
        <a className="">
          <img className="w-40" src="logo.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#contact-us">Contact Us</a>
          </li>

          <li>
            <a href="#apply-now">Apply Now</a>
          </li>
          {/* <li>
            <a href="#book-appointment">Book An Appointment!</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate">
          <input onClick={toggleTheme} type="checkbox" />
          <div className="swap-on">
            <Icon className="text-xl" icon="line-md:moon-loop" />
          </div>
          <div className="swap-off">
            <Icon className="text-xl" icon="line-md:sun-rising-loop" />
          </div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
