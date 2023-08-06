import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className='navbar px-14 w-screen justify-between flex items-center  border-b-2 bg-white p-4 text-black'>
            <div className='flex '>
                <div className="logo mr-5 flex items-center">
                    <img className='h-9' src={logo} alt="" />
                    <h1 className='font-bold text-2xl'>Estatery</h1>
                </div>
                <div className="links text-black">
                    <ul className='flex items-center'>
                        <li className='mx-4 cursor-pointer hover:opacity-70 bg-purple-100 px-3 p-1 text-purple-700 rounded-sm'>Rent</li>
                        <li className='mx-4 cursor-pointer hover:opacity-70'>Buy</li>
                        <li className='mx-4 cursor-pointer hover:opacity-70'>Sell</li>
                        <li className='mx-4 cursor-pointer hover:opacity-70'>Manage Property</li>
                        <li className='mx-4 cursor-pointer hover:opacity-70'>Resources</li>
                    </ul>
                </div>

            </div>
            <div className="auth">
                <button className='text-purple-700 rounded-md px-3 py-1 border-2 mx-3 hover:opacity-70'>Login</button>
                <button className='bg-purple-500 rounded-md px-3 py-1 hover:opacity-70 text-white'>Signup</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
