import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    size:0
}

const amountSlice = createSlice({
    name:'amount',
    initialState,
    reducers:{
        addAmount: (state) =>{
            state.size += 1
        },
        minesAmount: (state) =>{
            state.size -= 1
            if(state.size < 0){
                state.size=0
            }
        },
        cleareAmount: (state) =>{
            state.size = 0
        }
    }
})


export const {addAmount , minesAmount , cleareAmount} = amountSlice.actions;

export default amountSlice.reducer;