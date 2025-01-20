import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "User",
    initialState : {},
    reducers : {
        addUser : (state, action) => {
            console.log("Function chala")
            const{username, password} = action.payload
            console.log(username, password)
            state.username = username
            state.password = password
            console.log(action)

            // state.push({name : username, pword : password})
        }
    }
})


export default userSlice.reducer
export const{addUser} = userSlice.actions
