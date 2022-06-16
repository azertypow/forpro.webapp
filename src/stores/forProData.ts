import { defineStore } from 'pinia'
import type {IFPApi} from "@/froproApi/FPApi"

export const useForProDataStore = defineStore({
  id: 'counter',
  state: () => ({
    dataFPApi: {
      title: "",
      sections: {},
    },
    ArrayOfSectionAnchor: [],
    menuIsOpen: false,
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
}
