import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: 'toggle', initialState: { form: 'login' }, reducers: {
        changeform(state, action) {
            state.form = action.payload
        }
    }
})
export  const toggleActions = toggleSlice.actions
export default toggleSlice