import { configureStore } from '@reduxjs/toolkit'
import Fiterstate from './Fiterstate'
export const store = configureStore({
  reducer: {
    Fiterstate: Fiterstate,

  },
})