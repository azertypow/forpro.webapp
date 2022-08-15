<template>
  <section
      class="v-section-header"
  >
    <div
        class="v-section-header__img"
        :style="{
        backgroundImage: backgroundImage
      }"
    >
      <img
          :src="`images/logo--${forProDataStore.fpThemeName}.svg`"
          class="v-section-header__logo fp-with-gutter fp-grid-coll-22-24 fp-grid-skip-1-24"
          alt="header logo"
      >
    </div>

    <div
        class="v-section-header__text fp-grid-container fp-max-width"
    >
      <div
          class="v-section-header__text__container fp-with-gutter fp-remove-child-spacing fp-grid-coll-16-24 fp-grid-skip-1-24"
      >
        <p>La fondation ForPro a pour but d’encourager, de soutenir, de valoriser et de promouvoir la formation professionnelle auprès des apprenti∙e∙s, de leur entourage et des entreprises du canton de Genève.</p>
        <p>Une première étape consiste à imaginer, penser et aménager les espaces qui abriterons les projets et prestations développés par ForPro en fonction des besoins et des usages des publics-cibles, soit tous les acteurs de la formation professionnelle : les apprenti∙e∙s, les entreprises, les formateurs.trices ou encore les parents!</p>
        <p>Cette première version de site internet rend visible les étapes de création des projets.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useForProDataStore} from "@/stores/forProData"

export default defineComponent({
  data() {
    return {
      forProDataStore: useForProDataStore(),
    }
  },

  computed: {
    backgroundImage(): string {
      return `url("images/background--${this.forProDataStore.fpThemeName}.svg")`
    },
  }
})</script>

<style lang="scss">
@import "../style/main";

.v-section-header__img {
  background-color: var(--themejs--background-color);
  background-size: cover;
  position: relative;
  height: 80vh;
  background-position: center;
  display: flex;
  align-items: center;

  .blue & {
    background-position: 70% center;
  }

  @media (max-width: $breakpoint--mobile) {
    height: 50vh;
  }

  .v-section-header__logo {
    display: block;
    height: auto;
    user-select: none;
    pointer-events: none;

    @media (max-width: $breakpoint--mobile) {
      width: 100%;
      margin: 0;
    }
  }
}

.v-section-header__text {
  padding-top: 2rem;

  @media all and (max-width: $breakpoint--mobile) {
    > * {
      margin: 0;
      width: 100%;
    }
  }

  .v-section-header__text__container {
    p {
      @include fp-text-h3;
    }
  }

}
</style>
