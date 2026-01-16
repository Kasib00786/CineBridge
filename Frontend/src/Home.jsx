import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import { movies } from "./configfiles/localDB";

export default function Home() {
  const moviesSectionRef = useRef(null);



  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleExploreScroll = () => {
    moviesSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* NAV */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full shadow-xl">
        <Navigation />
      </div>

      {/* ================= ANIMATED HERO ================= */}
      <div className="relative h-svh bg-[url(/base1.avif)] bg-cover bg-center flex items-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 ml-16 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Book Your Favorite Movies Instantly 🎬
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 mt-4 mb-8"
          >
            Experience the best cinema from the comfort of your city.
            Discover theaters, explore movies, and book tickets in seconds.
          </motion.p>

          <motion.button
            onClick={handleExploreScroll}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-[0_0_25px_rgba(234,179,8,0.6)]"
          >
            Explore Now
          </motion.button>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="w-full bg-black/80 flex justify-center py-4">
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#222] text-white px-4 py-2 rounded-md outline-none w-full max-w-lg"
        />
      </div>

      {/* MOVIES */}
      <div
        ref={moviesSectionRef}
        className="bg-black/90 py-10 scroll-mt-20"
      >
        <h1 className="text-center text-yellow-500 text-3xl font-medium">
          Now Showing
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-8 pt-10">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <div className="aspect-[6/7] w-full">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-3 text-center">
                  <h2 className="text-lg font-semibold text-white">
                    {movie.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {movie.category}
                  </p>
                  <Link
                  to="/booknow"
                  state={{ movie }}
                  className="mt-3 block bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg text-center hover:scale-105 transition"
                >
                  Book Now
                </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No movies found ❌
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
