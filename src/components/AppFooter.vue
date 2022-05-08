<template>
  <div class="v-app-footer fp-section--default">
    <div class="fp-grid-container fp-with-gutter">
      <div class="fp-with-gutter fp-grid-coll-main fp-remove-child-spacing">
        <p>
          <strong>LearningLab</strong>
          <br>Rte de la Galaise 19
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
      <div class="fp-with-gutter fp-grid-coll-main fp-remove-child-spacing">
        <p>
          <strong>Horaire d'ouverture</strong>
          <br>lundi au vendredi
          <br>de 8h00 à 17h00
        </p>

        <p>
          <strong>Accès</strong>
          <br>Bus
          <br>Tram
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
.v-app-footer {
  min-height: 50vh;
  background-color: var(--color-ternary);
  color: var(--color-main--dark);
}
</style>
