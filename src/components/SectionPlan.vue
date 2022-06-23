<template>
  <section class="v-section-plan fp-section--default fp-with-gutter fp-grid-container fp-max-width">
    <div
        class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"
    >
      <h1>{{FPApiSectionPlan.title}}</h1>
      <div
          v-html="FPApiSectionPlan.text"
      ></div>
    </div>

    <div class="fp-grid-coll-12-24" ></div>

    <div class="fp-grid-coll-1-24" ></div>
    <div
        class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-24-24"
    >
      <div
          class="v-section-plan__plan-container"
          ref="planContainer"
      >
        <img class="v-section-plan__plan"
             src="../assets/ForPro_Plan.svg"
             alt="plan"
             :style="{
                transform: transitionStyleValue.transformValue,
                opacity:    transitionStyleValue.opacityValue,
             }"
        >

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import type {IFPApiSectionPlan} from "@/froproApi/FPApi"

export default defineComponent({

  props: {
    FPApiSectionPlan: {
      required: true,
      type: Object as PropType<IFPApiSectionPlan>
    }
  },

  data() {
    return {
      top:    NaN,
      bottom: NaN,
      height: NaN,
      translateFrom_inPercent: -100,
      translateTo_inPercent: 0,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.setPlanPosition)
  },

  methods: {
    setPlanPosition() {
      if( !(this.$refs.planContainer instanceof HTMLElement) ) return
      this.top = this.$refs.planContainer.getBoundingClientRect().top
      this.bottom = this.$refs.planContainer.getBoundingClientRect().bottom
      this.height = this.$refs.planContainer.getBoundingClientRect().height
    },
  },

  computed: {
    distance(): number { return this.height * 1.5},

    topFromBottomOfScreen(): number { return this.top - window.innerHeight},

    percentDistance(): number {
      const value = this.topFromBottomOfScreen * -100 / this.distance

      if( value < 0 ) return 0
      else if(value > 100) return 100

      return value
    },

    transitionStyleValue(): {
      transformValue: string
      opacityValue:   string
    } {
      const translateY = ((100 - this.percentDistance) * -1) / 2
      const scale = (value: number) => {
        const in_min  = 0
        const in_max  = 100
        const out_min = .85
        const out_max = 1

        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
      }

      return {
        transformValue: `translate(0, ${translateY}%) scale(${scale(this.percentDistance)})`,
        opacityValue: `${this.percentDistance / 100}`,
      }
    },
  },

})</script>

<style lang="scss">
.v-section-plan {
  background-color: var(--color-background);

  .v-section-plan__plan {
    display: block;
    width: 100%;
    position: relative;
  }
}

.v-section-plan__plan-container {
  padding-top: 1rem;
}
</style>
