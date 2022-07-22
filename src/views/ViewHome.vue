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
          || section.type === 'evolution'"
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
        <section-timeline
            v-if="section.type === 'evolution'"
            :FPApiSectionEvolution="section"
        ></section-timeline>
      </scroll-to-nav>
    </div>
    <scroll-to-nav
        v-if="listedActors.length > 0"
        anchorTitle="Les acteurs"
    >
      <div>
        <div
            style="padding-bottom: 2rem;"
            class="fp-section--default fp-grid-container fp-max-width">
          <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24">
            <h1>Les acteurs</h1>
          </div>
        </div>
        <section-team
            style="padding-top: 0rem"
            class=""
            v-for="teamSection of listedActors"
            :FPApiSectionTeam="teamSection"
        ></section-team>
      </div>
    </scroll-to-nav>

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
import type {IFPApiSectionPartners} from "@/froproApi/FPApi"

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
    },
    listedActors(): IFPApiSectionPartners[] {
      return this.listedStatusSection.filter(value =>{
        return value.type === 'team'
      }) as IFPApiSectionPartners[]
    },
  }

})</script>

<style lang="scss">
.v-view-home {
}
</style>
