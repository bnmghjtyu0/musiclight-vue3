import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { store } from './stores/counter'
import mitt from 'mitt' // Import mitt
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err)
}

app.use(store)
app.use(router)

type Events = {
  foo: string
  bar?: number
}

const emitter = mitt<Events>() // Initialize mitt
app.provide('emitter', emitter) // ✅ Provide as `emitter`

// Request interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = JSON.parse(token)
  }
  return config
})

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Handle the response here
    return response
  },
  (error) => {
    // Handle errors here
    console.error(error)
    return Promise.reject(error)
  }
)

app.mount('#app')
