<template>
  <main class="v-view-home">

    <section-header></section-header>

    <scroll-to-nav anchorTitle="Faire ensemble">
      <section-introduction></section-introduction>
    </scroll-to-nav>


    <scroll-to-nav anchorTitle="Les activités">
      <section-plan
          id="plan"
      ></section-plan>
    </scroll-to-nav>

    <div
        v-for="section of timelineSections"
    >
      <scroll-to-nav anchorTitle="Timeline ForPro">
        <section-timeline
            :FPApiSectionTimeline="section"
        ></section-timeline>
      </scroll-to-nav>
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
import ScrollToNav from "@/components/ScrollToNav.vue"

export default defineComponent({
  components: {ScrollToNav, SectionTimeline, SectionPlan, SectionHeader, SectionIntroduction},

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
