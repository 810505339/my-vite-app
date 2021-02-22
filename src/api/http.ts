import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 6000
})
//相应拦截器
instance.interceptors.response.use((response) => {
    return response.data
})
instance.interceptors.request.use((config) => {
    return config
})

export default instance