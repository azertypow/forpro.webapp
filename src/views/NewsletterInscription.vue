<template>
    <div class="v-newsletter-inscription">
        <div class="v-mail-signature-generator">
            <div class="fp-grid-container">
                <div
                    style="padding-bottom: 3rem"
                    class="fp-grid-coll-18-24 fp-grid-skip-1-24 fp-max-width"
                >
                    <div
                        class="fp-with-gutter"
                    >
                        <h1>Newsletter</h1>
                    </div>

                    <app-newsletter-form
                        :show-u-i="false"
                    ></app-newsletter-form>
                </div>

            </div>

        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppNewsletterForm from "@/components/AppNewsletterForm.vue";

export default defineComponent({
    components: {AppNewsletterForm}
    // props: {
    //     name: String,
    //     msg: {type: String, required: true}
    // },



})</script>

<style lang="scss">
.v-newsletter-inscription {
}
</style>
