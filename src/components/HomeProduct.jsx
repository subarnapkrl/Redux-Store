import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/basketSlice'
import { Link } from 'react-router-dom'

const HomeProduct = ({id,name,price,image,amount}) => {
    const dispatch=useDispatch()
  return (
    



    



<div className=" p-4 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center dark:bg-gray-800 dark:border-gray-700">
    
        <img className="rounded-t-lg" src={image} alt="" width={100} height={100} />
    
    <div className="p-5 flex flex-col items-center">
        
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">Price: $ {price}</p>
        <Link to="/basket" onClick={()=>dispatch(addToCart({id,name,price,image,amount}))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add To Cart
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

  )
}

export default HomeProduct