import './style/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useForProDataStore} from "@/stores/forProData"
import type {IFPApi} from "@/froproApi/FPApi"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

;(async ()=> {
  useForProDataStore().dataFPApi = await getDataFPApi()
})()

async function getDataFPApi(): Promise<IFPApi> {
  const requestResponse = await window.fetch('https://api.for-pro.ch/')

  return await requestResponse.json()
}
