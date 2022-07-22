<template>
  <div
      data-theme="dark"
      class="v-app"
      :class="[{
        'menu-is-open': forProDataStore.menuIsOpen,
      }, forProDataStore.fpThemeName]"
  >

    <div class="v-app__header">
      <app-header></app-header>
    </div>

    <div class="v-app__router-view">
      <RouterView/>
    </div>

    <app-footer></app-footer>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import {useForProDataStore} from "@/stores/forProData"

export default defineComponent({
  components: {AppFooter, AppHeader},
  props: {
    name: String,
  },

  data() {
    return {
      forProDataStore: useForProDataStore(),
    }
  }

})</script>

<style lang="scss">
.v-app {
  padding-top: var(--header-height);

  .v-app__header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--color-background);
    z-index: 1000;
  }

  .v-app__router-view {
    background: var(--color-background);
  }

  .v-app__router-view,
  .v-app-footer {
    transform-origin: top left;
    transform: translateX( 0 );
    transition: transform .5s ease-in-out;
  }

  &.menu-is-open {

    .v-app__router-view,
    .v-app-footer {
      transform: translateX( -2% );
    }
  }
}
</style>
