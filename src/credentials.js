//check cookies for a saved login and confirm with the server through the api

export const checkCredentials = async () => {
    let authUser, guilds, accessToken, refreshToken
    // return {authUser, guilds, accessToken, refreshToken}
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
    accessToken = 'JNDSJKND13212nkj12n31k2n3123j1kjn2jken1jk2enjnkjnkj2n3j4njk23nkj4n23jkn4'
    refreshToken = 'jk32nejknj23nrjkn23jknj3nrj5njk5jk5jk6n6j6666n6k6njknjkn323njnion2io3ni'
    return {authUser, guilds, accessToken, refreshToken}
}