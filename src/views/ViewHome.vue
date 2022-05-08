<template>
  <main class="v-view-home">

    <section-header
        id="header"
    ></section-header>

    <section-introduction></section-introduction>

    <section-plan
        id="plan"
    ></section-plan>

  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import SectionIntroduction from "@/components/SectionIntroduction.vue"
import SectionHeader from "@/components/SectionHeader.vue"
import SectionPlan from "@/components/SectionPlan.vue"

export default defineComponent({
  components: {SectionPlan, SectionHeader, SectionIntroduction},

  props: {
    name: String,
    // msg: {type: String, required: true}
  },

})</script>

<style lang="scss">
.v-view-home {
}
</style>
