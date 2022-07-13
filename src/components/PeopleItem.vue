<template>
  <a
      class="v-people-item"
      :href="peopleItem.link"
      target="_blank"
  >
    <div
        class="v-people-item__img"
        v-for="cover of peopleItem.cover"
    >
      <image-mask
          :src="cover.mediaUrl"
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

    <div
        class="v-people-item__link"
        v-if="peopleItem.link"
    ><span>+</span></div>
  </a>
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
  text-align: center;
  text-decoration: none;

  .v-image-mask__img {
    transition: transform 350ms ease-in-out;
    transform: scale(1);
  }

  &:hover {
    .v-people-item__link span {
      transform: rotateZ(45deg);
      color: var(--color-secondary);
    }

    .v-image-mask__img {
      transform: scale(.95);
    }
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

.v-people-item__link {
  display: block;
  text-decoration: none;

  span {
    position: relative;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    line-height: 1em;
    transform: rotateZ(0);
    transform-origin: center;
    transition: transform 150ms ease-in-out,  color 150ms ease-in-out;
  }
}

.v-people-item__text {}
.v-people-item__topic {}
</style>
