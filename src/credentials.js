import Cookies from "js-cookie"
import axiosInstance from "./ApiCalls"

export const checkCredentials = async () => {
    let authUser, guilds
    //check cookie for code
    let code = Cookies.get('code')
    if(code){
        const res = await axiosInstance.post(`/auth/code`, {data: JSON.stringify(code)})
        if(res.data.msg === true){
            console.log('checking credentials');
            authUser = res.data.data.authUser
            guilds = res.data.data.guilds
        }
    }
    return {authUser, guilds}
    //TESTING
    authUser = {
        name: 'Kassim',
        id: '123456789123456',
        discriminiator: '2456',
        avatar: 'https://cdn.discordapp.com/avatars/105379151615135744/e340bb5cfe9442ff5ce06f3b684ad2b3.png'
    }
    guilds = [
        {
            name: 'Testing Server',
            id: '123456789456789',
            icon: 'https://cdn.discordapp.com/avatars/105379151615135744/e340bb5cfe9442ff5ce06f3b684ad2b3.png'
        },
        {
            name: 'Testing Server 2',
            id: '321456789456987',
            icon: 'https://cdn.discordapp.com/avatars/105379151615135744/e340bb5cfe9442ff5ce06f3b684ad2b3.png'
        },
        {
            name: 'Testing Server 2',
            id: '321456789456987',
            icon: 'https://cdn.discordapp.com/avatars/105379151615135744/e340bb5cfe9442ff5ce06f3b684ad2b3.png'
        },
        {
            name: 'Testing Server 2',
            id: '321456789456987',
            icon: 'https://cdn.discordapp.com/avatars/105379151615135744/e340bb5cfe9442ff5ce06f3b684ad2b3.png'
        },
        {
            name: 'Testing Server 2',
            id: '321456789456987',
            icon: 'https://cdn.discordapp.com/avatars/105379151615135744/e340bb5cfe9442ff5ce06f3b684ad2b3.png'
        },
        {
            name: 'Testing Server 2',
            id: '321456789456987',
            icon: 'https://cdn.discordapp.com/avatars/105379151615135744/e340bb5cfe9442ff5ce06f3b684ad2b3.png'
        },
        
    ]
    return {authUser, guilds}
}