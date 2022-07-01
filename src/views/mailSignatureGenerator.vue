<template>
  <div class="v-mail-signature-generator">
    <div class="fp-grid-container">
      <div class="fp-grid-coll-22-24 fp-grid-skip-1-24">
        <h1>Générateur de signature mail ForPro</h1>

        <form
            class="v-mail-signature-generator__content fp-ui-form"
        >
          <input type="text" placeholder="prénom"   v-model="firstname">
          <input type="text" placeholder="nom"      v-model="name">
          <input type="text" placeholder="fonction" v-model="activity" >
          <input type="text" placeholder="numéro"   v-model="tel" >
        </form>

        <div
            @click="copySignatureInClipBoard"
            class="v-mail-signature-generator__container"
        >

          <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="width: 100%"
              ref="htmlContent"
          >
            <tbody>
            <tr>
              <td height="auto"
                  style="font-family:Helvetica, Arial, sans-serif; font-size:18px; line-height: 20px; color: black"
              >
                <strong>{{getCleanedEmptyString(firstname, 'prénom')}} {{getCleanedEmptyString(name, '/ nom')}}</strong>
                <br>
                <em style="font-size: 16px">{{getCleanedEmptyString(activity, 'fonction')}}</em>
              </td>
            </tr>
            <tr>
              <td
                  height="auto"
                  style="font-family:Helvetica, Arial, sans-serif; font-size:16px; line-height: 20px; font-weight: normal; padding-top: 20px; color: #0059FFFF"
              ><strong>Fondation ForPro</strong>
                <br>Fondation pour la promotion et la valorisation de la&nbsp;Formation Professionnelle
              </td>
            </tr>

            <tr style="padding-top: 20px" >
              <td height="auto"
                  style="font-family:Helvetica, Arial, sans-serif; padding-top: 20px; line-height: 20px; font-size:16px; color:#4d4d4d;"
              >
                Route de la Galaise 17
                <br>1228 Plan-les-Ouates
              </td>
            </tr>

            <tr>
              <td height="auto"
                  style="font-family:Helvetica, Arial, sans-serif; padding-top: 20px; line-height: 20px; font-size:16px; color:#4d4d4d;"
              >
                <a :href="'tel:' + tel"
                >{{getCleanedEmptyString(tel, 'numéro')}}</a>
              </td>
            </tr>
            <tr>
              <td border="0"
                  cellpadding="0"
                  cellspacing="0"
                  height="auto"
              >
                <svg version="1.1" id="Calque_1"
                     xmlns="http://www.w3.org/2000/svg"
                     style="display: block; height: 60px; width: 320px; margin-top: 20px"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 1138.8 214"
                     xml:space="preserve">
                  <g>
  <g>
    <defs>
      <rect id="SVGID_1_" x="2.1" y="1.4" width="1134.5" height="211.2"/>
    </defs>
    <clipPath id="SVGID_00000070809923658603339580000002990481482228506298_">
      <use xlink:href="#SVGID_1_" style="overflow:visible;"/>
    </clipPath>
    <g style="clip-path:url(#SVGID_00000070809923658603339580000002990481482228506298_);">
      <path
            style="fill: #1754FF;"
            d="M255.6,189.7c-43.2,0-77.5-34.8-77.2-82.8c0.3-48.7,34.6-83.1,77.2-83.1c42.9,0,77.5,34.4,77.5,83.1
        C333.1,154.9,299.1,189.7,255.6,189.7"/>
      <path style="fill: #3DF069;" d="M1030.9,184.6c-40,0-71.8-32.6-71.5-77.8c0.3-45.7,32.1-78.1,71.5-78.1c39.7,0,71.8,32.4,71.8,78.1
        C1102.7,152,1071.2,184.6,1030.9,184.6"/>
      <path style="fill: #3DF069;" d="M255.6,1.4c-58.8,0-103,46.3-103,105.9c0,60.2,44,105.3,103,105.3c59.3,0,103.3-45.1,103.3-105.3
        C358.9,47.7,314.4,1.4,255.6,1.4 M255.6,184.8c-40,0-71.8-32.6-71.5-77.8c0.3-45.7,32.1-78.1,71.5-78.1
        c39.7,0,71.8,32.4,71.8,78.1C327.4,152.1,295.9,184.8,255.6,184.8"/>
    </g>
  </g>
                    <polygon
                        points="2.1,5.4 2.1,208 31.4,208 31.4,120.3 125.9,120.3 125.9,92.5 31.4,92.5 31.4,33.5 133.6,33.5 133.6,5.4 	"/>
                    <g>
    <defs>
      <rect id="SVGID_00000026855102904071632710000003353632725705754295_" x="2.1" y="1.4" width="1134.5"
            height="211.2"/>
    </defs>
                      <clipPath id="SVGID_00000081649715657829053620000010468521315925042623_">
      <use xlink:href="#SVGID_00000026855102904071632710000003353632725705754295_" style="overflow:visible;"/>
    </clipPath>
                      <g style="clip-path:url(#SVGID_00000081649715657829053620000010468521315925042623_);">
      <path d="M895.7,69.8c0-40.6-36-64.4-75.2-64.4h-71V208h44.6v-72.9h21l54.8,72.9H921l-61.6-81.7
        C880.4,116.4,895.7,98.5,895.7,69.8 M822.2,94.8h-28.1V50h27c18.7,0,29.8,8.8,29.8,22.1C850.8,85.4,840.9,94.8,822.2,94.8"/>
                        <path d="M525.5,65.3c0-41.2-34.1-59.9-71.3-59.9h-62.7V208h29v-82h25.8l63.6,82h36.3l-67.3-86C500.8,117.8,525.5,97.4,525.5,65.3
         M420.5,98.2v-65h34.6c23.3,0,40.9,10.2,40.9,32.1c0,23.6-17.9,32.9-40.9,32.9L420.5,98.2L420.5,98.2z"/>
                        <path style="fill: #1754FF;" d="M1031.1,1.4C972,1.7,925.5,47.7,925.5,107c0,60.7,49.4,105.6,105.6,105.3c56.2-0.3,105.6-44.6,105.6-105.3
        C1136.7,47.7,1090.1,1.1,1031.1,1.4 M1031.1,168.9c-30.9,0-58.8-23.6-58.8-61.9c0-40,28.1-62.2,58.8-62.2s59,22.4,59,62.2
        C1090.1,145.3,1062,168.9,1031.1,168.9"/>
                        <path d="M644.8,5.4h-70.1V208h44.6v-65.8h28.1c43.4,0,76.4-28.1,76.4-68.4C723.7,27.5,687.6,5.4,644.8,5.4 M646.2,99.9h-27V49.4
        h27c20.7,0,33.5,9.4,33.5,25C679.7,88.8,666.9,99.9,646.2,99.9"/>
    </g>
  </g>
</g>
</svg>


              </td>
            </tr>
            </tbody>
          </table>


        </div>
        <button
            @click="copySignatureInClipBoard"
            class="fp-ui-button"
        >Selectionner le texte de signature</button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({

  data() {
    return {
      firstname: '',
      name: '',
      activity: '',
      tel: '',
    }
  },

  methods: {
    copySignatureInClipBoard() {
      /* Get the text field */
      const htmlContentToCopy = this.$refs.htmlContent;

      if(!( htmlContentToCopy instanceof HTMLElement)) return

      const selection = window.getSelection()
      const range = document.createRange()

      range.selectNodeContents(htmlContentToCopy)

      if(! selection) return
      selection.removeAllRanges()
      selection.addRange(range)

    },

    getCleanedEmptyString(value: string, placeholder: string):string {
      if(value.length > 0) return value
      return placeholder + ' doit être rempli'
    }
  },

})</script>

<style lang="scss">
.v-mail-signature-generator {
  min-height: calc(100vh - 200px);
  padding-bottom: 1rem;

  .v-mail-signature-generator__container {
    padding: 1rem;
    margin-bottom: 1rem;
    background: white;

    > table {
      pointer-events: none;
    }
  }

}
</style>
