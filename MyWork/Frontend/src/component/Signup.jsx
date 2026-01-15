import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      await api.post("/auth/register", { name, email, password });
      alert("Signup successful! You can now login.");
      navigate("/login"); // redirect to login page
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
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
            <button className="mr-5 mt-5 font-medium text-white underline hover:scale-105">
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

      <div className="w-80 h-90 bg-black/20 mt-20 mx-auto rounded-2xl shadow-lg p-5 pt-10 hover:scale-105 transition">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSignup} // ✅ call handleSignup on submit
        >
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-full border bg-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-full border bg-white"
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

          <button
            type="submit"
            className="bg-orange-950 text-white font-bold py-3 rounded-3xl hover:bg-orange-900"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-white">
          <p className="mt-2">
            Have an account?{" "}
            <Link to="/login" className="text-orange-950 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
