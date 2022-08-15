<template>
  <header class="v-app-header">

    <div
        class="v-app-header__left"
    >
      <router-link
          class="v-app-header__logo fp-with-gutter"
          to="/"
      ><img alt="header logo" src="/images/logo.svg"></router-link>
      <div class="v-app-header__baseline fp-with-gutter" >Faire de la formation professionnelle une voie désirée et désirable</div>
    </div>

    <div
        @click="() => {forProDataStore.toggleMenuStatus()}"
        class="v-app-header__toggle-menu"
        :class="{
          'menu-is-open': forProDataStore.menuIsOpen
        }"
    >
      <div class="v-app-header__toggle-menu__ui-line"></div>
      <div class="v-app-header__toggle-menu__ui-line"></div>
    </div>

    <transition
        name="fade-from"
    >
      <div
          class="v-app-header__cache--menu"
          v-if="forProDataStore.menuIsOpen"
          @click="forProDataStore.menuIsOpen = false"
      ></div>
    </transition>

    <transition
        name="fade-from-right"
    >
      <nav
          class="v-app-header__nav fp-with-gutter"
          v-if="forProDataStore.menuIsOpen"
      >
        <RouterLink
            v-for="sectionAnchor of forProDataStore.ArrayOfSectionAnchor"
            class="v-app-header__nav__link fp-with-gutter fp-with-row fp-text-h1"
            :to="`/#${sectionAnchor}`"
            @click="forProDataStore.menuIsOpen = false"
        >{{sectionAnchor}}</RouterLink>
        <RouterLink
            class="v-app-header__nav__link fp-with-gutter fp-with-row fp-text-h1"
            to="/#footer"
            @click="forProDataStore.menuIsOpen = false"
        >Contact</RouterLink>
      </nav>
    </transition>

    <transition
        name="fade-from"
    >
      <div
          class="v-app-header__cache--newsletter"
          v-if="forProDataStore.newsletterIsOpen"
          @click="forProDataStore.newsletterIsOpen = false"
      ></div>
    </transition>

    <transition
        name="fade-newsletter"
    >
      <section
          class="v-app-header__newsletter-form"
          v-if="forProDataStore.newsletterIsOpen"
      >
        <app-newsletter-form></app-newsletter-form>
      </section>
    </transition>

  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useForProDataStore} from "@/stores/forProData"
import AppNewsletterForm from "@/components/AppNewsletterForm.vue"

export default defineComponent({
  components: {AppNewsletterForm},
  data() {
    return {
      forProDataStore: useForProDataStore()
    }
  }

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";
@import "../style/01-typography";

.v-app-header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .v-app-header__left {
    display: flex;
    align-items: center;
  }

  .v-app-header__nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: var(--header-height);
    right: 0;
    width: auto;
    min-width: 50%;
    height: calc(100% - var(--header-height) );
    background-color: var(--color-background);
    z-index: 11;

  }

  .v-app-header__nav__link {
    @media (max-width: 1400px) {
      @include fp-text-h2;
      margin: 0;
    }

    margin-top: .5rem;
    margin-bottom: 0;
    text-decoration: none;

    &:hover {
      color: var(--color-main);
    }
  }

  .v-app-header__cache--menu {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: calc(100% - var(--header-height) );
    top: var(--header-height);
    left: 0;
    background: black;
    opacity: .8;
  }

  .v-app-header__cache--newsletter {
    @extend .v-app-header__cache--menu;
    top: 0;
    height: 100%;
  }

  .v-app-header__toggle-theme {
    background-color: var(--color-text);
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    cursor: pointer;
  }

  .v-app-header__logo {
    display: block;
    cursor: pointer;
    text-decoration: none;

    img {
      display: block;
      height: 1rem;
      user-select: none !important;
      pointer-events: none !important;
    }
  }

  .v-app-header__baseline {
    margin-left:  var(--unit-gutter);

    @media all and (max-width: $breakpoint--mobile) {
      display: none;
    }
  }

  .v-app-header__toggle-menu {
    $bouton-size: 1rem;

    cursor: pointer;
    position: relative;
    width: $bouton-size;
    height: $bouton-size;
    padding: calc( var(--unit-gutter-half) / 2 );
    margin-right: calc( var(--unit-gutter-half) / 2 );
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    .v-app-header__toggle-menu__ui-line {
      width: 100%;
      height: 3px;
      background: var(--color-black);
      position: relative;
      top: 0;
      left: 0;
      transition: transform 250ms ease-in-out;
      transform-origin: left center;

      &:nth-child(1) {
        transform: translateY(calc( #{$bouton-size} / 5 * 2 ));
      }

      &:nth-child(2) {
        transform: translateY(calc( #{$bouton-size} / 5 * 3 ));
      }
    }

    &.menu-is-open {
      .v-app-header__toggle-menu__ui-line {
        &:nth-child(1) {
          transform: translate( calc( #{$bouton-size} / 10 * 1 ), calc( #{$bouton-size} / 5 * 1 ) ) rotateZ(45deg);
        }

        &:nth-child(2) {
          transform: translate( calc( #{$bouton-size} / 10 * 1 ), calc( #{$bouton-size} / 5 * 4 ) )            rotateZ(-45deg);
        }
      }
    }
  }

  .v-app-header__newsletter-form {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 11;
    display: block;
    width: 100%;
    max-width: 30rem;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: var(--unit-gutter-half);
  }

  .fade-from-right-enter-active,
  .fade-from-right-leave-active,
  {
    transition: opacity .5s ease-in-out, transform .5s ease-in-out;
  }
  .fade-from-right-enter-from,
  .fade-from-right-leave-to,
  {
    opacity: 0;
    transform: translate(25%);
  }

  .fade-from-enter-active,
  .fade-from-leave-active,
  {
    transition: opacity .5s ease-in-out;
  }
  .fade-from-enter-from,
  .fade-from-leave-to,
  {
    opacity: 0;
  }

  .fade-newsletter-enter-active,
  .fade-newsletter-leave-active,
  {
    transition: opacity .5s ease-in-out, transform .5s ease-in-out;
  }
  .fade-newsletter-enter-from,
  {
    opacity: 0;
    transform: translate3d(-50%, calc( -50% + 5rem), 0);
  }

  .fade-newsletter-leave-to {
    opacity: 0;
    transform: translate3d(-50%, calc( -50% - 5rem), 0);
  }
}

</style>
