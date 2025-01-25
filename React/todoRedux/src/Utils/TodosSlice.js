import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "Todos",
    initialState : [],
    reducers : {
        addTodo : (state, action) => {
            const{title, desc} = action.payload
            state.push({title, desc})
        },
        deleteTodo : (state, action) => {
            return state.filter((item) => {
                return !item.title.includes(action.payload.title)
            })
        }
    }
})

console.log(todoSlice)

export default todoSlice.reducer
export const{addTodo, deleteTodo} = todoSlice.actions