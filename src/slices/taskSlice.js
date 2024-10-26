import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('tasks'))? JSON.parse(localStorage.getItem('tasks')):null,
  },
  reducers: {
    userTask: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userTask  } = taskSlice.actions

export default taskSlice.reducer