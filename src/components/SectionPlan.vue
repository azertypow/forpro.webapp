<template>
  <section class="v-section-plan fp-section--default fp-with-gutter fp-grid-container fp-max-width">
    <div
        class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"
    >
      <h1>Les activités</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dignissimos doloribus, eius est ex iure quis vitae voluptate. Ad adipisci, alias dolore excepturi iure minima mollitia officiis unde voluptas.</p>
    </div>

    <div
        class="fp-with-gutter fp-remove-child-spacing"
    >
      <div
          class="v-section-plan__plan-container"
          ref="planContainer"
      >
        <img class="v-section-plan__plan"
             src="../assets/plan--min@2x.png"
             alt="plan"
             :style="{
                transform: transformValue,
             }"
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  // props: {
  //   name: String,
  //   msg: {type: String, required: true}
  // },

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
    distance(): number { return this.height },

    topFromBottomOfScreen(): number { return this.top - window.innerHeight},

    percentDistance(): number {
      const value = this.topFromBottomOfScreen * -100 / this.distance

      if( value < 0 ) return 0
      else if(value > 100) return 100

      return value
    },

    transformValue(): string {
      const translateY = ((100 - this.percentDistance) * -1) / 2
      const scale = (value: number) => {
        const in_min  = 0
        const in_max  = 100
        const out_min = .8
        const out_max = 1

        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
      }

      return `translate(0, ${translateY}%) scale(${scale(this.percentDistance)})`
    },
  },

})</script>

<style lang="scss">
.v-section-plan {
  .v-section-plan__plan {
    display: block;
    width: 100%;
    position: relative;
  }
}

.v-section-plan__plan-container {
  margin-top: 5rem;
}
</style>
