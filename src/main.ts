import './style/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useForProDataStore} from "@/stores/forProData"
import type {IFPApi} from "@/froproApi/FPApi"
import type {FpThemeName} from "@/forpro"
import {FP_THEME_DEFAULT_VALUE, FP_THEME_NAME} from "@/forpro"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

;(async ()=> {
  useForProDataStore().dataFPApi    = await getDataFPApi()
  getFpThemeName().then(value => {
    useForProDataStore().fpThemeName = value
    setRootCssThemeValue(value)
  })
})()

async function getDataFPApi(): Promise<IFPApi> {
  const requestResponse = await window.fetch('https://api.for-pro.ch/')

  return await requestResponse.json()
}

function getNextFpTheme(value: FpThemeName): FpThemeName {
  switch (value) {
    case 'yellow': return 'orange'
    case 'orange': return 'blue'
    case 'blue': return 'yellow'
  }
}

async function getFpThemeName(): Promise<FpThemeName> {
  let storage_FpThemeName = localStorage.getItem(FP_THEME_NAME) as FpThemeName | null

  if(storage_FpThemeName === null) {
    localStorage.setItem(FP_THEME_NAME, FP_THEME_DEFAULT_VALUE as FpThemeName)
    storage_FpThemeName = FP_THEME_DEFAULT_VALUE
  }
  else {
    localStorage.setItem(FP_THEME_NAME, getNextFpTheme(storage_FpThemeName))
  }

  return storage_FpThemeName
}

function setRootCssThemeValue(fpThemeName: FpThemeName) {
  const cssRoot = document.querySelector(':root')
  if(! (cssRoot instanceof HTMLElement)) return

  switch (fpThemeName) {
    case "blue":
      cssRoot.style.setProperty('--themejs--color-border',      '#0000ff')
      cssRoot.style.setProperty('--themejs--background-color',  '#aac8ff')
      break
    case "orange":
      cssRoot.style.setProperty('--themejs--color-border',      '#ff6917')
      cssRoot.style.setProperty('--themejs--background-color',  '#ffbe96')
      break
    case "yellow":
      cssRoot.style.setProperty('--themejs--color-border',      '#fff800')
      cssRoot.style.setProperty('--themejs--background-color',  '#d2c8b4')
      break
  }
}
