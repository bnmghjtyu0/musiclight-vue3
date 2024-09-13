import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err)
}

app.mount('#app')
