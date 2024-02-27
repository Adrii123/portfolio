import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProjetS1 from '../views/Projet_S1.vue'
import ProjetSAE202 from '../views/Projet_SAE202.vue'
import ProjetCassandre from '../views/Projet_Cassandre.vue';
import ProjetItalie from '../views/Projet_Italie.vue'
import ProjetS2 from '../views/Projet_S2.vue'
import ProjetSAE105 from '../views/Projet_SAE105.vue'
import ProjetStreaming from '../views/Projet_streaming.vue'
import ProjetUNSS from '../views/Projet_UNSS.vue'
import ProjetVAE from '../views/Projet_VAE.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/projet-s1',
      name: 'ProjetS1',
      component: () => import('../views/Projet_S1.vue')
    },
    {
      path: '/projet-sae202',
      name: 'ProjetSAE202',
      component: () => import('../views/Projet_SAE202.vue')
    },
    {
      path: '/projet-cassandre',
      name: 'ProjetCassandre',
      component: () => import('../views/Projet_Cassandre.vue')
    },
    {
      path: '/projet-italie',
      name: 'ProjetItalie',
      component: () => import('../views/Projet_Italie.vue')
    },
    {
      path: '/projet-s2',
      name: 'ProjetS2',
      component: () => import('../views/Projet_S2.vue')
    },
    {
      path: '/projet-sae105',
      name: 'ProjetSAE105',
      component: () => import('../views/Projet_SAE105.vue')
    },
    {
      path: '/projet-streaming',
      name: 'ProjetStreming',
      component: () => import('../views/Projet_streaming.vue')
    },
    {
      path: '/projet-unss',
      name: 'ProjetUNSS',
      component: () => import('../views/Projet_UNSS.vue')
    },
    {
      path: '/projet-vae',
      name: 'ProjetVAE',
      component: () => import('../views/Projet_VAE.vue')
    },
  ]
})

export default router
