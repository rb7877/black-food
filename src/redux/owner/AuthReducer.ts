import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    restaurant_name: 0,
    mobile_number : '',
    address : '',
    email_address : ''
}

export const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setForm: (state, action) => {
            state.restaurant_name = action.payload.restaurant_name
            state.mobile_number = action.payload.mobile_number
            state.address = action.payload.address
            state.email_address = action.payload.email_address
        },
    },
})

export const { setForm } = AuthReducer.actions

export default AuthReducer.reducer