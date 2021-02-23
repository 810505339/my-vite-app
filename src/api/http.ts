import axios from "axios";
import {message} from 'ant-design-vue'

let count = 0;
const instance = axios.create({
    baseURL: '/api',
    timeout: 6000
})
//相应拦截器
instance.interceptors.response.use((response) => {
    count--;
    if (count === 0) {
        //关闭全屏loading
    }
    return response.data
}, () => {


})

instance.interceptors.request.use((config) => {
    if (count === 0) {
        //打开请求
    }
    count++
    return config
}, () => {
    message.error('请求出错')
})

export default instance