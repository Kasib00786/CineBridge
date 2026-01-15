import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Movie() {
     const movies = [
  {
    name: "The Woman in the Yard",
    category: "Sci-Fi",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-OF_KR1mQgvVfISUApdtofD03aCIAdi2Oi-jhk3k-7ooX2cGy",
  },
  {
    name: "Jolly LLB 3",
    category: "Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvs9Pyu6rsIuNlGUMc2w5fYvJhag-YY_dTgMyOu2JNC8zNhxOPfHn7UyUGaencsJazsu0q&s=10",
  },
  {
    name: "The Dark Knight",
    category: "Action",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
  },
  {
    name: "Zootopia 2",
    category: "Fantasy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU-w52lblFgRaE9zJo5hubrfeyRK-O9hkv6pbSQYKoqzmKEupxh9SoPGt2KvwcjuTgO-v&s=10",
  },
  {
    name: "Titanic",
    category: "Romance",
    image: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SL1500_.jpg",
  },
  {
    name: "Border 2",
    category: "Superhero",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQB82otQXZxrK-cwuKI-iD0XHwbyXRY0OvCZ76HKoN-LWMgiGUM",
  },
  {
    name: "Joker",
    category: "Thriller",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkNeYGwWeQEwOoPhxW93QIeNUWnLmEvMPwTw9AlDBGN4uXjIAcOEwz2z2yZL8BpXHp3ZYyjQ",
  },
  {
    name: "Frozen II",
    category: "Animation",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810",
  },]
  const upcomingMovies = [
  {
    name: "Tron: Ares",
    category: "Sci-Fi / Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKgdZ4lqHU5JOYhjh1pZ9_vzFftA4WiHv-Q&s",
  },
  {
    name: "Dune: Part Three",
    category: "Sci-Fi / Epic",
    image: "https://m.media-amazon.com/images/M/MV5BNGY4NDkyNTEtNTE4Ny00NjI0LTgzYTEtN2UyZDRlODFlNTVlXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Wicked: For Good",
    category: "Musical / Fantasy",
    image: "https://i.ytimg.com/vi/SMWh9CH90yI/maxresdefault.jpg",
  },
  {
    name: "The Super Mario Galaxy Movie",
    category: "Animation / Family",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflxnxr9tAXgrl-MASeonVi2VysVu7Np3CfQ&s",
  },
  {
    name: "Day Drinker",
    category: "Action / Thriller",
    image: "https://i.ytimg.com/vi/4AfkIdir1Hg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBePZctZGLXvySs9IihZ6lVMq8Z8Q",
  },
  {
    name: "Scream 7",
    category: "Horror / Thriller",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc23YtCkB7dfhC5BwZFwiPAa0MJWKomgioWpTAXpJJTq4D3kBs9sLEImR_7S63PRzTZiG7&s=10",
  },
  {
    name: "The SpongeBob Movie: Search for SquarePants",
    category: "Animation / Comedy",
    image: "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/the-spongebob-movie-search-for-squarepants/images/regions/us/onesheet.jpg",
  },
  {
    name: "Avatar: Fire and Ash",
    category: "Action / Fantasy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivV67R9p_D1Zf6gU_DnIwO7dwUtavdeoVjA&s",
  },
];
  return (
    <div className='bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-14'>
    <div className='fixed top-0 left-0 right-0 z-50 w-full shadow-xl'><Navigation /></div>
    
    <h1 className='text-2xl font-bold mt-10 ml-10 text-white text-center '> Latest Movies</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-8 pt-10">
        {movies.map((movie, index) => (
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
              <Link to="/booknow"><button className="mt-3 bg-yellow-500 hover:scale-105 text-black font-medium px-4 py-2 rounded-lg w-full sm:w-auto">
                Book Now
              </button></Link>
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
