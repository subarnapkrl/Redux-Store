import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import BasketProduct from './components/BasketProduct'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotal } from './features/basketSlice'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
 const {products}=useSelector((store)=>store.basket)

 const dispatch=useDispatch();

 useEffect(()=>{
  dispatch(updateTotal())
 },[products,dispatch])
  return (
    <div className='bg-slate-500 m-0'>
    <h1 className=' text-center text-3xl font-medium text-slate-50 py-4'>Redux Store</h1>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/basket' element={<BasketProduct/>} />
    </Routes>
    
      </div>
  )
}

export default App
