import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { store } from './stores/counter'
import mitt from 'mitt' // Import mitt

const app = createApp(App)

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err)
}

app.use(store)

type Events = {
  foo: string
  bar?: number
}

const emitter = mitt<Events>() // Initialize mitt
app.provide('emitter', emitter) // ✅ Provide as `emitter`
app.mount('#app')
