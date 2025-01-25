import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./TodosSlice"

const store = configureStore({
    reducer : {
        Todos : todoReducer
    }
})


export default store