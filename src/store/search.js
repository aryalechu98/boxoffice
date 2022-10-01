import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'searchInput',
    initialState:{
        input:'',
        result:null,
        searchOption:'shows',
        
    },
    reducers:{
        onInputChange(state,action){
            const setInput=action.payload;
            state.input = setInput;
            
        },
        onSetResult(state,action){
            state.result=action.payload
        },
        onRadioChange(state,action){
            state.searchOption=action.payload
        },
       
        
    }
})
export const searchActions=searchSlice.actions;
export default searchSlice