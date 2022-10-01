import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import showSlice from "./show";


const store = configureStore({
    reducer:{
        searchInput:searchSlice.reducer,
        show:showSlice.reducer,
    }
})
export default store