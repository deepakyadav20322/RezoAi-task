

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
       totalQuantity: 0, 
       totalPrice: 0, 

    },
    reducers:{
        // Here we wrire the functions that will modify the state
        addToCart(state,action){

            const itemExist = state.cart.find((item) => item.id === action.payload.id);
            if (itemExist) {
              
              itemExist.quantity = itemExist.quantity + 1; 
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });  
              state.totalQuantity += 1;
            }
            
            state.totalPrice += action.payload.price;
          },
                       
        removeFromCart(state,action){
            
            const itemToRemove = state.cart.find((item) => item.id === action.payload.id);
            if (itemToRemove) {
              state.totalQuantity -= itemToRemove.quantity;
              state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
              state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
        },

        incrementQuantity(state, action) {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload.id) {
                state.totalPrice += item.price;
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },
          
          decrementQuantity(state, action) {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload.id) {
                if (item.quantity > 1) {
                  state.totalPrice -= item.price; 
                  return { ...item, quantity: item.quantity - 1 };
                }
              }
              return item;
            });
          
            // If the quantity reaches 0, remove the item from the cart
            state.cart = state.cart.filter((item) => item.quantity > 0);

        
            
          },
          
    },

}); 

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;

  