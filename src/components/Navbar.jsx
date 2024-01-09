import React from 'react'
import { useSelector } from 'react-redux'
import {  Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const amount=useSelector((store)=>store.basket.amount)
  return (
    <div className='flex flex-row justify-evenly mt-2 mb-2 p-3  text-xl font-bold bg-gray-950 text-white'>
      <NavLink to='/' end>Home</NavLink>
        <NavLink to='/basket'>Basket
            <span className='text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1'>{amount}</span></NavLink>
        
    </div>
  )
}

export default Navbar