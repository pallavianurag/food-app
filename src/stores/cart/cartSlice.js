import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => { 
            let found = false;
            let products = state.products.map((product) => {
                if(product._id === action.payload._id) {
                    found = true;
                    return {...product, amount: product.amount + 1}
                } else 
                    return product
            })
            
            return found ? {products: [...products]} : { products: [...state.products, {...action.payload, amount: 1}]}
        },
        clearCart: (state) => {
            return { products: []}
        },
        incrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product._id === action.payload._id ? {...product, amount: product.amount + 1} : product)}
        },
        decrementProductAmount: (state, action) => {
            return { products: state.products.map((product) => {
                if(product._id === action.payload._id)
                    return {...product, amount: product.amount - 1}                 
                else 
                    return product
            }).filter((product) => {
                return product.amount !== 0
            })}}
        }
        
    }
)

export const cartProducts = state => state.cart.products

export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer