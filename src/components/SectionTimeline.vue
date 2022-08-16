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
          v-for="(item, index) of eventPast"
          class="v-section-timeline__items__item-container fp-grid-coll-12-24"
        >
          <timeline-item
              :FPApiSectionTimelineItems="item"
              :styleAlternate="index % 2 !== 0"
          ></timeline-item>
        </div>
      </div>
    </div>

    <div
        class="v-section-timeline__separation fp-grid-coll-22-24 fp-grid-skip-1-24"
    >
      <div
          class="v-section-timeline__separation__content fp-remove-child-spacing"
      >
        <div class="fp-text-h1">À venir</div>
      </div>
    </div>

    <div
        class="v-section-timeline__items v-section-timeline__items--future fp-remove-child-spacing fp-grid-coll-24-24"
    >
      <div class="v-section-timeline__items__lines"></div>

      <div class="fp-grid-container" >
        <div
            v-for="(item, index) of eventFutur"
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
import type {IFPApiSectionTimelineItems} from "@/froproApi/FPApi"

export default defineComponent({
  components: {TimelineItem},

  props: {
    FPApiSectionEvolution: {
      required: true,
      type: Object as PropType<IFPApiSectionEvolution>
    }
  },

  computed: {
    eventPast(): IFPApiSectionTimelineItems[] {
      return this.FPApiSectionEvolution.timeline.filter(value => {
        return Date.parse(value.date) < new Date().getTime()
      })
    },

    eventFutur(): IFPApiSectionTimelineItems[] {
      return this.FPApiSectionEvolution.timeline.filter(value => {
        return Date.parse(value.date) > new Date().getTime()
      })
    },
  }

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
    padding-bottom: 2rem;
  }

  .v-section-timeline__items--future {
    padding-top: 2rem;
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
      margin-top: 15rem;
    }

    @media all and (max-width: $breakpoint--small) {
      width:        100%;

      &+.v-section-timeline__items__item-container {
        margin-top: 2rem;
      }
    }
  }

  .v-section-timeline__separation {
    padding-left: calc(var(--unit-gutter-half) / 2);
    padding-right: calc(var(--unit-gutter-half) / 2);
  }

  .v-section-timeline__separation__content {
    text-align: center;
    color: var(--color-secondary);
    padding-left: var(--unit-gutter-half);
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    box-shadow: inset var(--color-secondary) 0px -3px 0px 0px, inset var(--color-secondary) 0px 3px 0px 0px;
  }

  @media all and (max-width: $breakpoint--mobile) {
    > * {
      margin: 0;
      width: 100%;
    }
  }
}
</style>
