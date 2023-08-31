import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  themeColor: '',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    themeReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { themeReducer } = themeSlice.actions;

export default themeSlice.reducer;
