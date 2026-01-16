import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaFilm,
  FaMapMarkedAlt,
  FaUser,
  FaTimes,
  FaSignOutAlt,
  FaTicketAlt,
  FaCog,
} from "react-icons/fa";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const token = localStorage.getItem("token");

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Movies", path: "/movies", icon: <FaFilm /> },
    { name: "Theaters", path: "/theater", icon: <FaMapMarkedAlt /> },
  ];

  /* ================= CHECK AUTH ================= */
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setCheckingAuth(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Invalid token");

        const data = await res.json();
        setUser(data);
      } catch {
        // Token invalid → force logout
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      } finally {
        setCheckingAuth(false);
      }
    };

    fetchUser();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setOpenProfile(false);
    navigate("/login");
  };

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-black z-50 px-10 h-16 items-center justify-between border-b border-gray-800 ">
        <h1 className="font-extrabold text-3xl text-yellow-500">
          CineBridge
        </h1>

        <ul className="flex gap-10 text-white items-center">
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

          <button
            onClick={() => setOpenProfile(true)}
            className="ml-4 text-gray-300 hover:text-yellow-400 transition text-xl"
          >
            <FaUser />
          </button>
        </ul>
      </nav>

      {/* ================= MOBILE NAV ================= */}
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

          <button
            onClick={() => setOpenProfile(true)}
            className="flex flex-col items-center text-xs hover:text-white"
          >
            <FaUser className="text-xl mb-1" />
          </button>
        </ul>
      </nav>

      {/* ================= PROFILE DRAWER ================= */}
      {openProfile && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={() => setOpenProfile(false)}
          />

          <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#0b0b0b] to-[#111] z-50 shadow-2xl p-6 flex flex-col border-l border-white/10">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-lg shadow-lg">
                  {user ? initials : "CB"}
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    {user ? "Signed in as" : "Welcome"}
                  </p>
                  <h3 className="text-white font-semibold leading-tight">
                    {user ? user.name : "Guest User"}
                  </h3>
                  {user && (
                    <p className="text-xs text-gray-400 truncate max-w-[160px]">
                      {user.email}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => setOpenProfile(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="h-px bg-white/10 mb-6" />

            {/* CONTENT */}
            {!token || checkingAuth ? (
              <div className="flex flex-col gap-4 mt-4">
                <Link
                  to="/login"
                  onClick={() => setOpenProfile(false)}
                  className="bg-yellow-500 text-black text-center py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setOpenProfile(false)}
                  className="border border-yellow-500 text-yellow-400 text-center py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition"
                >
                  Create Account
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 text-gray-300">
                <DrawerItem to="/profile" icon={<FaUser />} label="My Profile" onClose={setOpenProfile} />
                <DrawerItem to="/my-bookings" icon={<FaTicketAlt />} label="My Bookings" onClose={setOpenProfile} />
                <DrawerItem to="/settings" icon={<FaCog />} label="Settings" onClose={setOpenProfile} />

                <div className="h-px bg-white/10 my-4" />

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            )}

            <div className="mt-auto pt-6 text-center text-xs text-gray-500">
              CineBridge © {new Date().getFullYear()}
            </div>
          </div>
        </>
      )}

      <div className="h-16" />
      <div className="md:hidden h-16" />
    </>
  );
}

/* ================= DRAWER ITEM ================= */
function DrawerItem({ to, icon, label, onClose }) {
  return (
    <Link
      to={to}
      onClick={() => onClose(false)}
      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
