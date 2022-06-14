import { defineStore } from 'pinia'
import type {IFPApi} from "@/froproApi/FPApi"

export const useForProDataStore = defineStore({
  id: 'counter',
  state: () => ({
    dataFPApi: {
      title: "",
      sections: [],
    },
    ArrayOfSectionAnchor: [],
  } as IForProDataStore),
  getters: {
  },
  actions: {}
})

export interface IForProDataStore {
  dataFPApi: IFPApi
  ArrayOfSectionAnchor: string[]
}
