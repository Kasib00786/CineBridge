import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaFilm,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-12">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <FaFilm className="text-red-500" />
            CineBridge
          </h2>
          <p className="mt-3 text-sm">
            Your bridge to the best cinema experience. Discover theaters,
            explore movies, and book tickets instantly.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-red-500 transition">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/theater" className="hover:text-red-500 transition">
                Theaters
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-red-500 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/help" className="hover:text-red-500 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-red-500 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-red-500 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* LOCATION & SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Presence
          </h3>
          <p className="flex items-center gap-2 text-sm mb-4">
            <FaMapMarkerAlt className="text-red-500" />
            India • Multiple Cities
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800 mt-10" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          © {new Date().getFullYear()} CineBridge. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2 md:mt-0">
          Designed for movie lovers 🎬
        </p>
      </div>
    </footer>
  );
}
