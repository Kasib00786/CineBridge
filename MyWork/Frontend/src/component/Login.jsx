import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // 🔴 stop page reload

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // ✅ SAVE JWT TOKEN
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // ✅ Redirect after login
      navigate("/movies");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-[url(/background.jpg)] min-h-screen bg-cover bg-center">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl ml-10 mt-5 text-white">
          CineBridge
        </h1>
        <img src="./logo.png" alt="" className="w-15 h-15 mt-5" />
        <div>
          <Link to="/">
            <button className="mr-5 mt-5 font-medium text-white hover:scale-105">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="mr-10 mt-5 font-medium text-white hover:scale-105">
              About
            </button>
          </Link>
        </div>
      </div>

      <div className="w-80 h-80 mt-20 mx-auto rounded-2xl p-5 bg-white/10 backdrop-blur-xl shadow-2xl">
        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-6 px-4 py-3 rounded-full border bg-white"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-full border bg-white"
            required
          />

          {/* 🔴 NO Link here */}
          <button
            type="submit"
            className="bg-orange-950 text-white font-bold py-3 rounded-3xl hover:bg-orange-900"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <p className="text-white">Forgot password?</p>
          <p className="mt-2 text-white">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-950 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
