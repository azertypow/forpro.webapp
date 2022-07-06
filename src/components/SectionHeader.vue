<template>
  <section
      class="v-section-header fp-with-gutter"
  >
    <img
        src="/images/logo.svg"
        class="v-section-header__logo fp-with-gutter fp-grid-coll-22-24 fp-grid-skip-1-24"
        alt="header logo"
    >
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-section-header {
  background-color: var(--color-ternary);
  background-size: cover;
  background-image: url("/public/images/background.svg");
  position: relative;
  height: 80vh;
  background-position: center;
  display: flex;
  align-items: center;

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

  //.v-section-header__text {
  //  pointer-events: none;
  //  display: flex;
  //  flex-direction: column;
  //  justify-content: center;
  //  //min-height: calc( 100vh - var(--header-height) );
  //  box-sizing: border-box;
  //  padding-top:    10vw;
  //  padding-bottom: 10vw;
  //}

  //h1 {
  //  color: var(--color-main);
  //  position: relative;
  //  z-index: 10;
  //}
  //
  //h2 {
  //  color: var(--color-white);
  //  position: relative;
  //  z-index: 10;
  //}
  //
  //.v-section-header__graphic {
  //  position: static;
  //  pointer-events: none;
  //}
  //
  //.v-section-header__icon-right {
  //  position: absolute;
  //  border: solid 8vw var(--color-secondary);
  //  width:  calc(100vw / 12 * 4);
  //  height: calc(100vw / 12 * 4);
  //  top: 0;
  //  right: 0;
  //  transform: translate(28%, -25%);
  //  border-radius: 100%;
  //  background-image: url('/images/FORPRO_01_Entreprise_web.jpg');
  //  background-size: cover;
  //}
  //
  //.v-section-header__icon-bottom {
  //  position: absolute;
  //  bottom: 0;
  //  left: calc(100% / 12);
  //  width: calc(100% / 12 * 5);
  //}
}
</style>
