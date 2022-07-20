<template>
  <section class="v-section-timeline fp-section--default fp-grid-container fp-max-width">
    <div
        class="v-section-timeline__header fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"
    >
      <h1>{{ FPApiSectionEvolution.title }}</h1>
      <div
          v-html="FPApiSectionEvolution.text"
      ></div>
    </div>

    <div
        class="v-section-timeline__items fp-remove-child-spacing fp-grid-coll-24-24"
    >
      <div class="v-section-timeline__items__lines"></div>

      <div class="fp-grid-container" >
        <div
          v-for="(item, index) of FPApiSectionEvolution.timeline"
          class="v-section-timeline__items__item-container fp-grid-coll-12-24"
        >
          <timeline-item
              :FPApiSectionTimelineItems="item"
              :styleAlternate="index % 2 !== 0"
          ></timeline-item>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import TimelineItem from "@/components/TimelineItem.vue"
import type {IFPApiSectionEvolution} from "@/froproApi/FPApi"

export default defineComponent({
  components: {TimelineItem},

  props: {
    FPApiSectionEvolution: {
      required: true,
      type: Object as PropType<IFPApiSectionEvolution>
    }
  },

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-section-timeline {
  background-color: var(--color-background);

  .v-section-timeline__header {
    padding-bottom: 1rem;
  }

  .v-section-timeline__items {
    position: relative;
  }

  .v-section-timeline__items__lines {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    height: 100%;
    width: 4px;
    background-color: var(--color-secondary);

    @media all and (max-width: $breakpoint--small) {
      left:  var(--unit-gutter-half);
      transform: translate(50%);
    }
  }

  .v-section-timeline__items__item-container {
    &:nth-child(2n) {
      margin-top: 10rem;
    }

    @media all and (max-width: $breakpoint--small) {
      width:        100%;

      &+.v-section-timeline__items__item-container {
        margin-top: 2rem;
      }
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
