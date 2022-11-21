import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './toggleSlice'


const store = configureStore({reducer:{toggleReducer:toggleSlice.reducer}})
export default store