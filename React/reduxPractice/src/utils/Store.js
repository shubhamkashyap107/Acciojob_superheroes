import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./UserSlice"
import productsSliceReducer from "./ProductsSlice"


const Store = configureStore({
    reducer : {
        user : userSliceReducer,
        products : productsSliceReducer
    }
})



export default Store