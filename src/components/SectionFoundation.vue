<template>
  <section class="v-section-fondation fp-section--default fp-grid-container fp-max-width">
    <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24">
      <h1>{{FPApiSectionIntro.title}}</h1>
      <div
          v-html="FPApiSectionIntro.text"
      ></div>
    </div>
    <div
        v-if="FPApiSectionIntro.cover"
        v-for="imageCover of FPApiSectionIntro.cover"
        class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24">
      <image-mask
          filter-s-v-g-file-name="forme-1"
          class="v-section-fondation__cover"
          alt="cover intruduction"
          :src="imageCover.url"
      ></image-mask>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import ImageMask from "@/components/ImageMask.vue"
import type {IFPApiSectionFoundation, IFPApiSectionIntro} from "@/froproApi/FPApi"

export default defineComponent({
  components: {ImageMask},

  props: {
    FPApiSectionIntro: {
      required: true,
      type: Object as PropType<IFPApiSectionFoundation>
    }
  }

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-section-fondation {
  background-color: var(--color-background);

  .v-section-fondation__cover {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: auto;
    box-sizing: border-box;
  }

  @media all and (max-width: $breakpoint--mobile) {
    > * {
      margin: 0;
      width: 100%;
    }
  }

}
</style>
