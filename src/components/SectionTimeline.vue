<template>
  <section class="v-section-timeline fp-section--default fp-grid-container fp-with-gutter">
    <div
        class="v-section-timeline__header fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24"
    >
      <h1>Étapes clés</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dignissimos doloribus, eius est ex iure quis vitae voluptate. Ad adipisci, alias dolore excepturi iure minima mollitia officiis unde voluptas.</p>
    </div>

    <div
        class="v-section-timeline__items fp-remove-child-spacing fp-grid-coll-24-24"
    >
      <div class="v-section-timeline__items__lines"></div>
      <timeline-item></timeline-item>
      <timeline-item></timeline-item>
      <timeline-item></timeline-item>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import TimelineItem from "@/components/TimelineItem.vue"

export default defineComponent({
  components: {TimelineItem}

  // props: {
  //   name: String,
  //   msg: {type: String, required: true}
  // },

})</script>

<style lang="scss">
.v-section-timeline {
  .v-section-timeline__header {
    padding-bottom: 1rem;
  }

  .v-section-timeline__items {
    position: relative;
  }

  .v-section-timeline__items__lines {
    display: block;
    position: absolute;
    top: 0;
    left: calc( 100% / 24 * 11 );
    height: 100%;
    width: 2px;
    background-color: var(--color-secondary);
  }
}
</style>
