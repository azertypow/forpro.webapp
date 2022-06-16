<template>
  <main class="v-view-home">

    <section-header></section-header>

    <div
        v-for="section of this.forProDataStore.dataFPApi.sections"
    >
      <scroll-to-nav
          v-if="
          section.type === 'plan'
          || section.type === 'introduction'
          || section.type === 'foundation'
          || section.type === 'evolution'"
          :anchorTitle="section.title"
      >
        <section-introduction
            v-if="section.type === 'introduction' || section.type === 'foundation'"
            :FPApiSectionIntro="section"
        ></section-introduction>
        <section-plan
            v-if="section.type === 'plan'"
            :FPApiSectionPlan="section"
        ></section-plan>
        <section-timeline
            v-if="section.type === 'evolution'"
            :FPApiSectionEvolution="section"
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
import type {IFPApiSectionEvolution} from "@/froproApi/FPApi"
import ScrollToNav from "@/components/ScrollToNav.vue"

export default defineComponent({
  components: {ScrollToNav, SectionTimeline, SectionPlan, SectionHeader, SectionIntroduction},

  data() {
    return {
      forProDataStore: useForProDataStore()
    }
  },

  computed: {
    timelineSections(): IFPApiSectionEvolution[] {
      return Object.values(this.forProDataStore.dataFPApi.sections).filter(value => {return value.type === 'evolution'}) as IFPApiSectionEvolution[]
    }
  }

})</script>

<style lang="scss">
.v-view-home {
}
</style>
