import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaFilm,
  FaMapMarkedAlt,
  FaUser,
} from "react-icons/fa";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Movies", path: "/movies", icon: <FaFilm /> },
    { name: "Theaters", path: "/theater", icon: <FaMapMarkedAlt /> },
    { name: "Login", path: "/login", icon: <FaUser /> },
  ];

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-black z-50 px-10 h-16 items-center justify-between border-b border-gray-800">
        <h1 className="font-extrabold text-3xl text-yellow-500">
          CineBridge
        </h1>

        <ul className="flex gap-10 text-white">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 transition-all duration-300
                    ${
                      isActive
                        ? "text-yellow-500 scale-110"
                        : "text-gray-400 hover:text-white"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {isActive && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 z-50">
        <ul className="flex justify-around items-center h-16 text-gray-400">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center text-xs transition-all
                    ${
                      isActive
                        ? "text-yellow-500 scale-110"
                        : "hover:text-white"
                    }`}
                >
                  <span className="text-xl mb-1">{item.icon}</span>
                  {isActive && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-16" />
      <div className="md:hidden h-16" />
    </>
  );
}
