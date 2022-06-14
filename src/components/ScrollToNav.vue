<template>
  <div
      class="v-scroll-to-nav"
      :id="anchorTitle"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useForProDataStore} from "@/stores/forProData"

export default defineComponent({
  props: {
    anchorTitle: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      forProDataStore: useForProDataStore()
    }
  },

  mounted() {
    this.forProDataStore.ArrayOfSectionAnchor.push( this.anchorTitle )
  },


})</script>

<style lang="scss">
.v-scroll-to-nav {
}
</style>
