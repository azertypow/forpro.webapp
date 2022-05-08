<template>
  <section class="v-section-header fp-with-gutter">
    <div class="v-section-header__text fp-remove-child-spacing">
      <h1 class="v-section-header__title">Learning Lab</h1>
      <h2 class="fp-with-gutter v-section-header__subtitle">Viens construire ta voie professionnelle&nbsp;!</h2>
    </div>

    <div class="v-section-header__graphic">
      <img class="v-section-header__icon-bottom" src="../assets/intro.svg" alt="element graphic">
      <div class="v-section-header__icon-right" ></div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  // props: {
  //   // name: String,
  //   // msg: {type: String, required: true}
  // },

})</script>

<style lang="scss">
.v-section-header {
  background-color: var(--color-ternary);
  background-size: cover;
  position: relative;
  //overflow: hidden;

  .v-section-header__text {
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc( 100vh - var(--header-height) );
    box-sizing: border-box;
  }

  h1 {
    color: var(--color-main);
    position: relative;
    z-index: 1000000000;
  }

  h2 {
    color: var(--color-white);
    position: relative;
    z-index: 100;
  }

  .v-section-header__graphic {
    position: static;
    pointer-events: none;
  }

  .v-section-header__icon-right {
    position: absolute;
    border: solid 8vw var(--color-secondary);
    width:  calc(100vw / 12 * 4);
    height: calc(100vw / 12 * 4);
    top: 0;
    right: 0;
    transform: translate(28%, -25%);
    z-index: 100000;
    border-radius: 100%;
  }

  .v-section-header__icon-bottom {
    position: absolute;
    bottom: 0;
    left: calc(100% / 12);
    width: calc(100% / 12 * 5);
  }
}
</style>
