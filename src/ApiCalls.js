import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default axiosInstance