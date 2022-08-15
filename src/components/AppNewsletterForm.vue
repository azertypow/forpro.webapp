<template>
  <div
      class="v-app-newsletter-form"
  >
    <div
        class="v-app-newsletter-form__close"
        @click="forProDataStore.newsletterIsOpen = false"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px"
          viewBox="0 0 213.8 213.8"
          xml:space="preserve">
        <polygon
            points="213.8,23.8 190.1,0 106.9,83.2 23.8,0 0,23.8 83.2,106.9 0,190.1 23.8,213.8 106.9,130.7 190.1,213.8 213.8,190.1, 130.7,106.9 "/>
      </svg>
    </div>
    <div
        ref="formContainer"
        class="v-app-newsletter-form__content"
        v-html="newsletterForm"
    ></div>
  </div>
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
    newsletterForm(): string | null {
      this.setValidFormListener()
      return this.forProDataStore.newsletterForm
    }
  },

  methods: {
    setValidFormListener() {
      if(this.newsletterForm === null) return
      this.$nextTick(() => {
        if( !(this.$refs.formContainer instanceof HTMLElement) ) return
        const nodeListOfFormElements = this.$refs.formContainer.querySelectorAll('form')
        for(const formElement of nodeListOfFormElements) {
          if(formElement instanceof HTMLFormElement)
            formElement.addEventListener('submit', () => {
              this.forProDataStore.newsletterIsOpen = false
            })
        }
      })
    }
  }
})</script>

<style lang="scss">
@import "../style/main";
.v-app-newsletter-form {
  position: relative;


  .v-app-newsletter-form__close {
    position: absolute;
    top: var(--unit-gutter-half);
    right: var(--unit-gutter-half);
    width: .75rem;
    height: .75rem;
    cursor: pointer;

    svg {
      display: block;
    }
  }

  .v-app-newsletter-form__content {
    .inf-form {
      @include fp-text-default;
      margin: 0;
    }

    [class*=inf-main_] {
      @extend .fp-remove-child-spacing;
      box-sizing: border-box;
      padding: var(--unit-gutter-half);
      margin: 0;
      background: var(--color-white);
      color: var(--color-black);

      > * {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
        color: var(--color-black);
      }

      h4 {
        @include fp-text-h4;
      }

      span {
        @include fp-text-small;
      }

      .inf-submit input {
        background: var(--color-secondary);
      }
    }

    .inf-content {
      @extend .fp-remove-child-spacing;

      > * {
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: var(--color-black);
        box-sizing: border-box;
        width: 100%;

        > input {
          @include fp-text-default;
          font-family: "Junka", serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
          Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          margin: 0;
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: var(--unit-gutter-half);
          height: calc( var(--unit-horizontal) * 2);

          &[type="submit"] {
            @extend .fp-ui-button;
            color: var(--color-secondary);
            background: var(--color-white);
          }
        }
      }
    }
  }
}
</style>
