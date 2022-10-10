import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from '../ApiCalls'
import Cookies from "js-cookie"


const initialState = {
    loggedIn: false,
    loginMessage: null,
    authUser: null,
    guilds: [],
    selectedGuild: null
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    //Call the server api for login and return response
    let search = new URLSearchParams(window.location.search)
    let code = search.get('code')   
    let message
    try {
        const res = await axiosInstance.post(`/auth/code`, {data: JSON.stringify(code)})
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
        changeLoginMessage: (state, action) => {
            state.loginMessage = action.payload
        },
        resetState: (state) => {
            state.authUser = null
            state.guilds = []
            state.loginMessage = null
            state.loggedIn = false
        },
        selectGuild: (state, action) => {
            state.selectedGuild = action.payload
        },
        updateGuild: (state, action) => {
            if(action.payload.type === 'terminate'){
                let index = state.guilds.findIndex(g => g.id === action.payload.id)
                console.log('index is ' + index);
                if(index !== -1){
                    state.guilds[index].guildSettings = {} 
                    state.guilds[index].exists = false 
                }
            } else {
                let index = state.guilds.findIndex(g => g.id === action.payload.id)
                if(index !== -1){
                    state.guilds[index]['guildSettings'] = action.payload.guildSettings
                    state.guilds[index]['exists'] = true
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                console.log('success login');
                state.authUser = action.payload.authUser
                state.guilds = action.payload.guilds
                state.loggedIn = true
                changeLoginMessage('login success')
            })
            .addCase(login.rejected, (state, action) => {
                state.loginMessage = action.payload
                state.authUser = null
                state.guilds = []
            })
    }
})

export const {changeUserStatus, changeLoginMessage, resetState, selectGuild, updateGuild} = authReducer.actions
export default authReducer.reducer