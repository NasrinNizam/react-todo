import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'counterTwo',
  initialState: {
    value: JSON.parse(localStorage.getItem('users'))? JSON.parse(localStorage.getItem('users')):null,
  },
  reducers: {
    userData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userTask  } = userDataSlice.actions

export default userDataSlice.reducer