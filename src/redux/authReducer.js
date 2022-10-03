import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from '../ApiCalls'


const initialState = {
    loggedIn: false,
    authUser: null,
    guilds: [],
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    //Call the server api for login and return response
    let search = new URLSearchParams(window.location.search)
    let code = search.get('code')   
    const res = await axiosInstance.post(`/auth/code`, {data: JSON.stringify(code)})
    console.log(res.data.data);
    if(res.data.msg === true){
        return {authUser: res.data.data.authUser, guilds: res.data.data.guilds}
    }
    return thunkAPI.rejectWithValue('login failed')

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
            state.loggedIn = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                console.log('success login');
                state.authUser = action.payload.authUser
                console.log('setting user to ' + state.authUser);
                state.guilds = action.payload.guilds
                console.log('setting guilds ' + state.guilds);
                state.loggedIn = true
            })
            .addCase(login.rejected, (state) => {
                state.authUser = null
                state.guilds = []
            })
    }
})

export const {changeUserStatus} = authReducer.actions
export default authReducer.reducer