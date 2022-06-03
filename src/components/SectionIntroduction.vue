<template>
  <section class="v-section-introduction fp-section--default fp-with-gutter fp-grid-container">
    <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24 fp-grid-skip-1-24">
      <h1>Faire ensemble</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque aut consequatur corporis deserunt, eos esse eveniet, expedita facere harum inventore, natus nihil nobis non omnis quo. Ipsa, iusto.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore et explicabo in ipsa ipsum laboriosam. Amet culpa cumque eius, fugit possimus recusandae voluptas voluptates. Minima odio quia ratione voluptates?</p>
    </div>
    <div class="fp-with-gutter fp-remove-child-spacing fp-grid-coll-11-24">
      <image-mask
          filter-s-v-g-file-name="forme-1"
          class="v-section-introduction__cover"
          alt="cover intruduction"
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&h=710&q=80"
      ></image-mask>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import ImageMask from "@/components/ImageMask.vue"

export default defineComponent({
  components: {ImageMask}

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
    max-width: 500px;
    margin: auto;
    box-sizing: border-box;
  }

}
</style>
