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
      path: '/forpro.webapp/mail-signature-generator',
      name: 'mail-signature-generator',
      component: () => import('../views/mailSignatureGenerator.vue')
    },
  ]
})

export default router
