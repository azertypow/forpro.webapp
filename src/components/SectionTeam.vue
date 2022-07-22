<template>
  <section class="v-section-team fp-section--default fp-grid-container fp-max-width">

    <div class="v-section-team__section-title fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24">
      <h2>{{FPApiSectionTeam.title}}</h2>
    </div>

    <div class="fp-grid-coll-24-24"></div>

    <div
        class="v-section-team__section-text fp-with-gutter fp-grid-coll-11-24 fp-grid-skip-1-24"
    >
      <div
          class="fp-remove-child-spacing"
          v-html="FPApiSectionTeam.text"
      ></div>
    </div>

    <div class="v-section-team__section-partners fp-remove-child-spacing fp-grid-coll-22-24 fp-grid-skip-1-24">
      <div class="fp-grid-container">
        <div
            v-for="item of FPApiSectionTeam.partners"
            class="fp-grid-coll-8-24 fp-with-gutter"
        >
          <people-item
              :people-item="item"
          ></people-item>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from 'vue';
import type {IFPApiSectionPartners} from "@/froproApi/FPApi";
import ImageMask from "@/components/ImageMask.vue"
import PeopleItem from "@/components/PeopleItem.vue"

export default defineComponent({
  components: {PeopleItem, ImageMask},
  props: {
    FPApiSectionTeam: {
      required: true,
      type: Object as PropType<IFPApiSectionPartners>
    }
  },

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-section-team {
  .v-section-team__section-title {}

  .v-section-team__section-text {
    margin-top: 2rem;
  }

  .v-section-team__section-partners {
    .v-people-item {
      margin-top: 2rem;
    }

    @media (max-width: 1024px) {
      [class*='fp-grid-coll-'] {
        width: 50%;
      }
    }

    @media (max-width: 775px) {
      [class*='fp-grid-coll-'] {
        width: 100%;
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
