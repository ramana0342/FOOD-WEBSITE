import { createSlice } from "@reduxjs/toolkit";
import { UseSelector, useSelector } from "react-redux";





let FoodItemsCart = {
    FoodItems: [],

}


let FoodCartReducer = createSlice({
    name: "FoodCart",
    initialState: FoodItemsCart,

    reducers: {

        FoodaddToCart: (state, action) => {

            console.log(action.payload.ItemId)

            if (state.FoodItems.length > 0) {


                let isExist = state.FoodItems.find((item) => {
                    if (item.ItemId === action.payload.ItemId) {
                        return item;
                    }
                })
                if (isExist) {
                    isExist.quantity += 1
                } else {
                    state.FoodItems.push(action.payload)
                }


            } else {
                state.FoodItems.push(action.payload)
            }








        },
        FoodremoveFromCart: (state, action) => {
            state.FoodItems.splice(action.payload, 1)
        },
        IncreaseQty: (state, action) => {

            state.FoodItems.map(item => {
                if (item.ItemId === action.payload) {
                    item.quantity += 1
                    return item
                }
                else {
                    return item
                }
            })

        },
        DecreaseQty: (state, action) => {

            state.FoodItems.map(item => {
                if (item.quantity > 1) {
                    if (item.ItemId === action.payload) {
                        item.quantity -= 1
                        return item
                    }
                    return item
                }
            })

        }
    }

})



export const { FoodaddToCart, FoodremoveFromCart, IncreaseQty, DecreaseQty } = FoodCartReducer.actions
export default FoodCartReducer.reducer