<template>
  <a
      class="v-people-item"
      :class="{'with-image': peopleItem.cover}"
      :href="peopleItem.link ? peopleItem.link : null"
      target="_blank"
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
        class="v-people-item__text fp-remove-child-spacing"
    ><html-content-with-hash-mail :content="peopleItem.text" ></html-content-with-hash-mail></div>

    <div
        class="v-people-item__link fp-ui-external-link"
        v-if="peopleItem.link"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M22.5 34H14q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h8.5v3H14q-3 0-5 2t-2 5q0 3 2 5t5 2h8.5Zm-6.25-8.5v-3h15.5v3ZM25.5 34v-3H34q3 0 5-2t2-5q0-3-2-5t-5-2h-8.5v-3H34q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z"/></svg></div>
  </a>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import ImageMask from "./ImageMask.vue"
import type {IFPApiSectionPeopleItems} from "@/froproApi/FPApi"
import HtmlContentWithHashMail from "@/components/htmlContentWithHashMail.vue"

export default defineComponent({
  components: {HtmlContentWithHashMail, ImageMask},
  props: {
    peopleItem: {
      type: Object as PropType<IFPApiSectionPeopleItems>,
      required: true
    }
  },

})</script>

<style lang="scss">
@import "../style/main";

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

    .fp-ui-external-link {
      svg {
        transform: rotateZ(-10deg);

        path {
          fill: var(--color-secondary);
        }
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

  .v-people-item__text {
    margin-bottom: .5rem;
    .v-html-content-with-hash-mail {
      @extend .fp-remove-child-spacing;
    }
  }

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
