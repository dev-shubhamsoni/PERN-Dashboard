import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  id:'1',
  initialUserData: null,
};

const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    getUserDataFunc: (state, action) => {
      console.log(action.payload);
      // state.initialUserData = action.payload
    },
  },
});

export const {getUserDataFunc} = allDataSlice.actions;
export default allDataSlice.reducer;