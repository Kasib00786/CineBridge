import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/signup", // CineBridge backend
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // ✅ Signup success → go to login
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-3 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-3 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {error && (
              <p className="text-red-400 text-sm text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 font-semibold py-3 rounded-full transition
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-400 hover:scale-105 text-black"
                }`}
            >
              {loading ? "Creating account..." : "Sign Up"}
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
