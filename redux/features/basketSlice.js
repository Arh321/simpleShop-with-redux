import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addBasket: (state,{payload}) => {
            state.basket = [...state.basket,payload]
        },
        remove: (state, {payload}) =>{
            const copy = state.basket.filter((id) => id != payload)
            state.basket= [...copy]
        },
        clearBasket: (state) =>{
            state.basket = []
        }
    }
})


export const {addBasket,remove,clearBasket} = basketSlice.actions;

export default basketSlice.reducer;