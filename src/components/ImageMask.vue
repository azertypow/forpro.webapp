<template>
  <div
      class="v-image-mask"
  >
    <img :src="`masks/${filterSVGFileName}--border.svg`" alt="" class="v-image-mask__mask"/>
    <img :src="src"                                alt="" class="v-image-mask__img" :style="style"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  props: {
    src: {type: String, required: true},
    filterSVGFileName: {type: String, required: true},
  },

  data() {
    return {
      style: {
        webkitMask: `url(masks/${this.filterSVGFileName}.svg)`,
        maskImage:  `url(masks/${this.filterSVGFileName}.svg)`,
      }
    }
  },

})</script>

<style lang="scss" scoped>
.v-image-mask {
  position: relative;

  .v-image-mask__img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .v-image-mask__mask {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    z-index: 1;
  }
}
</style>
