import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseAmount, increaseAmount, removeItems, updateTotal } from '../features/basketSlice'

const Product = ({id,name,price,image,amount}) => {

  const dispatch=useDispatch();

  return (
    <div className='flex flex-row items-center gap-8 px-10 py-5 mb-2 max-w-3xl mx-auto bg-slate-300 rounded'>
        <img src={image} alt="" className='w-40' />
        <div className='w-1/2 px-10'>
          
          <p className='text-xl font-medium'>{name}</p>
          <p className='text-lg'>$ {price.toFixed(2)}</p>
          <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={()=>{
              dispatch(removeItems({id}))
              dispatch(updateTotal())
          }
            
            }>Remove</button>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg font-medium'>Amount</p>
          <div className='flex flex-row items-center gap-4 text-gray-600 font-medium'>
            <button className='text-xl text-slate-900' onClick={()=>{
              if (amount===1){
                dispatch(removeItems({id}));
                dispatch(updateTotal())
                return;
              } 
              dispatch(decreaseAmount({id}))
              dispatch(updateTotal())
            }}
              >-</button>
              <p className='text-xl font-bold'>{amount}</p>
              <button className='text-xl text-slate-900' onClick={()=>{
                dispatch(increaseAmount({id}))
                dispatch(updateTotal())
                }}>+</button>
          </div>
          
        </div>
        
    </div>
    
  )
}

export default Product