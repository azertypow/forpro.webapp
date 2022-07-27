<template>
  <div
      ref="container"
      class="v-html-content-with-hash-mail"
  >
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {formatHtmlContentWithReversesMail} from "@/global/htmlcontentMailAdress"

export default defineComponent({
  props: {
    content: {type: String, required: true}
  },

  mounted() {
    this.$nextTick(() => {
      if ( ! (this.$refs.container instanceof HTMLElement) ) return

      for ( const childrenElement of formatHtmlContentWithReversesMail(this.content).children) {
        this.$refs.container.appendChild(childrenElement)
      }
    })
  }

})</script>

<style lang="scss">
.v-html-content-with-hash-mail {
}
</style>
