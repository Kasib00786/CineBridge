import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <div className='bg-[url(/background.jpg)] min-h-screen bg-cover bg-center'>
    <div className='flex justify-between'>
        <h1 className='font-bold text-3xl ml-10 mt-5 text-white'>CineBridge</h1>
        <img src="./logo.png" alt="" className='w-15 h-15 mt-5'/>
        <div>
            <Link to="/"><button className='mr-5 mt-5 font-medium text-white underline hover:scale-105 transition delay-150 duration-250 ease-in-out'>Home</button></Link>
            <Link to="/about"><button className='mr-10 mt-5 font-medium text-white hover:scale-105 transition delay-150 duration-250 ease-in-out'>About</button></Link>
        </div>
    </div>
    <div className='w-80 h-90 bg-black/20 mt-20 mx-auto rounded-2xl shadow-lg p-5 pt-10 hover:scale-105 transition delay-150 duration-250 ease-in-out'>
        <form className="flex flex-col space-y-4">
                    <input
                        type="name"
                        placeholder="Username"
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none bg-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none bg-white"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none bg-white"
                    />
                    <Link to='/' className="bg-orange-950 flex justify-center transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-orange-900 text-white font-bold py-3 rounded-3xl"><input 
                        type="submit"
                        value="Sign up"
                    /></Link>
                </form>

                <div className="text-center mt-4 text-sm">
                    <p className="mt-2 text-black">
                        Have an account?{" "}
                        <Link to='/'>
                        <a href="#" className="text-orange-950 font-medium hover:underline">
                            login
                        </a>
                        </Link>
                    </p>
                </div>
    </div>
    </div>
  )
}
