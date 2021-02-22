import {createApp} from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
