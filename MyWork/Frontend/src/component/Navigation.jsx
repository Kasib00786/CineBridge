import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='h-18 bg-black sticky w-full flex items-center justify-between px-10 top-0'>
        <h1 className='font-bold text-3xl text-yellow-500'>CineBridge</h1>
        <ul className='flex text-white gap-10 '>
            <li className='transition delay-150 duration-250 ease-in-out hover:scale-110'><Link to='/'>Home</Link></li>
            <li className='transition delay-150 duration-250 ease-in-out hover:scale-110'><Link to='/movies'>Movies</Link></li>
            <li className='transition delay-150 duration-250 ease-in-out hover:scale-110'><Link to='/theater'>Theaters</Link></li>
            <li className='transition delay-150 duration-250 ease-in-out hover:scale-110'><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}
