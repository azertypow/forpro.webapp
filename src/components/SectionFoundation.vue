<template>
  <section class="v-section-fondation fp-section--default fp-grid-container fp-max-width">

    <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24">
      <h1>{{FPApiSectionIntro.title}}</h1>
      <div
          v-html="FPApiSectionIntro.text"
      ></div>
    </div>

    <div
        ref="coverContainer"
        class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24">
      <div
          ref="cover"
      >
        <image-mask
            v-if="FPApiSectionIntro.cover"
            v-for="imageCover of FPApiSectionIntro.cover"
            filter-s-v-g-file-name="forme-1"
            class="v-section-fondation__cover"
            alt="cover intruduction"
            :src="imageCover.url"
            :style="{transform: `translate3d(0, ${topCoverTransformValue}px, 0)`}"
        ></image-mask>
      </div>
    </div>

    <div class="v-section-team__section-team fp-remove-child-spacing fp-grid-coll-22-24 fp-grid-skip-1-24">
      <div class="fp-grid-container">
        <div
            v-for="item of FPApiSectionIntro.team"
            class="fp-grid-coll-8-24 fp-with-gutter"
        >
          <people-item
              :people-item="item"
          ></people-item>
        </div>
      </div>
    </div>

    <div class="v-section-team__section-conseil fp-remove-child-spacing fp-grid-coll-22-24 fp-grid-skip-1-24">
      <div class="fp-with-gutter fp-remove-child-spacing">
        <h2>Le Conseil de Fondation</h2>
      </div>
      <div class="fp-grid-container">
        <div
            v-for="item of FPApiSectionIntro.conseil"
            class="fp-grid-coll-8-24 fp-with-gutter"
        >
          <people-item
              :people-item="item"
          ></people-item>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent, VueElement} from "vue"
import type {PropType} from "vue"
import ImageMask from "@/components/ImageMask.vue"
import type {IFPApiSectionFoundation, IFPApiSectionIntro} from "@/froproApi/FPApi"
import PeopleItem from "@/components/PeopleItem.vue"

export default defineComponent({
  $refs: {
    coverContainer: HTMLElement
  },

  components: {PeopleItem, ImageMask},

  props: {
    FPApiSectionIntro: {
      required: true,
      type: Object as PropType<IFPApiSectionFoundation>
    }
  },

  data() {
    return {
      topCoverTransformValue: 0
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScrollEvent)
  },

  deactivated() {
    window.removeEventListener('scroll', this.onScrollEvent)
  },

  methods: {
    onScrollEvent() {
      if(! (this.$refs.coverContainer instanceof HTMLElement) ) return
      if(! (this.$refs.cover instanceof HTMLElement) ) return

      const marginTop = 100

      const top    = this.$refs.coverContainer.getBoundingClientRect().top - marginTop
      const bottom = this.$refs.coverContainer.getBoundingClientRect().bottom - this.$refs.cover.getBoundingClientRect().height - marginTop

      if      (top > 0 && bottom > 0)
        this.topCoverTransformValue = 0
      else if (top < 0 && bottom > 0)
        this.topCoverTransformValue = - this.$refs.coverContainer.getBoundingClientRect().top + marginTop
      else if (top < 0 && bottom < 0)
        this.topCoverTransformValue =
            this.$refs.coverContainer.getBoundingClientRect().height - this.$refs.cover.getBoundingClientRect().height

      console.log(bottom, this.$refs.coverContainer.getBoundingClientRect().bottom, this.$refs.coverContainer.getBoundingClientRect().height, this.$refs.cover.getBoundingClientRect().height)
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
    //transition: transform linear 150ms;

    @media (max-width: $breakpoint--mobile) {
      transform: none !important;
    }
  }

  .v-section-team__section-team {
    &+.v-section-team__section-team {
      margin-top: 4rem;
    }

    .v-people-item {
      margin-top: 2rem;
    }

    @media (max-width: 1024px) {
      [class*='fp-grid-coll-'] {
        width: 50%;
      }
    }

    @media (max-width: 775px) {
      [class*='fp-grid-coll-'] {
        width: 100%;
      }
    }
  }

  .v-section-team__section-conseil {
    margin-top: 2rem;

    > div {
      margin-top: 1rem;
    }
  }


  @media all and (max-width: $breakpoint--mobile) {
    > * {
      margin: 0;
      width: 100%;
    }
  }

}
</style>
