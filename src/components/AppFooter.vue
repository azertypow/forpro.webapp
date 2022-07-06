<template>
  <div class="v-app-footer fp-section--default">
    <div class="v-app-footer__container fp-grid-container fp-with-gutter fp-max-width">
      <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-12-24">
        <h4>LearningLab</h4>
        <p>
          Rte de la Galaise 19
          <br>1228 Plan-les-Ouates
          <br>+41 22 000 00 00
        </p>

        <p>
          info@learninglab.ch
          <br>instagram
          <br>facebook
          <br>linkedin
        </p>
      </div>
      <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-12-24">
        <h4>Horaire d'ouverture</h4>
        <p>
          lundi au vendredi
          <br>de 8h00 à 17h00
        </p>

        <h4>Accès</h4>
        <p>
          Bus
          <br>Tram
        </p>

        <h4>Newsletter</h4>
        <p>
          Découvrez nos dernières actualités !
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  // props: {
  //   name: String,
  //   msg: {type: String, required: true}
  // },

})</script>

<style lang="scss">
@import "../style/00-sass_parameters";

.v-app-footer {
  min-height: 50vh;
  background-color: var(--themejs--background-color);
  color: var(--color-main--dark);

  .v-app-footer__container {
    @media (max-width: $breakpoint--small) {
      > * {
        width: 100%;
      }

      > * + * {
        margin-top: 2rem;
      }
    }
  }
}
</style>
