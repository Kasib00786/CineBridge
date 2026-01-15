import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-[url(/background.jpg)] min-h-screen bg-cover bg-center'>
    <div className='flex justify-between'>
        <h1 className='font-bold text-3xl ml-10 mt-5 text-white'>CineBridge</h1>
        <img src="./logo.png" alt="" className='w-15 h-15 mt-5'/>
        <div>
            <Link to="/"><button className='mr-5 mt-5 font-medium text-white hover:scale-105 transition delay-150 duration-250 ease-in-out'>Home</button></Link>
            <Link to="/about"><button className='mr-10 mt-5 font-medium text-white hover:scale-105 transition delay-150 duration-250 ease-in-out'>About</button></Link>
        </div>
    </div>
    <div className='w-80 h-80 mt-20 mx-auto rounded-2xl p-5 pt-10bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl hover:bg-white/20'>
        <form className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="my-6 px-4 py-3 rounded-full border border-gray-400 focus:outline-none bg-white"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 rounded-full border border-gray-400 focus:outline-none bg-white"
                    />

                    <Link to='/' className="bg-orange-950 flex justify-center transition delay-150 duration-250 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-orange-900 text-white font-bold py-3 rounded-3xl"><input
                        type="submit"
                        
                    /></Link>
                </form>
                <div className="text-center mt-4 text-sm">
                    <p className="text-white">Forgot password?</p>
                    <p className="mt-2 text-white">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-orange-950 font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
    </div>
    </div>
  )
}
