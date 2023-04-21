import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    initialState: {},
    name:"news",
    reducers: {
        setActiveNews: (state , action) => {
            return state = action.payload
        }
    }
})


export const { setActiveNews } = newsSlice.actions

export default newsSlice.reducer
