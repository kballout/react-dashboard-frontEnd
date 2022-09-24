import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    loggedIn: false,
    authUser: null
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    //Call the server api for login and return response
    
})

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUserStatus: (state, action) => {
            state.authUser = action.payload.authUser
            state.loggedIn = true
        }
    }
})