import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#f1f1f1] w-screen p-4 '>
        <Link to="/">
            <h1 className='text-2xl tracking-[20px] font-bold text-green-500 p-4'>Workout</h1>
        </Link>
    </div>
  )
}

export default Navbar