import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    loggedIn: false,
    authUser: null,
    guilds: [],
    accessToken: null,
    refreshToken: null
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    //Call the server api for login and return response

})

export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
    //delete cookies and session from server
})

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUserStatus: (state, action) => {
            state.authUser = action.payload.authUser
            state.guilds = action.payload.guilds
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.loggedIn = true
        }
    }
})

export const {changeUserStatus} = authReducer.actions
export default authReducer.reducer