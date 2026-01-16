import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Movie from "./component/Movie";
import Theater from "./component/Theater";
import About from "./component/About";
import BookNow from "./component/BookNow";

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/theater" element={<Theater />} />
        <Route path="/about" element={<About />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/booknow"
          element={
            <ProtectedRoute>
              <BookNow />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
