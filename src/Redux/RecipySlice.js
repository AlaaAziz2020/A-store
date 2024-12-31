import { createSlice } from "@reduxjs/toolkit";

const forkifySlice = createSlice({
    name:'Recipy',
    initialState:{
        allRecipy:[],
        isLoading:false,
        isError:false
    }
})
export default forkifySlice.reducer