import { createSlice } from "@reduxjs/toolkit";

const showSlice=createSlice({
    name:'show',
    initialState:{
        show:null,
        isLoading:true,
        error:null,
    },
    reducers:{
        onShowResult(state,actoin){
            state.show=actoin.payload
        },
        setIsloading(state){
            state.isLoading=false
        },
        setError(state,action){
            state.error=action.payload
        }

    }
})
export const showActions= showSlice.actions
export default showSlice;