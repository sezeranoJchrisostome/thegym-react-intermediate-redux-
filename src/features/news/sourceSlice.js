import { createSlice } from "@reduxjs/toolkit";

export const sourceSlice = createSlice({
  initialState: "",
  name: "source",
  reducers: {
    setSource: (state, action) => {
        state = action.payload;
        return state
    },
  },
});


export const { setSource } = sourceSlice.actions

export default sourceSlice.reducer

