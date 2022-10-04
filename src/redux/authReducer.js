import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from '../ApiCalls'
import Cookies from "js-cookie"


const initialState = {
    loggedIn: false,
    loginMessage: null,
    authUser: null,
    guilds: [],
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    //Call the server api for login and return response
    let search = new URLSearchParams(window.location.search)
    let code = search.get('code')   
    let message
    try {
        const res = await axiosInstance.post(`/auth/code`, {data: JSON.stringify(code)})
        console.log(res.data);
        if(res.data.msg === 'success'){
            return {authUser: res.data.data.authUser, guilds: res.data.data.guilds}
        }
        
    } catch (error) {
        console.log(error)
        message = 'login failed'
        return thunkAPI.rejectWithValue(message)
    }

})

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUserStatus: (state, action) => {
            state.authUser = action.payload.authUser
            state.guilds = action.payload.guilds
            state.loggedIn = true
        },
        attemptLogin: (state) => {
            state.loginMessage = 'pending login'
        },
        resetState: (state) => {
            state.authUser = null
            state.guilds = []
            state.loginMessage = null
            state.loggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                console.log('success login');
                state.loginMessage = 'login success'
                state.authUser = action.payload.authUser
                state.guilds = action.payload.guilds
                state.loggedIn = true
            })
            .addCase(login.rejected, (state, action) => {
                state.loginMessage = action.payload
                state.authUser = null
                state.guilds = []
            })
    }
})

export const {changeUserStatus, attemptLogin, resetState} = authReducer.actions
export default authReducer.reducer