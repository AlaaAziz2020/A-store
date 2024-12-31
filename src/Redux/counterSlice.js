import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:'counter',
    initialState:{
        counter:0,
        userName:"Alaa"
    }
})
export const counterSlice=CounterSlice.reducer