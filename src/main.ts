import './style/_main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import {useForProDataStore} from "@/stores/forProData"
import type {IFPApi} from "@/froproApi/FPApi"
import type {FpThemeName} from "@/forpro"
import {FP_THEME_DEFAULT_VALUE, FP_THEME_LAST_DATE_USED, FP_THEME_NAME} from "@/forpro"

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

function setStorage_FpThemeData({toNextThemeValue = false}) {
  const themeName =
    toNextThemeValue ?
      getNextFpTheme(localStorage.getItem(FP_THEME_NAME) as FpThemeName)
      : localStorage.getItem(FP_THEME_NAME) as FpThemeName

  localStorage.setItem(FP_THEME_NAME, themeName)
  localStorage.setItem(FP_THEME_LAST_DATE_USED, new Date().toString())
}

async function getFpThemeName(): Promise<FpThemeName> {
  if(localStorage.getItem(FP_THEME_NAME) === null)
    setStorage_FpThemeData({})

  const lastDateInMS = new Date(localStorage.getItem(FP_THEME_LAST_DATE_USED) || '0').getTime()
  const todayInMS =  new Date().getTime()
  const hour24ToMS = 1000*60*60*24

  if( todayInMS - lastDateInMS > hour24ToMS)
    setStorage_FpThemeData({toNextThemeValue: true})

  return localStorage.getItem(FP_THEME_NAME) as FpThemeName
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
