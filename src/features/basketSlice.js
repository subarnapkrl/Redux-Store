import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../data";

const initialState={
   
    items:[]
}

const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        increaseAmount:(state,{payload})=>{
            const item=state.items.find(item=>item.id===payload.id);
            if (item) {
    
    item.amount++;
    state.total += item.price; 
  } else {
    
    console.error(`Product with name '${payload.id}' not found.`);
  }
        },
        decreaseAmount:(state,{payload})=>{
            const item=state.items.find(item=>item.id===payload.id)
            item.amount--
            state.total -= item.price;
        },
        removeItems:(state,{payload})=>{
            state.items=state.items.filter(item=>item.id!==payload.id)
            console.log(state.items)
        },
        updateTotal:(state)=>{
            let amount=0;
            let total=0;

            state.items.forEach(item=>{
                amount+=item.amount;
                total+=item.amount*item.price;
            })
            state.amount=amount;
            state.total=total;
        },
        addToCart:(state,{payload})=>{
            const cartItems=state.items.find(item=>item.id===payload.id);
            
            
            if(cartItems){
                cartItems.amount++;
            }else{
                state.items.push({...payload,amount:1})
            }
            // After adding to cart, update the total
      state.total = state.items.reduce((acc, item) => acc + item.amount * item.price, 0);
        }
    }

})

export const {increaseAmount,decreaseAmount,removeItems,updateTotal,addToCart}=basketSlice.actions;


export default basketSlice.reducer;