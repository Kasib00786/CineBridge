import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="relative min-h-screen bg-[url(/background.jpg)] bg-cover bg-center">
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* TOP NAV */}
      <div className="relative z-10 flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-extrabold text-yellow-500">
          CineBridge
        </h1>

        <div className="flex gap-6 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </div>
      </div>

      {/* SIGNUP CARD */}
      <div className="relative z-10 flex items-center justify-center mt-16 px-4">
        <div className="w-full max-w-sm rounded-2xl p-8 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 transition-all duration-500 hover:scale-[1.02]">

          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Create Your Account 🎬
          </h2>

          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-3 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="mt-4 bg-yellow-500 text-black font-semibold py-3 rounded-full hover:bg-yellow-400 transition hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-200">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-400 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
