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
    },
    ArrayOfSectionAnchor: [],
    menuIsOpen: false,
    fpThemeName: FP_THEME_DEFAULT_VALUE,
    newsletterIsOpen: false,
    newsletterForm: '<form method="post" action="https://newsletter.infomaniak.com/external/submit" class="inf-form" target="_blank"><input type="email" name="email" style="display:none" /><input type="hidden" name="key" value="eyJpdiI6IjlRYlpLM0JWR2VtdWo5NHYrRWRwdmxEMVFCRkdDTWN6aTRSbXU4YVR4UG89IiwidmFsdWUiOiJMMklzVGNxOUk2THlFU2J1TzFjcUNpTis1UmEyT29jMUJXSHZWOGZJNXpNPSIsIm1hYyI6ImNmNmRkYTYzYjIwNDVhZjYxOGIxNGU0MjE3NDU4YTM3MWU4Y2Q1ZTgzYmVjYTgxY2MzMjBlMzQ5NDIwY2JlYTMifQ=="><input type="hidden" name="webform_id" value="12660"><style> .inf-main_5a7e322fae2b1140884858180a4353a7{ background-color:#EDE867; padding:25px 20px; margin:25px auto; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-content { margin-top:13px;} .inf-main_5a7e322fae2b1140884858180a4353a7 h4, .inf-main_5a7e322fae2b1140884858180a4353a7 span, .inf-main_5a7e322fae2b1140884858180a4353a7 label, .inf-main_5a7e322fae2b1140884858180a4353a7 input, .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit, .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-success p a { color:#555; font-size:14px; } .inf-main_5a7e322fae2b1140884858180a4353a7 h4{ font-size:18px; margin:0px 0px 13px 0px; } .inf-main_5a7e322fae2b1140884858180a4353a7 h4, .inf-main_5a7e322fae2b1140884858180a4353a7 label{ font-weight:bold; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input { margin-bottom:7px; } .inf-main_5a7e322fae2b1140884858180a4353a7 label { display:block;} .inf-main_5a7e322fae2b1140884858180a4353a7 input{ height:35px; color:#999999; border: 1px solid #E9E9E9; padding-left:7px; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error label, .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error span.inf-message{ color: #cc0033; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error input{ border: 1px solid #cc0033; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input input { width:100%;} .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-input.inf-error span.inf-message { display: block; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit { text-align:right;} .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit input{ background-color:#FF4D4A; color:#ffffff; border:none; font-weight: normal; height:auto; padding:7px; } .inf-main_5a7e322fae2b1140884858180a4353a7 .inf-submit input.disabled{ opacity: 0.4; } .inf-btn { color: rgb(85, 85, 85); border: medium none; font-weight: normal; height: auto; padding: 7px; display: inline-block; background-color: white; box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.24); border-radius: 2px; line-height: 1em; } .inf-rgpd { margin:25px 0px 15px 0px; color:#555; } </style> <div class="inf-main_5a7e322fae2b1140884858180a4353a7"> <h4>Inscription newsletter ForPro</h4> <span>Si vous souhaitez simplement être informé∙e de l’avancement du projet, vous pouvez vous inscrire à notre newsletter ici !</span> <div class="inf-success" style="display:none"> <h4>Votre inscription a été enregistrée avec succès !</h4> <p> <a href="#" class="inf-btn">&laquo;</a> </p> </div> <div class="inf-content"> <div class="inf-input inf-input-text"> <input type="text" name="inf[1]" data-inf-meta = "1" data-inf-error = "Merci de renseigner une adresse email" required="required" placeholder="Email" > </div> <div class="inf-rgpd">Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre lettre d\'information ainsi que des informations concernant nos activités. Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans chacun de nos mails.</div> <div class="inf-submit"> <input type="submit" name="" value="Valider"> </div> </div> </div> </form>'
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
  fpThemeName: FpThemeName | null
  newsletterForm: string | null
  newsletterIsOpen: boolean
}
