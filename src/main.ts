import {createApp} from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import './App.css'
import 'ant-design-vue/dist/antd.css'
import store from "@/stroe";

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
