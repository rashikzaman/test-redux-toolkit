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
export default slice.reducer
export const {updateEmail, updateName} = slice.actions