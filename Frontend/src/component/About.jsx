import React from 'react';
import { Film, Users, Clock, MapPin, LogIn, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">

      {/* Navbar */}
      <nav className="w-full bg-gray-950/90 backdrop-blur-md border-b border-gray-800 px-6 md:px-16 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white">Cinebridge</h1>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
          >
            <Home size={18} /> <span>Home</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-1 0 px-3 py-1.5 rounded-lg text-sm font-medium text-white hover:text-blue-400 transition"
          >
            <LogIn size={16} /> <span>Login</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow flex flex-col items-center px-6 md:px-20 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            About <span className="text-blue-500">Cinebridge</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Your bridge to a seamless movie experience — discover, book, and enjoy movies effortlessly.
          </p>
        </div>

        <div className="max-w-5xl grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Film size={24} className="text-blue-400" /> Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Cinebridge was founded with a simple mission — to make movie booking smarter and smoother. 
              We connect cinema lovers with theaters across cities, offering real-time showtimes, seat availability, 
              and personalized recommendations.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you’re planning a spontaneous movie night or a weekend binge, Cinebridge brings all the magic 
              of the big screen to your fingertips.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Users size={24} className="text-blue-400" /> Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Fast, secure, and simple booking experience</li>
              <li>Accurate theater locations and seat maps</li>
              <li>Real-time updates on showtimes and offers</li>
              <li>Personalized suggestions based on your taste</li>
            </ul>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-md hover:shadow-blue-900/40 transition">
            <Clock className="mx-auto text-blue-400 mb-3" size={36} />
            <h3 className="text-lg font-semibold text-white mb-2">24/7 Availability</h3>
            <p className="text-gray-400 text-sm">Book your favorite shows anytime, anywhere.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-md hover:shadow-blue-900/40 transition">
            <MapPin className="mx-auto text-blue-400 mb-3" size={36} />
            <h3 className="text-lg font-semibold text-white mb-2">Nearby Theaters</h3>
            <p className="text-gray-400 text-sm">Find theaters near you with real-time seat availability.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-center shadow-md hover:shadow-blue-900/40 transition">
            <Film className="mx-auto text-blue-400 mb-3" size={36} />
            <h3 className="text-lg font-semibold text-white mb-2">Latest Releases</h3>
            <p className="text-gray-400 text-sm">Stay updated with the newest movies and trending shows.</p>
          </div>
        </div>

        <div className="mt-20 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Cinebridge. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default About;