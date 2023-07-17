import { configureStore } from '@reduxjs/toolkit'
import  boutiqueSlice  from './boutiqueslice'

export default configureStore({
  reducer: {
    boutique : boutiqueSlice
  },
})