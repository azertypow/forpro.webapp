<template>
  <div class="v-timeline-item fp-with-gutter fp-grid-container">

    <div class="fp-grid-coll-2-24"></div>

    <div class="v-timeline-item__image fp-grid-coll-8-24">
      <image-mask
          filter-s-v-g-file-name="circle"
          src="images/jambes.jpeg"
      ></image-mask>
    </div>

    <div class="fp-grid-coll-2-24"></div>

    <div class="fp-grid-coll-10-24">
      <h5 class="v-timeline-item__date">12.9.2022</h5>
      <h2 class="v-timeline-item__title">Ouverture du bâtiment</h2>
      <div class="v-timeline-item__content fp-remove-child-spacing">
        <p>Contribuer à faire de la formation professionnelle une voie d’excellence, une voie désirée et désirableImusapedit atemporitem ut ipsam cusam dem ilit etur molupis molorumVitem volessitatis pro berumquaesto magnatur, ut is debis.</p>
      </div>
    </div>

    <div class="fp-grid-coll-2-24"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import ImageMask from "@/components/ImageMask.vue"

export default defineComponent({
  components: {ImageMask},
})</script>

<style lang="scss">
.v-timeline-item {
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .v-timeline-item__title {
    color: var(--color-main);
    margin: 0;
  }

  .v-timeline-item__date {
    color: var(--color-secondary);
    margin: 0;
  }
}
</style>
