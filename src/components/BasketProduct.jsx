
import { useSelector } from 'react-redux'
import Product from './Product';
import { Link } from 'react-router-dom';

const BasketProduct = () => {
    const productItems=useSelector((store)=>store.basket.items);
    const total=useSelector((store)=>store.basket.total)
    
    

  return (
    <div className=''>
      <div className='flex items-center justify-center'>
             <Link to='/' type="button" className="text-white text-xl  bg-[#050708] hover:bg-neutral-950 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-yellow-900 me-2 mb-2">

              Total : $ {total}
              </Link>
      </div>
      

       {productItems.map((item,index)=>(
        
       <Product 
       key={index}
       id={item.id}
       name={item.name}
       image={item.image}
       price={item.price}
       amount={item.amount}
        />
        
        
       ))}
       

      
    </div>
 
  )
}


export default BasketProduct