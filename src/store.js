import { configureStore } from '@reduxjs/toolkit'
import  taskSlice  from './slices/taskSlice'
import  userDataSlice  from './slices/userSlice'

export default configureStore({
  reducer: {
    counter: taskSlice,
    counterTwo : userDataSlice,
  },
})