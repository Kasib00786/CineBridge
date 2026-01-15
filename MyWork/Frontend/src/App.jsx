import React from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./component/Movie";
import Theater from "./component/Theater";
import About from "./component/About";
import ProtectedRoute from "./component/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movie />
            </ProtectedRoute>
          }
        />

        <Route
          path="/theater"
          element={
            <ProtectedRoute>
              <Theater />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
