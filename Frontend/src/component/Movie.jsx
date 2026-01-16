import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { curr_movies, upcomingMovies } from '../configfiles/localDB';

export default function Movie() {
     
  return (
    <div className='bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-14'>
    <div className='fixed top-0 left-0 right-0 z-50 w-full shadow-xl'><Navigation /></div>
    
    <h1 className='text-2xl font-bold mt-10 ml-10 text-white text-center '> Latest Movies</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-8 pt-10">
        {curr_movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            {/* Maintain 2:3 ratio for images */}
            <div className="aspect-[6/7] w-full">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3 text-center">
              <h2 className="text-lg font-semibold text-white">{movie.name}</h2>
              <p className="text-gray-400 text-sm">{movie.category}</p>
              <Link
              to="/booknow"
              state={{ movie }}
              className="mt-3 block bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg text-center hover:scale-105 transition"
            >
              Book Now
            </Link>
            </div>
          </div>
        ))}
      </div>
        
        <h1 className='text-2xl font-bold mt-10 ml-10 text-white text-center'> Upcoming Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-8 pt-10 pb-20">
        {upcomingMovies.map((upcomingMovies, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            {/* Maintain 2:3 ratio for images */}
            <div className="aspect-[6/7] w-full">
              <img
                src={upcomingMovies.image}
                alt={upcomingMovies.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3 text-center">
              <h2 className="text-lg font-semibold text-white">{upcomingMovies.name}</h2>
              <p className="text-gray-400 text-sm">{upcomingMovies.category}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>

    
  )
}
