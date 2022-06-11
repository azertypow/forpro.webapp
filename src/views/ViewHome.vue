<template>
  <main class="v-view-home">

    <section-header
        id="header"
    ></section-header>

    <section-introduction></section-introduction>

    <section-plan
        id="plan"
    ></section-plan>

    <div
        v-for="section of timelineSections"
    >
      <section-timeline
          :FPApiSectionTimeline="section"
      ></section-timeline>
    </div>

  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import SectionIntroduction from "@/components/SectionIntroduction.vue"
import SectionHeader from "@/components/SectionHeader.vue"
import SectionPlan from "@/components/SectionPlan.vue"
import SectionTimeline from "@/components/SectionTimeline.vue"
import {useForProDataStore} from "@/stores/forProData"
import type {IFPApiSectionTimeline} from "@/froproApi/FPApi"

export default defineComponent({
  components: {SectionTimeline, SectionPlan, SectionHeader, SectionIntroduction},

  data() {
    return {
      forProDataStore: useForProDataStore()
    }
  },

  computed: {
    timelineSections(): IFPApiSectionTimeline[] {
      return this.forProDataStore.dataFPApi.sections.filter(value => {return value.type === 'timeline'}) as IFPApiSectionTimeline[]
    }
  }

})</script>

<style lang="scss">
.v-view-home {
}
</style>
