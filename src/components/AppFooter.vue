<template>
  <div id="footer" class="v-app-footer fp-section--default">
    <div class="v-app-footer__container fp-grid-container fp-with-gutter fp-max-width">

      <div
        class="fp-with-gutter fp-grid-coll-11-24 fp-grid-skip-1-24"
      >
        <div
            class="v-app-footer__container__left-content fp-remove-child-spacing"
            v-html="forProDataStore.dataFPApi.footer.left"
        ></div>
        <linked-in-logo></linked-in-logo>
      </div>

      <div
          class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24"
      >
        <div
            class="fp-remove-child-spacing"
            v-html="forProDataStore.dataFPApi.footer.right"
        ></div>
        <button
            class="v-app-footer__newsletter fp-ui-button"
            @click="forProDataStore.newsletterIsOpen = true"
        >S'inscrire</button>
        <div
            class="v-app-footer__credit"
        >
          <p class="fp-text-xs"
          >Images du bâtiment et portraits d'apprenti·e·s: Alicia&nbsp;Dubuis
          <br>Développement: Nicolas&nbsp;Baldran
          <br>Webdesign: Sonia&nbsp;Dominguez & Rob&nbsp;van&nbsp;Leijsen</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useForProDataStore} from "@/stores/forProData"
import LinkedInLogo from "@/components/LinkedInLogo.vue"

export default defineComponent({
  components: {LinkedInLogo},
  data() {
    return {
      forProDataStore: useForProDataStore()
    }
  },

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-app-footer {
  min-height: 50vh;
  background-color: var(--themejs--background-color);
  color: var(--color-main--dark);
  padding-bottom: 0rem !important;

  .v-app-footer__container {
    @media (max-width: $breakpoint--mobile) {
      > * {
        width: 50%;
        margin-left: 0;
      }
    }

    @media (max-width: $breakpoint--small) {
      > * {
        width: 100%;
        margin-left: 0;
      }

      > * + * {
        margin-top: 2rem;
      }
    }
  }

  .v-app-footer__container__left-content {
    margin-bottom: 1rem;
  }

  .v-app-footer__newsletter {
    margin-top: 1rem;
  }

  .v-app-footer__credit {
    margin-top: 1.5rem;
  }
}
</style>
