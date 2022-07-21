<template>
  <div id="footer" class="v-app-footer fp-section--default">
    <div class="v-app-footer__container fp-grid-container fp-with-gutter fp-max-width">

      <div
          v-html="forProDataStore.dataFPApi.footer.left"
          class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"
      ></div>

      <div
          v-html="forProDataStore.dataFPApi.footer.right"
          class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useForProDataStore} from "@/stores/forProData"

export default defineComponent({

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
}
</style>
