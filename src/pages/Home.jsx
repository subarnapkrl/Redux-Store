import React from 'react'
import { useSelector } from 'react-redux'
import HomeProduct from '../components/HomeProduct';
import { storeData } from '../data';



const Home = () => {
    const  products  = useSelector((store) => store.basket.items);
    return (
        <section className='grid grid-cols-2 gap-4 items-end max-w-7xl mx-auto lg:grid-cols-3'>
        
            {storeData.map((item) => (
               <HomeProduct key={item.id}
               id={item.id}
        name={item.productName} 
        price={item.price}
        image={item.productImage}
        amount={item.amount}
        
               />
            ))}
        </section>
    );
};

export default Home