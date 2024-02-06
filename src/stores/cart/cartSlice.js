import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => { 
            console.log("addToCart", state.products, action.payload)
            console.log({ products: [...state.products, {...action.payload, amount: 1}]})
            return { products: [...state.products, {...action.payload, amount: 1}]}
        },
        clearCart: (state) => {
            return { products: []}
        },
        incrementProductAmount: (state, action) => {
            console.log('increment');
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)}
        },
        decrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)}
        }
    }
})

export const cartProducts = state => state.cart.products

export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer