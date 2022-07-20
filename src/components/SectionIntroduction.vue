<template>
  <section class="v-section-introduction fp-section--default fp-grid-container fp-max-width">
    <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24">
      <h1>{{FPApiSectionIntro.title}}</h1>
      <div
          v-html="FPApiSectionIntro.text"
      ></div>
    </div>

    <div
        class="fp-grid-coll-22-24 fp-grid-skip-1-24"
    >
      <div
          v-for="(article, counter) of FPApiSectionIntro.articles"
          class="fp-grid-container v-section-introduction__article"
      >
        <div
            class="v-section-introduction__article__img fp-grid-coll-12-24 fp-with-gutter"
        >
          <image-mask
              v-for="image of article.image"
              :src="image.url"
              :filter-s-v-g-file-name="counter % 2 === 0 ? 'forme-1' : 'circle'"
          ></image-mask>
        </div>

        <div
            class="v-section-introduction__article__text fp-grid-coll-12-24"
        >
          <div
              class="fp-grid-container"
          >
            <div
                class="v-section-introduction__article__text__item fp-grid-coll-12-24 fp-with-gutter fp-remove-child-spacing"
                v-for="item of article.items"
                v-html="item"
            ></div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import type {PropType} from "vue"
import ImageMask from "@/components/ImageMask.vue"
import type {IFPApiSectionFoundation, IFPApiSectionIntro} from "@/froproApi/FPApi"

export default defineComponent({
  components: {ImageMask},

  props: {
    FPApiSectionIntro: {
      required: true,
      type: Object as PropType<IFPApiSectionIntro>
    }
  }

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-section-introduction {
  background-color: var(--color-background);

  .v-section-introduction__article + .v-section-introduction__article {
    margin-top: 1rem;
  }

  strong {
    color: var(--color-secondary);
  }

  .v-section-introduction__cover {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: auto;
    box-sizing: border-box;
  }

  @media all and (max-width: $breakpoint--mobile) {
    > * {
      margin: 0;
      width: 100%;
    }
  }

  .v-section-introduction__article {
    align-items: center;
    flex-direction: row-reverse;

    @media (max-width: $breakpoint--mobile) {
      padding-left: var(--unit-gutter-half);
      padding-right: var(--unit-gutter-half);
    }

    .v-section-introduction__article__img {
      @media (max-width: $breakpoint--small) {
        width: 100%;
      }
    }

    .v-section-introduction__article__text {
      @media (max-width: $breakpoint--small) {
        width: 100%;
      }
    }

    .v-section-introduction__article__text__item {
      padding-top: 1rem;
      padding-bottom: 1rem;

      @media (max-width: $breakpoint--mobile) {
        width: 100%;
      }
    }

    &:nth-child(2n) {
      flex-direction: row;
    }
  }


}
</style>
