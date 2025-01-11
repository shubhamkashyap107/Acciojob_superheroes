import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers : {
        addToCart : (state, action) => {
            // console.log("Function chala")
            // const{name, price} = action.payload
            // state.push({name : name, price : price})
        
            // console.log(action)
            const foundItem = state.find((item) => {
                return item.name == action.payload.name
            })

            if(!foundItem)
            {
                state.push({img : action.payload.img ,name : action.payload.name, price : action.payload.price, quantity : 1, isVeg : action.payload.isVeg})
            }
            else
            {
                let nArr = state.filter((item) => {
                    return item.name != action.payload.name
                })

                nArr.push({name : foundItem.name, price : foundItem.price, quantity : foundItem.quantity + 1, isVeg : foundItem.isVeg, img : foundItem.img})
            
                while(state.length)
                {
                    state.pop()
                }

                while(nArr.length)
                {
                    state.push(nArr.pop())
                }
            }
        
        },


        removeFromCart : (state, action) => {
            const foundItem = state.find((item) => {
                return item.name == action.payload.name
            })

            console.log(foundItem)

            if(foundItem.quantity == 1)
            {
                let nArr = state.filter((item) => {
                    return item.name != action.payload.name
                })


                while(state.length)
                    {
                        state.pop()
                    }
    
                    while(nArr.length)
                    {
                        state.push(nArr.pop())
                    }

            }
            else
            {
                let nArr = state.filter((item) => {
                    return item.name != action.payload.name
                })

                nArr.push({name : foundItem.name, price : foundItem.price, quantity : foundItem.quantity - 1, isVeg : foundItem.isVeg, img : foundItem.img})
            
                while(state.length)
                    {
                        state.pop()
                    }
    
                    while(nArr.length)
                    {
                        state.push(nArr.pop())
                    }
            }
        }

    }
})


export default CartSlice.reducer
export const{addToCart, removeFromCart} = CartSlice.actions