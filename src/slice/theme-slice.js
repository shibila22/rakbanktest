import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  themeColor: '',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialStateValue,

  reducers: {
    themeReducer: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const { themeReducer } = themeSlice.actions;

export default themeSlice.reducer;
