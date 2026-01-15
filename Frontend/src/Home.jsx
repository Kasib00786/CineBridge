import React from 'react'
import Navigation from './component/Navigation'

export default function Home() {
    const movies = [
  {
    name: "Inception",
    category: "Sci-Fi",
    image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
  },
  {
    name: "Interstellar",
    category: "Adventure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
  },
  {
    name: "The Dark Knight",
    category: "Action",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
  },
  {
    name: "Avatar",
    category: "Fantasy",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwJPOxfRiaHwXkICnf6LKMHIPWJPGLx8wht-wZH-qFs0OXXUCBvOeCQTs79z7Bx9odsdsB",
  },
  {
    name: "Titanic",
    category: "Romance",
    image: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SL1500_.jpg",
  },
  {
    name: "Avengers: Endgame",
    category: "Superhero",
    image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
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
  },
];
  return (
    <div>
    <div className='fixed top-0 left-0 right-0 z-50 w-full shadow-xl'><Navigation /></div>
    <div className='bg-[url(/base1.avif)] h-svh flex flex-col justify-center'> 
    <h1 className='text-4xl font-bold text-white ml-16'> Book Your Favorite Movies Instantly 🎬</h1
    >
    
    
    <p className="max-w-xl text-gray-300 mb-6 ml-16 mt-2">  Experience the best cinema from the comfort of your city. Fast,Simple and fun movie ticket booking with CineBridge</p>
    <button className='bg-yellow-500 w-40 p-2 rounded-lg ml-16 font-medium transition delay-150 duration-250 ease-in-out hover:scale-110'> Explore Now</button>
    </div>
    
    <div className="w-full bg-black/80 flex flex-wrap gap-4 items-center justify-center py-4">
     <div>
    <select name='1' className="bg-[#222] text-white rounded-md outline-none py-2 px-2">

     <option value="">Select Location</option>
     <option value="">Delhi</option>
     <option value="">Mumbai</option>
     <option value="">Pune</option>
     <option value="">Agra</option>
    </select></div>
    <input
        type="text"
        placeholder="Search for movies..."
        className="flex-1 bg-[#222] text-white px-4 py-2 rounded-md outline-none max-w-lg"
        />
    <button className='bg-yellow-500 rounded-lg font-medium px-4 py-2 transition delay-150 duration-250 ease-in-out hover:scale-110'>Search</button>
    </div>
    <div className='bg-black/90 py-10'>
    <h1 className='text-center text-yellow-500 text-3xl font-medium'>Now Showing</h1>

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
              <button className="mt-3 bg-yellow-500 hover:scale-105 text-black font-medium px-4 py-2 rounded-lg w-full sm:w-auto">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
     </div>
  )
}
