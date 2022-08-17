import { defineStore } from 'pinia'
import type {IFPApi} from "@/froproApi/FPApi"
import {FP_THEME_DEFAULT_VALUE} from "@/forpro"
import type {FpThemeName} from "@/forpro"

export const useForProDataStore = defineStore({
  id: 'counter',
  state: () => ({
    dataFPApi: {
      title: "",
      footer: {
        left: '',
        right: '',

      },
      sections: {},
      description: '',
      newsletterCode: '',
    },
    ArrayOfSectionAnchor: [],
    menuIsOpen: false,
    fpThemeName: FP_THEME_DEFAULT_VALUE,
    newsletterIsOpen: false,
  } as IForProDataStore),
  getters: {
  },
  actions: {
    toggleMenuStatus() {
      this.menuIsOpen = !this.menuIsOpen
    }
  }
})

export interface IForProDataStore {
  dataFPApi: IFPApi
  ArrayOfSectionAnchor: string[]
  menuIsOpen: boolean
  fpThemeName: FpThemeName
  newsletterIsOpen: boolean
}
