<template>
  <header class="v-app-header fp-with-gutter">

    <div
        class="fp-logo v-app-header__logo fp-with-gutter"
    >LearningLab</div>

    <nav
        class="v-app-header__nav"
    >
      <RouterLink class="fp-with-gutter" to="/#header">Accueil</RouterLink>
      <RouterLink class="fp-with-gutter" to="/#plan">Plan</RouterLink>
      <div        class="fp-with-gutter" >
        <div class="v-app-header__toggle-theme" ></div>
      </div>
    </nav>
  </header>
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
.v-app-header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .v-app-header__nav {
    display: flex;
  }

  .v-app-header__toggle-theme {
    background-color: var(--color-text);
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    cursor: pointer;
  }

  .v-app-header__logo {
    color: var(--color-secondary);
  }
}

</style>
