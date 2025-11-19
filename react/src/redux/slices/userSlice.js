import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosRequest, getConfig } from '../../helpers/config'

const initialState = {
    isLoggedIn: false,
    token: '',
    user: null,
    chosenPlan: null
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.user = action.payload
        },
        setLoggedInOut(state, action) {
            state.isLoggedIn = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setChosenPlan(state, action) {
            state.chosenPlan = action.payload
        }
    }
})

const userReducer = userSlice.reducer

export const { setCurrentUser, setToken, setLoggedInOut, setChosenPlan } = userSlice.actions

export default userReducer