<template>
  <div class="v-mail-signature-generator">
    <div class="fp-grid-container">
      <div class="fp-grid-coll-22-24 fp-grid-skip-1-24">
        <h1>Générateur de signature mail ForPro</h1>

        <form
            class="v-mail-signature-generator__content fp-ui-form"
        >
          <input type="text" placeholder="prénom">
          <input type="text" placeholder="nom">
          <input type="text" placeholder="fonction">
        </form>

        <div
            class="v-mail-signature-generator__container"
        >

          <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="width: 100%"
          >
            <tbody>
            <tr>
              <td height="auto"
                  style="font-family:Helvetica, Arial, sans-serif; font-size:18px; line-height: 20px; color: black"
              >
                <strong>Nom prénom</strong>
                <br>
                <em style="font-size: 16px">fonction</em>
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
                <a href="tel:+41 76 346 64 70"
                >+41 76 346 64 70</a>
              </td>
            </tr>
            <tr>
              <td border="0" cellpadding="0" cellspacing="0" height="38" width="222">
                <img src="https://www.solodev.com/assets/email-signature/solodev-logo.jpg" alt="Solodev Icon">
              </td>
            </tr>
            </tbody>
          </table>


        </div>
        <button class="fp-ui-button">Copier la signature dans le press papier</button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  props: {
    name: String,
    msg: {type: String, required: true}
  },

})</script>

<style lang="scss">
.v-mail-signature-generator {
  min-height: calc(100vh - 200px);
  padding-bottom: 1rem;

  .v-mail-signature-generator__container {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .v-mail-signature-generator__container {
    background: white;
  }
}
</style>
