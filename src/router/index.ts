import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({

  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPostition) {
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ViewHome.vue')
    },
    {
      path: '/mail-signature-generator',
      name: 'mail-signature-generator',
      component: () => import('../views/mailSignatureGenerator.vue')
    },
    {
      path: '/inscription-newsletter',
      name: 'inscription-newsletter',
      component: () => import('../views/NewsletterInscription.vue')
    },
  ]
})

export default router
