<template>
  <div
      data-theme="dark"
      class="v-app"
  >

    <app-header
        class="v-app__header"
    ></app-header>

    <RouterView/>

    <app-footer></app-footer>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default defineComponent({
  components: {AppFooter, AppHeader},
  props: {
    name: String,
    // msg: {type: String, required: true}
  },

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
    z-index: 100000;
    //box-shadow: 0 0 20px 10px var(--color-background);
  }
}
</style>
