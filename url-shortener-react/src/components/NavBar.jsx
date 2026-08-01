import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, setToken } = useStoreContext();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const path = location.pathname;

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  const closeMenu = () => setNavbarOpen(false);

  const navLinkClass = (route) =>
      `transition-all duration-300 hover:text-white ${
          path === route
              ? "text-white font-semibold border-b-2 border-white pb-1"
              : "text-slate-200"
      }`;

  return (
      <header className="sticky top-0 z-50 backdrop-blur-md bg-custom-gradient shadow-lg">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-8 lg:px-14 flex items-center justify-between">
          <Link to="/" onClick={closeMenu}>
            <h1 className="text-3xl font-extrabold italic tracking-wide text-white select-none">
              LinkForge
            </h1>
          </Link>

          <ul
              className={`sm:flex sm:items-center sm:gap-8 absolute sm:static left-0 top-16 w-full sm:w-auto bg-custom-gradient sm:bg-transparent shadow-lg sm:shadow-none overflow-hidden transition-all duration-300 ${
                  navbarOpen ? "max-h-96 py-5" : "max-h-0 sm:max-h-full"
              }`}
          >
            <li className="px-5 sm:px-0 py-2 sm:py-0">
              <Link
                  to="/"
                  className={navLinkClass("/")}
                  onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className="px-5 sm:px-0 py-2 sm:py-0">
              <Link
                  to="/about"
                  className={navLinkClass("/about")}
                  onClick={closeMenu}
              >
                About
              </Link>
            </li>

            {token && (
                <li className="px-5 sm:px-0 py-2 sm:py-0">
                  <Link
                      to="/dashboard"
                      className={navLinkClass("/dashboard")}
                      onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                </li>
            )}

            {!token ? (
                <li className="px-5 sm:px-0 py-2 sm:py-0">
                  <Link
                      to="/register"
                      onClick={closeMenu}
                      className="inline-block px-5 py-2 rounded-xl bg-white text-slate-800 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                </li>
            ) : (
                <li className="px-5 sm:px-0 py-2 sm:py-0">
                  <button
                      onClick={onLogOutHandler}
                      className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </li>
            )}
          </ul>

          <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="sm:hidden text-white text-3xl"
          >
            {navbarOpen ? <RxCross2 /> : <IoIosMenu />}
          </button>
        </div>
      </header>
  );
};

export default Navbar;