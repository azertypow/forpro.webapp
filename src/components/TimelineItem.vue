<template>
  <div class="v-timeline-item fp-with-gutter fp-grid-container"
       :class="{
          'is-alternate': styleAlternate,
          'is-active': isActive,
       }"
       ref="timelineElement"
  >

    <div class="v-timeline-item__graphic">
      <div class="v-timeline-item__graphic__circle"></div>
    </div>


<!--    -->
    <div class="fp-grid-coll-2-24"></div>
    <div class="fp-grid-coll-20-24">
      <h5 class="v-timeline-item__date">{{FPApiSectionTimelineItems.date}}</h5>
      <h2 class="v-timeline-item__title">{{FPApiSectionTimelineItems.title}}</h2>
      <div
          class="v-timeline-item__content fp-remove-child-spacing"
          v-html="FPApiSectionTimelineItems.text"
      >
      </div>
    </div>
    <div class="fp-grid-coll-1-24"></div>
<!--    -->



<!--    -->
    <template
        v-if="FPApiSectionTimelineItems.cover"
    >
      <div class="fp-grid-coll-3-24"></div>
      <div class="v-timeline-item__image fp-grid-coll-18-24">
        <image-mask
            v-for="coverImage of FPApiSectionTimelineItems.cover"
            filter-s-v-g-file-name="circle"
            :src="coverImage.url"
        ></image-mask>
      </div>
      <div class="fp-grid-coll-3-24"></div>
    </template>
<!--    -->



  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import ImageMask from "@/components/ImageMask.vue"
import type {IFPApiSectionTimelineItems} from "@/froproApi/FPApi"

export default defineComponent({
  components: {ImageMask},

  data() {
    return {
      isActive: false,
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.addActiveClass)
    })
  },

  unmounted() {
    this.removeScrollListener()
  },

  methods: {
    addActiveClass() {
      if ( (this.$refs.timelineElement as HTMLElement).getBoundingClientRect().top - (window.innerHeight / 2) > 0) return

      this.isActive = true
      this.removeScrollListener()
    },

    removeScrollListener() { window.removeEventListener('scroll', this.addActiveClass) }
  },

  props: {
    FPApiSectionTimelineItems: {
      required: true,
      type: Object as PropType<IFPApiSectionTimelineItems>
    },
    styleAlternate: {
      required: false,
      type: Boolean,
      default: false,
    }

  }

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-timeline-item {
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: row-reverse;
  position: relative;

  .v-timeline-item__graphic {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;

    .v-timeline-item__graphic__circle {
      width: 1rem;
      height: 1rem;
      box-sizing: content-box;
      border: solid var(--color-secondary) 4px;
      border-radius: 100%;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, 50%);
      background-color: var(--color-white);
    }
  }

  .v-timeline-item__title {
    color: var(--color-main);
    margin: 0;
    position: relative;
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
    opacity: 0;
    transform: translate(0, 2rem);
  }

  .v-timeline-item__content {
    position: relative;
    transition: transform 500ms 100ms ease-in-out, opacity 500ms 100ms ease-in-out;
    opacity: 0;
    transform: translate(0, 2rem);
  }

  .v-timeline-item__date {
    color: var(--color-secondary);
    margin: 0;
  }

  .v-timeline-item__image {
    margin-top: 2rem;
    position: relative;
    transition: transform 500ms 200ms ease-in-out, opacity 500ms 200ms ease-in-out;
    opacity: 0;
    transform: translate(0, 2rem);
  }

  &.is-alternate {
    .v-timeline-item__graphic__circle {
      left: 0;
      transform: translateX(-50%);
    }
  }

  &.is-active {
    .v-timeline-item__graphic__circle {
      background-color: var(--color-ternary);
    }

    .v-timeline-item__title,
    .v-timeline-item__content,
    .v-timeline-item__image {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @media all and (max-width: $breakpoint--small) {

    .v-timeline-item__graphic__circle {
      top: 0 !important;
      left: 0 !important;
      right: auto !important;
      transform: translate(0%, 50%) !important;
    }
  }
}
</style>
