<template>
  <section class="v-section-introduction fp-with-gutter fp-grid-container">
    <div class="fp-with-gutter fp-grid-coll-main fp-remove-child-spacing">
      <h3>Faire ensemble</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque aut consequatur corporis deserunt, eos esse eveniet, expedita facere harum inventore, natus nihil nobis non omnis quo. Ipsa, iusto.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore et explicabo in ipsa ipsum laboriosam. Amet culpa cumque eius, fugit possimus recusandae voluptas voluptates. Minima odio quia ratione voluptates?</p>
    </div>
    <div class="fp-with-gutter fp-grid-coll-main fp-remove-child-spacing">
      <img
          class="v-section-introduction__cover"
          alt="cover intruduction"
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&h=710&q=80"
      >
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
.v-section-introduction {

  .v-section-introduction__cover {
    display: block;
    width: 100%;
    height: auto;
    max-width: 500px;
    border-radius: 100%;
    object-fit: contain;
    margin: auto;
    border: solid 40px var(--color-secondary);
    box-sizing: border-box;
  }

}
</style>
