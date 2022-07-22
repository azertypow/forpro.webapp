<template>
  <div
      class="v-people-item"
      :class="{'with-image': peopleItem.cover}"
  >
    <div
        class="v-people-item__img"
        v-for="cover of peopleItem.cover"
    >
      <image-mask
          :src="cover.resize.small"
          filter-s-v-g-file-name="circle"
      ></image-mask>
    </div>

    <div
        class="v-people-item__name"
    >{{peopleItem.name}}</div>

    <div
        class="v-people-item__topic"
    >{{peopleItem.topic}}</div>

    <div
        v-html="peopleItem.text"
        class="v-people-item__text fp-remove-child-spacing"
    ></div>

    <a
        class="v-people-item__link fp-ui-external-link"
        v-if="peopleItem.link"
        :href="peopleItem.link"
        target="_blank"
    >
      <span>Lien externe</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M22.5 34H14q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h8.5v3H14q-3 0-5 2t-2 5q0 3 2 5t5 2h8.5Zm-6.25-8.5v-3h15.5v3ZM25.5 34v-3H34q3 0 5-2t2-5q0-3-2-5t-5-2h-8.5v-3H34q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z"/></svg>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import ImageMask from "./ImageMask.vue"
import type {IFPApiSectionPeopleItems} from "@/froproApi/FPApi"

export default defineComponent({
  components: {ImageMask},
  props: {
    peopleItem: {
      type: Object as PropType<IFPApiSectionPeopleItems>,
      required: true
    }
  },

})</script>

<style lang="scss">
.v-people-item {
  display: block;
  text-decoration: none;

  .v-image-mask__img {
    transition: transform 350ms ease-in-out;
    transform: scale(1);
  }

  &:hover {
    .v-image-mask__img {
      transform: scale(.95);
    }
  }

  .v-people-item__img {
    margin: auto;
    max-width: 250px;
    padding-bottom: 1rem;
  }

  .v-people-item__name {
    font-weight: 800;
    color: var(--color-secondary);
  }

  .v-people-item__text {}

  .v-people-item__topic {
    font-weight: 800;
    margin-bottom: .5rem;
  }

  &.with-image {
    text-align: center;

    .v-people-item__link {
      justify-content: center;
    }
  }
}
</style>
