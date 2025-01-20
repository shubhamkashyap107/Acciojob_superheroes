import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
    name : "Products",
    initialState : [],
    reducers : {
        addProducts : (state, b) => {
            const{name, price} = b.payload
            state.push({price : price , name : name})
        }
    }
})

export default ProductsSlice.reducer
export const{addProducts} = ProductsSlice.actions