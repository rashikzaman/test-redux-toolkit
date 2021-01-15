import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    email: 'rashikzaman13@gmail.com',
    name: 'rashik zaman'
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateName: (state, action) =>  {
      state.name = action.payload;
    },
  },
});

export const getName = (state) => state.user.name

export const getEmail = (state) => state.user.email

export default slice.reducer
export const {updateEmail, updateName} = slice.actions