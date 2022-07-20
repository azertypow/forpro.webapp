<template>
  <main class="v-view-home">

    <section-header></section-header>

    <div
        v-for="section of listedStatusSection"
    >
      <scroll-to-nav
          v-if="
          section.type === 'plan'
          || section.type === 'introduction'
          || section.type === 'foundation'
          || section.type === 'evolution'
          || section.type === 'team'"
          :anchorTitle="section.title"
      >
        <section-introduction
            v-if="section.type === 'introduction'"
            :FPApiSectionIntro="section"
        ></section-introduction>
        <section-foundation
            v-if="section.type === 'foundation'"
            :FPApiSectionIntro="section"
        ></section-foundation>
        <section-plan
            v-if="section.type === 'plan'"
            :FPApiSectionPlan="section"
        ></section-plan>
        <section-team
            v-if="section.type === 'team'"
            :FPApiSectionTeam="section"
        ></section-team>
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
import ScrollToNav from "@/components/ScrollToNav.vue"
import type {FPApiSection} from "@/froproApi/FPApi"
import SectionTeam from "@/components/SectionTeam.vue"
import SectionFoundation from "@/components/SectionFoundation.vue"

export default defineComponent({
  components: {
    SectionFoundation,
    SectionTeam, ScrollToNav, SectionTimeline, SectionPlan, SectionHeader, SectionIntroduction},

  data() {
    return {
      forProDataStore: useForProDataStore()
    }
  },

  computed: {
    listedStatusSection(): FPApiSection[] {
      return Object.values(this.forProDataStore.dataFPApi.sections).filter(value => {
        return value.status === 'listed'
      })
    }
  }

})</script>

<style lang="scss">
.v-view-home {
}
</style>
